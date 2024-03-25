//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FundToken {
    // 1. 通证的名字
    // 2. 通证的简称
    // 3. 通证的发行数量
    // 4. owner地址
    // 5. balance address => uint256
    string public tokenName;
    string public tokenSymbol;
    uint256 public totalSupply;
    address public owner;
    mapping(address => uint256) public balances;

    constructor(string memory _tokenName, string memory _tokenSymbol) {
        tokenName = _tokenName;
        tokenSymbol = _tokenSymbol;
        owner = msg.sender;
    }

    // mint: 获取通证
    function mint(uint256 amountToMint) public {
        balances[msg.sender] += amountToMint;
        totalSupply += amountToMint;
    }

    // transfer: transfer 通证
    function transfer(address payee, uint256 amount) public {
        require(balances[msg.sender] >= amount, "You do not have enough balance to transfer");
        balances[msg.sender] -= amount;
        balances[payee] += amount;
    } 

    // balanceOf: 查看某一个地址的通证数量
    function balanceOf(address addr) public view returns(uint256) {
        return balances[addr];
    }

}