# Web3 教程 - Solidity，Hardhat，Token standard，Interoperability

这个 repository 是初学者课程《Web3 和区块链技术》的代码部分，并且包括课程中提到过的资料。

## 测试网水龙头(Testnet Faucets)
Chainlink 测试网水龙头：https://faucets.chain.link <br>
Alchemy 测试网水龙头：https://sepoliafaucet.com/ <br>
Infura 测试网水龙头：https://www.infura.io/faucet/sepolia

## 在哪里讨论，问题？
- [GitHub Discussion](https://github.com/QingyangKong/Web3_tutorial/discussions) 页面<br>
提课程相关的问题
- [登链社区](https://learnblockchain.cn/)<br>
提任何区块链相关的技术问题
- [StackOverflow Ethereum](https://ethereum.stackexchange.com/)<br>
提出任何以太坊相关的技术问题（需要英文）
- [StackOverflow](https://stackoverflow.com/) <br>
提出任何技术问题（需要英文）

# 目录
<details>
<summary> <a href="#第一课区块链基础知识--操作">第一课：区块链基础知识 & 操作</a></summary>
<ol>
  <li>
  <a href="#第一课区块链基础知识--操作"> 区块链简史 </a>
  </li>
  <li>
  <a href="#区块链简史块链简史"> 区块链的设计哲学：去中心化和共识 </a>
  </li>
  <li>
  <a href="#区块链设计哲学去中心化和共识"> Web3：面向资产的互联网 </a>
  </li>
  <li>
  <a href="#智能合约简介"> 智能合约简介 </a>
  </li>
  <li>
  <a href="#自托管钱包metamask"> 自托管钱包Metamask </a>
  </li>  
  <li>
  <a href="#密码学基础--metamask配置"> 密码学基础 & Metamask配置</a>
  </li>  
  <li>
  <a href="#领取测试币"> 领取测试币 </a>
  </li>  
  <li>
  <a href="#签名发送交易"> 签名&发送交易 </a>
  </li>  
  <li>
  <a href="#燃料费gas费介绍"> 燃料费（gas费）介绍 </a>
  </li>  
</ol>
</details>
<details>
<summary> <a href="#lesson-0-the-edge-of-the-rabbit-hole">第二课：Solidity基础：Hello World</a></summary>
<ol>
  <li>
  <a href="#第一课区块链基础知识--操作"> Remix，Solidity编译器和开源协议 </a>
  </li>
  <li>
  <a href="#区块链简史块链简史"> Solidity 基础数据类型 </a>
  </li>
  <li>
  <a href="#区块链设计哲学去中心化和共识"> Solidity 函数 </a>
  </li>
  <li>
  <a href="#智能合约简介"> Solidity 存储模式：memory, storage, calldata </a>
  </li>
  <li>
  <a href="#自托管钱包metamask"> Solidity 数据结构：数组和结构体 </a>
  </li>  
  <li>
  <a href="#密码学基础--metamask配置"> 合约间交互：工厂模式</a>
  </li>  
</ol>
</details>

# 第一课：区块链基础知识 & 操作
## 区块链简史
- [《比特币白皮书，一种点对点的电子现金系统》](https://bitcoin.org/files/bitcoin-paper/bitcoin_zh_cn.pdf)
    - [比特币发明人 - 中本聪(Nakamoto Satoshi)](https://zh.wikipedia.org/zh-cn/%E4%B8%AD%E6%9C%AC%E8%81%AA)
    - [图灵完备是什么意思？](https://www.zhihu.com/question/20115374)
- [《以太坊白皮书》](https://github.com/ethereum/wiki/wiki/%5B%E4%B8%AD%E6%96%87%5D-%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%99%BD%E7%9A%AE%E4%B9%A6)
    - [以太坊发明人 - 维塔利克·布特林(Vitalik Buterin)](https://zh.wikipedia.org/zh-cn/%E7%B6%AD%E5%A1%94%E5%88%A9%E5%85%8B%C2%B7%E5%B8%83%E7%89%B9%E6%9E%97)
- [智能合约概念提出人 - 尼克·萨博（Nick Szabo）](https://zh.wikipedia.org/zh-cn/%E5%B0%BC%E5%85%8B%C2%B7%E8%96%A9%E5%8D%9A)
- [Nick Szabo 对于智能合约定义](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart.contracts.html)
## 区块链设计哲学：去中心化和共识
- [什么是区块链中的去中心化？](https://aws.amazon.com/cn/blockchain/decentralization-in-blockchain/)
- [共识机制](https://ethereum.org/zh/developers/docs/consensus-mechanisms)
    - [PoW工作量证明](https://ethereum.org/zh/developers/docs/consensus-mechanisms/pow)
    - [PoS权益证明](https://ethereum.org/zh/developers/docs/consensus-mechanisms/pos)
    - [女巫攻击](https://www.51cto.com/article/742890.html)
## Web3：面向资产的互联网
- [Web3介绍(详细)](https://learn.metamask.io/zh-CN/lessons/what-is-web3)
- [Web3介绍(简略)](https://ethereum.org/zh/web3#introduction)
- [什么是数据所有权](https://learn.metamask.io/zh-CN/lessons/the-advent-of-digital-ownership)
- [什么是dApp？](https://ethereum.org/zh/dapps#what-are-dapps)
## 智能合约简介
- [什么是Defi](https://ethereum.org/zh/defi)
- [什么是NFT](https://ethereum.org/zh/nft#what-are-nfts)
- [智能合约介绍](https://ethereum.org/zh/smart-contracts#introduction-to-smart-contracts)
## 自托管钱包Metamask
- [Metamask钱包简介](https://metamask.io/)
- [什么是加密钱包](https://learn.metamask.io/zh-CN/lessons/what-is-a-crypto-wallet)
- [什么是自主托管](https://learn.metamask.io/zh-CN/lessons/what-is-a-self-custody-wallet)
## 密码学基础 & Metamask配置
- [BIP-32密钥生成算法](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)
- [BIP-39助记词列表](https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md)
- [如何将助记词转换为私钥](https://mdrza.medium.com/how-to-convert-mnemonic-12-word-to-private-key-address-wallet-bitcoin-and-ethereum-81aa9ca91a57) 
- [分层确定性钱包(HD钱包)介绍](https://help.tokenpocket.pro/cn/faq/multichain-wallet/hd)
- [Metamask 安装](https://metamask.io/download/)
    - [Chainlist 查看测试网配置](https://chainlist.org/)
- [SepoliaScan 区块链浏览器](https://sepolia.etherscan.io/)
## 领取测试币
- [Chainlink水龙头](https://faucets.chain.link/) 
- [Infura水龙头](https://www.infura.io/faucet/sepolia) 
- [Alchemy水龙头](https://sepoliafaucet.com/) 
## 签名&发送交易
- [椭圆曲线签名算法](https://blog.csdn.net/weixin_43586667/article/details/122766815)
- [签名模拟](https://andersbrownworth.com/)
## 燃料费（gas费）介绍
- [gas费介绍](https://ethereum.org/zh/developers/docs/gas)
- [EIP-1559](https://ethereum.org/zh/developers/docs/gas#what-was-the-london-upgrade-eip-1559)
# 第二课：Solidity基础：Hello World
## Remix，Solidity编译器和开源协议
- [开源软件许可协议简介](https://developer.aliyun.com/article/25089)
- [EVM（以太坊虚拟机） 介绍](https://ethereum.org/zh/developers/docs/evm)
    - [EVM 版本](https://docs.soliditylang.org/en/v0.8.21/using-the-compiler.html) 
- [Solidity 编译器介绍](https://docs.soliditylang.org/zh/v0.8.16/using-the-compiler.html) 
- [Solidity 官方文档](https://docs.soliditylang.org/zh/v0.8.16/index.html) 
## Solidity 基础数据类型
- [Solidity 类型官方文档](https://docs.soliditylang.org/zh/v0.8.16/types.html#) 
- [Bytes vs bytes32](https://ethereum.stackexchange.com/questions/11770/what-is-the-difference-between-bytes-and-bytes32)
## Solidity 函数
- [智能合约结构](https://docs.soliditylang.org/zh/v0.8.17/layout-of-source-files.html)
- [如何拼接两个string变量（英文）](https://medium.com/@jamaltheatlantean/how-to-concatenate-two-strings-using-solidity-fada6051b1a6) 
## Solidity 存储模式：memory, storage, calldata
这一节知识是底层原理，不需要完全理解也可以继续学习，这部分英文文档会更加清晰。
- [EVM底层数据存储原理（英文）](https://www.netspi.com/blog/technical/blockchain-penetration-testing/ethereum-virtual-machine-internals-part-2/)
    - [storage存储方式](https://docs.soliditylang.org/en/v0.8.24/internals/layout_in_storage.html)
    - [memory存储方式](https://docs.soliditylang.org/en/v0.8.24/internals/layout_in_memory.html)
    - [calldata存储方式](https://docs.soliditylang.org/en/v0.8.24/internals/layout_in_calldata.html)
## Solidity 基础数据结构：数组和结构体
Solidity 官方文档中，关于数据和结构体，英文文档比中文文档在定义上表述更清晰。
- [数据结构 - 数组（英文）](https://docs.soliditylang.org/en/v0.8.24/types.html#arrays)
    - [数据结构 - 数组（中文对照）](https://docs.soliditylang.org/zh/v0.8.17/types.html#arrays)
- [数据结构 - 结构体（英文）](https://docs.soliditylang.org/en/v0.8.24/types.html#structs)
    - [数据结构 - 结构体（中文对照）](https://docs.soliditylang.org/zh/v0.8.17/types.html#structs)
## 合约间交互：工厂模式
- [如何使用工厂模式（英文）](https://betterprogramming.pub/learn-solidity-the-factory-pattern-75d11c3e7d29)
- [Solidity中的工厂模式（英文）](https://medium.com/@solidity101/demystifying-the-factory-pattern-in-solidity-efficient-contract-deployment-with-factory-pattern-e233ea6d1ec0#:~:text=Understanding%20the%20Factory%20Pattern&text=In%20the%20context%20of%20Ethereum,with%20predefined%20functionalities%20and%20structures. )