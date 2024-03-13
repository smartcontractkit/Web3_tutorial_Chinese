# 第六课 Lesson 6
[中文](#内容介绍) | [English](#introduction)
## 内容介绍
这是第六课的代码部分，在这部分代码中，我们构建一个 ERC721 的合约，让这个合约可以被从 Sepolia 区块链被跨链跨到 Fuji 区块链。<br>

完成整个过程需要先在 Sepolia 区块链部署合约：
- ERC-721合约 MyToken：这个合约是我们需要用到的 NFT
- NFTPoolLockAndRelease：用来锁定用户合约，并且执行跨链操作，在Fuji 区块链上铸造一个新的 NFT

在 Fuji 区块链上部署合约
- 基于 ERC-721 合约的包装合约 WrappedMyToken：这个合约会用来铸造和燃烧 NFT，因为 NFT 的主合约在 Sepolia 上，所在 Fuji 的 NFT 合约需要先进行铸造。
- NFTPoolMintAndBurn：通过 `ccipReceive` 来接受跨链消息，然后基于消息内容铸造 NFT，同时在 Fuji 中的 NFT 跨链回到 Sepolia 的时候，将 NFT 进行燃烧。

## 如何使用
1. 将 repo clone到本地：
`git clone https://github.com/smartcontractkit/Web3_tutorial_Chinese.git`

2. 进入 lesson-6 文件夹
`cd Web3_tutorial_Chinese/lesson-6`

3. 安装 npm package：`npm install`

4. 测试合约：`npx hardhat test`，此过程使用到了 chainlink-local，会在链下模拟 ccip 行为

5. 通过 env-enc 添加配置信息：
```
npx env-enc set-pw
npx env-enc set
```
依次加入环境变量：
```
PRIVATE_KEY
PRIVATE_KEY_1
SEPOLIA_RPC_URL
ETHERSCAN_API_KEY
AVALANCHE_RPC_URL
```

6. 在 source chain 部署合约：`npx hardhat deploy --tags sourcechain --network sepolia`，如果你在上一步使用的不是 sepolia 和 fuji，那么请相应调整 network 名字

7. 在 dest chain 部署合约：`npx hardhat deploy --tags destchain --network fuji` 如果你在上一步使用的不是 sepolia 和 fuji，那么请相应调整 network 名字

8. 铸造 nft：`npx hardhat mint-nft --network sepolia`

9. 查看 nft 状态：`npx hardhat check-nft --network sepolia`

10. 锁定并且跨链 nft：`npx hardhat lock-and-cross --tokenid 0 --network sepolia`

11. 查看 wrapped NFT 状态：`npx hardhat check-wrapped-nft --network fuji`

12. 燃烧并且跨链 wnft：`npx hardhat burn-and-mint --tokenid 0 --network fuji`

13. 在 sepolia 上claim NFT：`npx hardhat claim-nft --token 0 --network sepolia`

14. 再次查看 nft 状态：`npx hardhat check-nft --network sepolia`

更多的相关内容请查看[Web3_tutorial](https://github.com/smartcontractkit/Web3_tutorial_Chinese)的 `README.md`。


## Introduction
This is the code section of lesson 6. In this part of the code, we build an ERC721 contract that allows the NFT to be cross-chained from the Sepolia blockchain to the Fuji blockchain.<br>

To complete the entire process, it is necessary to deploy contracts on the Sepolia blockchain first:

- ERC-721 contract MyToken: This contract is the NFT we need.
- NFTPoolLockAndRelease: Used to lock user contracts and perform cross-chain operations, minting a new NFT on the Fuji blockchain.

Deploy contracts on the Fuji blockchain:

- WrappedMyToken, a wrapper contract based on the ERC-721 contract: This contract is used to mint and burn NFTs. Because the main NFT contract is on Sepolia, the NFT contract on Fuji needs to be minted first.
- NFTPoolMintAndBurn: Used to receive cross-chain messages through ccipReceive, mint NFTs based on message content, and burn NFTs when they are cross-chained back to Sepolia from Fuji.
## Getting started
1. Clone the repo to your local machine:
`git clone https://github.com/QingyangKong/Web3_tutorial_lesson6.git`

2. change directory to folder lesson-6
`cd Web3_tutorial_Chinese/lesson-6`

3. Install npm packages: `npm install`

4. Test contracts: `npx hardhat test`. This process uses chainlink-local to simulate ccip behavior on the chain.

5. Add configuration information through env-enc:
```
npx env-enc set-pw
npx env-enc set
```
Add environment variables in sequence:
```
PRIVATE_KEY
PRIVATE_KEY_1
SEPOLIA_RPC_URL
ETHERSCAN_API_KEY
AVALANCHE_RPC_URL
```

6. Deploy contracts on the source chain: `npx hardhat deploy --tags sourcechain --network sepolia`. If you did not use sepolia and fuji in the previous step, adjust the network name accordingly.

7. Deploy contracts on the dest chain: `npx hardhat deploy --tags destchain --network fuji`. If you did not use sepolia and fuji in the previous step, adjust the network name accordingly.

8. Mint nft: `npx hardhat mint-nft --network sepolia`

9. Check nft status: `npx hardhat check-nft --network sepolia`

10. Lock and cross nft: `npx hardhat lock-and-cross --tokenid 0 --network sepolia`

11. Check wrapped NFT status: `npx hardhat check-wrapped-nft --network fuji`

12. Burn and cross wnft: `npx hardhat burn-and-mint --tokenid 0 --network fuji`

13. Claim NFT on sepolia: `npx hardhat claim-nft --token 0 --network sepolia`

14. Check nft status again：`npx hardhat check-nft --network sepolia`

For more related content, please refer to the README.md of [Web3_tutorial](https://github.com/smartcontractkit/Web3_tutorial_Chinese).