// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {FundMe} from "./FundMe.sol";

contract MyToken is ERC20 {
    address owner;
    FundMe fm;
    constructor(address fundMeAddr) ERC20("MyToken", "MTK") {
        owner = msg.sender;
        fm = FundMe(fundMeAddr);
    }

    function mint(uint256 amountToMint) public {
        require(fm.listOfFunders(msg.sender) >= amountToMint, "You don't have enough points to claim");
        require(fm.fundSuccess(), "fundraising failed");
        _mint(msg.sender, amountToMint);
    }

    function burn(uint256 amountToBurn) public {
        require(balanceOf(msg.sender) >= amountToBurn, "You do not have enough balance.");
        _burn(msg.sender, amountToBurn);
    }
}