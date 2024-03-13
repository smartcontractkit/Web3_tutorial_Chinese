// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract FundToken {
    // name: FundToken
    // symbol: FT
    // totalSupply: 1000
    // owner
    // balances: holder -> amount
    // functions: transfer, getBalance, mint, burn

    string public TOKEN_NAME;
    string public SYMBOL;
    uint256 public totalSupply = 1000 * 10 ** 18;
    mapping(address holder => uint256 balance) public balance;
    address public owner;

    constructor(string memory tokenName, string memory symbol) {
        TOKEN_NAME = tokenName;
        SYMBOL = symbol;
        owner = msg.sender;
        balance[owner] = totalSupply;
    }

    function balanceOf(address addrToCheck) public view returns (uint256) {
        return balance[addrToCheck];
    }

    function transfer(address payee, uint256 amountToTransfer) public {
        require(balanceOf(msg.sender) >= amountToTransfer, "You do not have sufficient balance");
        balance[msg.sender] -= amountToTransfer;
        balance[payee] += amountToTransfer;
    }

    function mint(uint256 amountToMint) public {
        require(msg.sender == owner, "You are not allowed to mint tokens");
        balance[msg.sender] += amountToMint;
        totalSupply += amountToMint;
    }
}