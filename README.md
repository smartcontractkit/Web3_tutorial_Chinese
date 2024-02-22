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
- 其他可能会用到的技术文档
    - [Solidity技术手册](https://www.freecodecamp.org/chinese/news/learn-solidity-handbook/#what-are-function-modifiers)
    - [以太坊官方文档](https://ethereum.org/zh)
    - [Solidity官方文档](https://docs.soliditylang.org/zh/v0.8.20/)
    - [Chainlink官方文档](https://docs.chain.link/)
    - [Hardhat官方文档](https://hardhat.org/)
    - [ether.js官方文档](https://docs.ethers.org/v6/)
    - [openzeppelin官方文档](https://docs.openzeppelin.com/contracts/5.x/)

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
<summary> <a href="#第二课solidity基础hello-world">第二课：Solidity基础：Hello World</a></summary>
<ol>
  <li>
  <a href="#remixsolidity编译器和开源协议"> Remix，Solidity编译器和开源协议 </a>
  </li>
  <li>
  <a href="#solidity-基础数据类型"> Solidity基础数据类型 </a>
  </li>
  <li>
  <a href="#solidity-函数"> Solidity函数 </a>
  </li>
  <li>
  <a href="#solidity-存储模式memory-storage-calldata"> Solidity存储模式：memory, storage, calldata </a>
  </li>
  <li>
  <a href="#solidity-基础数据结构数组和结构体"> Solidity数据结构：数组和结构体 </a>
  </li>  
  <li>
  <a href="#合约间交互工厂模式"> 合约间交互：工厂模式</a>
  </li>  
</ol>
</details>

<details>
<summary> <a href="#第三课solidity进阶fundme">第三课：Solidity进阶：FundMe</a></summary>
<ol>
  <li>
  <a href="#通过函数发送eth"> 通过函数发送ETH </a>
  </li>
  <li>
  <a href="#通过预言机设定最小额度"> 通过预言机设定最小额度 </a>
  </li>
  <li>
  <a href="#通过函数提取合约中的eth"> 通过函数提取合约中的ETH </a>
  </li>
  <li>
  <a href="#函数修饰符和时间锁"> 修改器和时间锁 </a>
  </li>
  <li>
  <a href="#token和coin的区别"> Token和Coin的区别 </a>
  </li>  
  <li>
  <a href="#创建一个token合约"> 创建一个Token合约</a>
  </li>  
  <li>
  <a href="#继承erc-20合约"> 继承ERC-20合约</a>
  </li>  
    <li>
  <a href="#部署和验证合约"> 部署和验证合约</a>
  </li>  
</ol>
</details>

<details>
<summary> <a href="#第四课hardhat基础部署交互fundme">第四课：Hardhat基础：部署交互FundMe</a></summary>
<ol>
  <li>
  <a href="#环境搭建hardhat介绍"> 环境搭建：Hardhat介绍 </a>
  </li>
  <li>
  <a href="#环境搭建安装nodejs"> 环境搭建：安装node.js </a>
  </li>
  <li>
  <a href="#环境搭建安装vs-code和git"> 环境搭建：安装VS Code和git </a>
  </li>
  <li>
  <a href="#创建hardhat项目"> 创建Hardhat项目 </a>
  </li>
  <li>
  <a href="#通过hardhat编译和部署合约"> 通过Hardhat编译和部署合约 </a>
  </li>  
  <li>
  <a href="#hardhat网络其他配置"> Hardhat网络&其他配置</a>
  </li>  
  <li>
  <a href="#与fundme合约交互"> 与FundMe合约交互</a>
  </li>  
    <li>
  <a href="#创建hardhat自定义任务"> 创建Hardhat自定义任务</a>
  </li>  
</ol>
</details>

<br><br>
# 教程中用到的代码
- 第一课：无
- 第二课：https://github.com/QingyangKong/Web3_tutorial_lesson2
- 第三课：https://github.com/QingyangKong/Web3_tutorial_lesson3
- 第四课：https://github.com/QingyangKong/Web3_tutorial_lesson4
<br><br>

# 第一课：区块链基础知识 & 操作
第一课视频教程：WIP<br>
第一课代码：本章没有代码
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

<br>:tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada:<br>
恭喜完成第一课的学习！
<br>:tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada:<br>

# 第二课：Solidity基础：Hello World
<b>第二课视频教程：WIP<br></b>
<b>第二课代码：https://github.com/QingyangKong/Web3_tutorial_lesson2 </b>
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
- [Solidity中的工厂模式（英文）](https://medium.com/@solidity101/demystifying-the-factory-pattern-in-solidity-efficient-contract-deployment-with-factory-pattern-e233ea6d1ec0#:~:text=Understanding%20the%20Factory%20Pattern&text=In%20the%20context%20of%20Ethereum,with%20predefined%20functionalities%20and%20structures.)

<br>:tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada:<br>
恭喜完成第二课的学习！
<br>:tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada:<br>

# 第三课：Solidity进阶：FundMe
<b>第三课视频教程：WIP</b><br>
<b>第三课代码：https://github.com/QingyangKong/Web3_tutorial_lesson3 <b>
## 通过函数发送ETH
- [以太坊账户：EOA和合约账户](https://ethereum.org/zh/developers/docs/accounts#types-of-account)
## 通过预言机设定最小额度

- [预言机(oracle)定义](https://chain.link/education/blockchain-oracles)
- [Chainlink技术文档](https://docs.chain.link/)
    - [Chainlink喂价文档](https://docs.chain.link/data-feeds)
    - [Chainlink喂价合约地址列表](https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1)

-Solidity的数据类型没有double或者floating（小数），如果想要表示带有小数的以太币，把wei当成最小单位，它是ether的10e-18，也就是0.000000000000000001。
- [以太币面额转换器](https://eth-converter.com/)
- [以太币面额](https://ethereum.org/zh/developers/docs/intro-to-ether#denominations)
- [Solidity 中如何使用浮点数](https://www.freecodecamp.org/chinese/news/learn-solidity-handbook/#how-to-work-with-floating-point-numbers-in-solidity)
## 通过函数提取合约中的ETH
- [如何发送和接受ETH](https://www.freecodecamp.org/chinese/news/learn-solidity-handbook/#how-to-send-and-receive-ether)
- [三种转账方式: transfer, send, call](https://solidity-by-example.org/sending-ether/)
## 函数修饰符和时间锁
- [函数修饰符是什么](https://www.freecodecamp.org/chinese/news/learn-solidity-handbook/#what-are-function-modifiers)
- [怎样开发智能合约中的时间锁](https://blog.chain.link/timelock-smart-contracts-zh/#post-title)
- [Uinx时间戳](https://www.unixtimestamp.com/)
## Token和Coin的区别
- [Token和Coin的区别](https://www.ledger.com/academy/crypto/what-is-the-difference-between-coins-and-tokens)
## 创建一个Token合约
- [Token介绍](https://docs.openzeppelin.com/contracts/5.x/tokens)
- [Solidity中的继承](https://www.freecodecamp.org/chinese/news/learn-solidity-handbook/#inheritance-in-solidity)
## 继承ERC-20合约
- [ERC-20标准合约](https://docs.openzeppelin.com/contracts/5.x/erc20)
## 部署和验证合约
- 注册[从区块链浏览器（Etherscan）](https://etherscan.io/)账户，并且获取API key
- [怎样通过 Etherscan 验证智能合约](https://blog.chain.link/how-to-verify-a-smart-contract-on-etherscan-zh/)

<br>:tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada:<br>
恭喜完成第三课的学习！
<br>:tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada:<br>

# 第四课：Hardhat基础：部署交互FundMe
<b>第四课视频教程：WIP</b><br>
<b>第四课代码：https://github.com/QingyangKong/Web3_tutorial_lesson4 <b>
## 环境搭建：Hardhat介绍
- [Hardhat官网（英文）](https://hardhat.org/)
- [Hardhat，Truffle和Foundry对比（英文）](https://smartcontract.tips/articoli/truffle-hardhat-foundry-compare/)
- [Hardhat和Foundry在测试方面的对比（英文）](https://ethereum.stackexchange.com/questions/143171/hardhat-vs-foundry-which-to-use-for-testing)
## 环境搭建：安装node.js
- [如何在Windows上安装Linux](https://learn.microsoft.com/zh-cn/windows/wsl/install)
- [在MacOS安装node的5种方式](https://stackoverflow.com/questions/28017374/what-is-the-recommended-way-to-install-node-js-nvm-and-npm-on-macos-x)
- [MacOS Homebrew安装](https://brew.sh/)
- [面向初学者的 Linux Shell——解释 Bash、Zsh 和 Fish](https://www.freecodecamp.org/chinese/news/linux-shells-explained/)
- [zsh的配置文件（英文）](https://www.freecodecamp.org/news/how-do-zsh-configuration-files-work)
- [如何在MacOS上卸载node](https://macpaw.com/how-to/uninstall-node-mac)

## 环境搭建：安装VS Code和git
- [brew cask和formulae的区别（英文）](https://stackoverflow.com/questions/46403937/what-is-the-difference-between-brew-install-x-and-brew-cask-install-x)
- [git官网](https://git-scm.com/)
- [使用git和github的常见命令](https://www.freecodecamp.org/chinese/news/how-to-use-basic-git-and-github-commands/)

## 创建Hardhat项目
- [Hardhat官网：创建Hardhat项目](https://hardhat.org/tutorial/creating-a-new-hardhat-project)
- [怎样开发智能合约中的时间锁](https://blog.chain.link/timelock-smart-contracts-zh/#post-title)
- [Uinx时间戳](https://www.unixtimestamp.com/)
## 通过Hardhat编译和部署合约
- [通过Hardhat编译合约](https://hardhat.org/hardhat-runner/docs/guides/compile-contracts)
- [通过Hardhat部署合约](https://hardhat.org/hardhat-runner/docs/guides/deploying)
- [Hardhat 所使用的 ethers](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-ethers)
- [ethersjs v6官方文档](https://docs.ethers.org/v6/getting-started/)
- [ethersjs v5到v6](https://docs.ethers.org/v6/migrating/)
## Hardhat网络&其他配置
- [Hardhat官网：暂时网络和独立网络（英文）](https://hardhat.org/hardhat-network/docs/overview)
- [dotenv介绍](https://juejin.cn/post/6844904198929121288)
- [NPM：Chainlink/env-enc介绍（英文）](https://www.npmjs.com/package/@chainlink/env-enc)
- [Alchemy注册](https://www.alchemy.com/)

## 与FundMe合约交互
- [Hardhat官网：provider（英文）](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-ethers#provider-object)

## 创建Hardhat自定义任务
- [module.exprts 介绍](https://www.freecodecamp.org/chinese/news/module-exports-how-to-export-in-node-js-and-javascript)
- [Hardhat官网：创建任务（英文）](https://hardhat.org/hardhat-runner/docs/advanced/create-task)

<br>:tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada:<br>
恭喜完成第三课的学习！
<br>:tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada:<br>
