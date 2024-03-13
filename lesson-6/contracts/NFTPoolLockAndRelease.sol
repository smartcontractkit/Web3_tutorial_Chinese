// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import { MyToken } from "./MyNFT.sol";

/**
 * The purpose of this contract is to lock the NFT in the chain where the NFT contract deployed
 * And send a cross-chain transaction to dest chain to mint a new WrappedNFT
 */

/// @title - A simple contract for sending string data across chains.
contract NFTPoolLockAndRelease is OwnerIsCreator, CCIPReceiver {
    
    // NFTContract on the current chain
    MyToken nft;
    mapping(uint256 => bool) tokenLocked;

    // data struct of the request
    struct RequestData {
        uint256 tokenId;
        address newOwner;
    }

    // Custom errors to provide more descriptive revert messages.
    error NotEnoughBalance(uint256 currentBalance, uint256 calculatedFees); // Used to make sure contract has enough balance.

    // Event emitted when a message is sent to another chain.
    event MessageSent(
        bytes32 indexed messageId, // The unique ID of the CCIP message.
        uint64 indexed destinationChainSelector, // The chain selector of the destination chain.
        address receiver, // The address of the receiver on the destination chain.
        address feeToken, // the token address used to pay CCIP fees.
        uint256 fees // The fees paid for sending the CCIP message.
    );

    IRouterClient private s_router;

    LinkTokenInterface private s_linkToken;

    /// @notice Constructor initializes the contract with the router address.
    /// @param _router The address of the router contract.
    /// @param _link The address of the link contract.
    constructor(address _router, address _link, address nftAddr) CCIPReceiver(_router) {
        s_router = IRouterClient(_router);
        s_linkToken = LinkTokenInterface(_link);
        nft = MyToken(nftAddr);
    }

    function _ccipReceive(Client.Any2EVMMessage memory message) internal override {
        // check if the tokenId is locked
        RequestData memory requestData = abi.decode(message.data, (RequestData));
        uint256 tokenId = requestData.tokenId;
        address newOwner = requestData.newOwner;
        
        require(tokenLocked[tokenId], "the token is not locked");
        nft.approve(newOwner, tokenId);
        tokenLocked[tokenId] = false;
    }

    function lockAndCrossChainNft(
        uint256 tokenId, 
        address newOwner, 
        uint64 destinationChainSelector, 
        address destReceiver
        ) public returns(bytes32 messageId) {
        // use ccipRegistry to test if the chain is exist and find the receiver
        // for now the receiver is hardcoded

        // check if the msgsender is the tokenholder
        require(nft.ownerOf(tokenId) == msg.sender, "You have to be the owner of the token");
        // transfer the nft from holder to this contract
        
        nft.transferFrom(msg.sender, address(this), tokenId);
        
        bytes memory payload = abi.encode(tokenId, newOwner);
        // send a function to mint a new nft in another chain
        messageId = sendCrossChainTransaction(payload, destReceiver, destinationChainSelector);
        tokenLocked[tokenId] = true;
    }

    function sendCrossChainTransaction(bytes memory payload, address destReceiver, uint64 destinationChainSelector) internal 
        returns (bytes32 messageId) {
        Client.EVM2AnyMessage memory evm2AnyMessage = Client.EVM2AnyMessage({
            receiver: abi.encode(destReceiver),
            data: payload,
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: Client._argsToBytes(
                // Additional arguments, setting gas limit
                Client.EVMExtraArgsV1({gasLimit: 200_000})
            ),
            feeToken: address(s_linkToken)
        });

        // Get the fee required to send the message
        uint256 fees = s_router.getFee(
            destinationChainSelector,
            evm2AnyMessage
        );

        if (fees > s_linkToken.balanceOf(address(this)))
            revert NotEnoughBalance(s_linkToken.balanceOf(address(this)), fees);

        // approve the Router to transfer LINK tokens on contract's behalf. It will spend the fees in LINK
        s_linkToken.approve(address(s_router), fees);

        // Send the message through the router and store the returned message ID
        messageId = s_router.ccipSend(destinationChainSelector, evm2AnyMessage);
        // Emit an event with message details
        emit MessageSent(
            messageId,
            destinationChainSelector,
            destReceiver,
            address(s_linkToken),
            fees
        );
    }
}