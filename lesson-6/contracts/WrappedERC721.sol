// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import { MyToken } from "./MyNFT.sol";

contract WrappedMyToken is MyToken {
    constructor(address initialOwner)
        MyToken(initialOwner)
    {}

    function mintWithSpecificTokenId(address to, uint256 _tokenId) public {
        _safeMint(to, _tokenId);
    }
}