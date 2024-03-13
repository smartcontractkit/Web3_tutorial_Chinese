// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;
import { FundToken } from "./FundToken.sol";

contract FundTokenWithBurn is FundToken {
    constructor() FundToken("FundTokenWithBurn", "FTB") {}

    function burn(uint256 amountToBurn) public {
        totalSupply -= amountToBurn;
        balance[msg.sender] -= amountToBurn;
    }
}