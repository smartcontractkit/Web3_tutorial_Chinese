# 第三课 ｜ Lesson 3
[中文](#内容介绍) | [English](#introduction)

## 内容介绍
这是 Web3_tutorial 的一部分。<br>
视频链接：WIP<br>

在第二课，你将会编写第二个智能合约 `FundMe`，通过编写和学习这个智能合约中，我们将会学习到如何在一条区块链上发送原生token给一个合约，记录转账信息，如何提取收集的token，如何设置时间锁。

在这一课中，你将完成以下合约：
- `FundMe.sol`合约：该合约是募集资金的合约，通过函数来接受funder的ETH
- `FundMe_flattened.sol`合约：该合约是FundMe合约的flatten版本，可以通过 Remix flatten 插件生成，用于EtherScan上的合约验证
- `FundMeToken.sol`合约：该合约是带有基本功能的 Token 合约
- `FundMeTokenWithBurn.sol`合约：该合约继承FundToken合约，并且增加了`burn`函数
- `FundMeTokenERC20.sol`合约：该合约是继承Openzeppelin ERC20标准的 FundToken 合约
- `FundMeTokenERC20_flattened.sol`合约：该合约是FundMeTokenERC20合约的flatten版本，可以通过 Remix flatten 插件生成，用于EtherScan上的合约验证

## 如何使用
1. 编译并且部署 `FundMe.sol` 合约
- 打开 [Remix](https://remix.ethereum.org/)
- 新建一个文件，并且命名为 `FundMe.sol`
- 点击 Compile
- 通过 metamask 领取 SepoliaETH
- 选择 injected provider，点击 Deploy
- 在 remix 中，右键点击合约名称，选择 flatten
- 在 [sepolia 区块链浏览器](https://sepolia.etherscan.io/)中对合约进行验证
2. 编译并且部署 `FundMeToken.sol`合约
- 新建一个文件，并且命名为 `FundMeToken.sol`
- 点击 Compile
- 点击 Deploy
- 在 remix 中，右键点击合约名称，选择 flatten
- 在 [sepolia 区块链浏览器](https://sepolia.etherscan.io/)中对合约进行验证
3. 编译并且部署 `FundMeTokenERC20.sol`合约
- 新建一个文件，并且命名为 `FundMeTokenERC20.sol`
- 点击 Compile
- 在 remix 中，右键点击合约名称，选择 flatten
- 在 [sepolia 区块链浏览器](https://sepolia.etherscan.io/)中对合约进行验证

更多的相关内容请查看[Web3_tutorial](https://github.com/QingyangKong/Web3_tutorial)的 `README.md`。

## introduction
This is part of the Web3_tutorial. <br>
Video link: WIP<br>

In the second lesson, you will write the second smart contract `FundMe`. By writing and learning about this smart contract, we will learn how to send native tokens to a contract on a blockchain, record transfer information, how to withdraw collected tokens, and how to set a time lock.

In this lesson, you will complete the following contracts:

- `FundMe.sol` contract: This contract is for fundraising, it accepts ETH from funders through functions.
- `FundMe_flattened.sol` contract: This contract is a flattened version of the FundMe contract, which can be generated using the Remix flatten plugin for contract verification on EtherScan.
- `FundMeToken.sol` contract: This contract is a Token contract with basic functionality.
- `FundMeTokenWithBurn.sol` contract: This contract inherits the FundToken contract and adds a `burn` function.
- `FundMeTokenERC20.sol` contract: This contract is a FundToken contract that inherits the OpenZeppelin ERC20 standard.
- `FundMeTokenERC20_flattened.sol` contract: This contract is a flattened version of the FundMeTokenERC20 contract, which can be generated using the Remix flatten plugin for contract verification on EtherScan.

## Getting Started
1. Compile and deploy the `FundMe.sol` contract
- Open [Remix](https://remix.ethereum.org/)
- Create a new file named `FundMe.sol`
- Click Compile
- Get SepoliaETH through Metamask
- Select the injected provider and click Deploy
- In Remix, right-click on the contract name and select flatten
- Verify the contract on [SepoliaScan](https://sepolia.etherscan.io/)
2. Compile and deploy the `FundMeToken.sol` contract
- Create a new file named `FundMeToken.sol`
- Click Compile
- Click Deploy
- In Remix, right-click on the contract name and select flatten
- Verify the contract on [SepoliaScan](https://sepolia.etherscan.io/)
3. Compile and deploy the `FundMeTokenERC20.sol` contract
- Create a new file named `FundMeTokenERC20.sol`
- Click Compile
- In Remix, right-click on the contract name and select flatten
- Verify the contract on [SepoliaScan](https://sepolia.etherscan.io/)


For more related content, please refer to the `README.md` of [Web3_tutorial](https://github.com/QingyangKong/Web3_tutorial).