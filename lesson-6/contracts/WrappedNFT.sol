//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {MyToken} from "./MyNFT.sol";

contract WrappedNFT is MyToken {
    constructor(string memory tokenName, string memory tokenSymbol) 
    MyToken(tokenName, tokenSymbol) {}

    function mintWithSpecificTokenId(address to, uint256 _tokenId) public {
        _safeMint(to, _tokenId);
    }
}