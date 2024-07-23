# 第五课 ｜ Lesson 5
[中文](#内容介绍) | [English](#introduction)

## 内容介绍
这是 Web3_tutorial 的一部分。<br>
视频链接：WIP<br>

在第五课，在 Solidity 编程中，安全是非常重要的。你将会学习如何使用 Hardhat 框架对智能合约进行单元测试和集成测试，让你编写的合约更加安全。

## 如何使用
1. 将 repo clone到本地：
`git clone https://github.com/smartcontractkit/Web3_tutorial_Chinese.git`
2. 进入 lesson-5 文件夹
`cd Web3_tutorial_Chinese/lesson-5`
3. 安装 NPM package
-  运行 `npm install` 安装 NPM package
4. 添加环境变量
- `npx hardhat env-enc set-pw` 为 `.env.enc` 设置密码
- 添加环境变量`npx hardhat env-enc set`: `PRIVATE_KEY`, `PRIVATE_KEY_1`, `SEPOLIA_URL` 和 `ETHERSCAN_API_KEY`
5. 对 `FundMe.sol` 进行单元测试
- `npx hardhat test` 运行单元测试脚本。
6. 对 `FundMe.sol` 进行集成测试
- `npx hardhat test --network sepolia` 运行集成测试脚本。

更多的相关内容请查看[Web3_tutorial](https://github.com/smartcontractkit/Web3_tutorial_Chinese)的 `README.md`。


## introduction
This is part of the Web3_tutorial. <br>
Video link: WIP<br>

In lesson 5, safety is cannot be ignored in Solidity programming. You will learn how to use the Hardhat framework to conduct unit tests and integration tests on smart contracts, ensuring the contracts you write are secure.

## Getting Started
1. clone the repo
`git clone https://github.com/smartcontractkit/Web3_tutorial_Chinese.git`
2. change directory to folder lesson-5
`cd Web3_tutorial_Chinese/lesson-5`
3. Install NPM package
- Run `npm install` to install NPM packages.
4. Add environment variables
- Set a password for `.env.enc` with `npx hardhat env-enc set-pw`.
- Add environment variables using `npx hardhat env-enc set`: `PRIVATE_KEY`, `PRIVATE_KEY_1`, `SEPOLIA_RPC_URL`, and `ETHERSCAN_API_KEY`.
5. Unit test `FundMe.sol`
- Run unit tests with `npx hardhat test`.
6. Satging test `FundMe.sol`
- Run staging tests with `npx hardhat test --network sepolia`.

For more related content, please refer to the README.md of [Web3_tutorial](https://github.com/smartcontractkit/Web3_tutorial_Chinese).