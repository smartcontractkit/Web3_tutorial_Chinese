# 第四课 ｜ Lesson 4
[中文](#内容介绍) | [English](#introduction)

## 内容介绍
这是 Web3_tutorial 的一部分。<br>
视频链接：WIP<br>

在第四课，你将会学习如何使用 Hardhat 框架来编译，部署并且与合约交互，在这一课你将会安装开发环境，开发环境包括：nodejs，git，VSCode等，你将会学到如何启动 hardhat 网络，并且对 Hardhat config 进行配置以适配任何网络。

## 如何使用
1. 将 repo clone到本地：
`git clone https://github.com/smartcontractkit/Web3_tutorial_Chinese.git`
2. 进入 lesson-4 文件夹
`cd Web3_tutorial_Chinese/lesson-4`
3. 安装 NPM package
-  运行 `npm install` 安装 NPM package
4. 添加环境变量
- `npx hardhat env-enc set-pw` 为 `.env.enc` 设置密码
- 添加环境变量`npx hardhat env-enc set`: `PRIVATE_KEY`, `PRIVATE_KEY_1`, `SEPOLIA_RPC_URL` 和 `ETHERSCAN_API_KEY`
5. 编译并且与 `FundMe.sol` 交互
- `npx hardhat run script/deploy.js --network sepolia` 运行 deploy 脚本。
6. 在 [Sepolia 区块链浏览器](https://sepolia.etherscan.io/)中查看验证的合约

更多的相关内容请查看[Web3_tutorial](https://github.com/QingyangKong/Web3_tutorial)的 `README.md`。


## introduction
This is part of the Web3_tutorial. <br>
Video link: WIP<br>

In lesson 4, you will learn how to compile, deploy, and interact with contracts using the Hardhat framework. In this lesson, you will set up your development environment, including: nodejs, git, VSCode, etc. You will learn how to start the Hardhat network and configure the Hardhat config to adapt to any network.

## Getting Started
1. clone the repo
`git clone https://github.com/smartcontractkit/Web3_tutorial_Chinese.git`
2. change directory to folder lesson-4
`cd Web3_tutorial_Chinese/lesson-4`
3. Install NPM package
- Run `npm install` to install NPM packages.
4. Add environment variables
- Set a password for `.env.enc` with `npx hardhat env-enc set-pw`.
- Add environment variables using `npx hardhat env-enc set`: `PRIVATE_KEY`, `PRIVATE_KEY_1`, `SEPOLIA_RPC_URL`, and `ETHERSCAN_API_KEY`.
5. Compile and interact with `FundMe.sol`
Run the deploy script with `npx hardhat run script/deploy.js --network sepolia`.
View verified contracts on the [SepoliaScan](https://sepolia.etherscan.io/).
6. For more related content, please refer to the README.md of [Web3_tutorial](https://github.com/QingyangKong/Web3_tutorial).