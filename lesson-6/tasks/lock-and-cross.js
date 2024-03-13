const { task } = require("hardhat/config")
const { networkConfig } = require("../helper-hardhat-config")

task("lock-and-cross")
    .addParam("tokenid", "tokenId to be locked and crossed")
    .addOptionalParam("chainselector", "chain selector of destination chain")
    .addOptionalParam("receiver", "receiver in the destination chain")
    .setAction(async(taskArgs, hre) => {
        // get tokenId from parameter
        const tokenId = taskArgs.tokenId

        const { deployer } = await getNamedAccounts()
        console.log(`deployer is ${deployer}`)

        // get receiver contract 
        // deployed contract will be used if there is no receiver provided
        let destReceiver
        if(taskArgs.receiver) {
            destReceiver = taskArgs.receiver
        } else {
            const nftBurnAndMint = await hre.companionNetworks["destChain"].deployments.get("NFTPoolBurnAndMint")
            destReceiver = nftBurnAndMint.address
        }
        console.log(`NFTPoolBurnAndMint address on destination chain is ${destReceiver}`)

        // get the chain selector of destination chain
        // deployed contract will be used if there is no chain selector provided
        let destChainSelector
        if(taskArgs.chainselector) {
            destChainSelector = taskArgs.chainselector
        } else {
            destChainSelector = networkConfig[network.config.chainId].companionChainSelector
            console.log(`ChainSelector of dest chain is ${destChainSelector}`)            
        }
        console.log(`destination chain selector is ${destChainSelector}`)

        const linkTokenAddr = networkConfig[network.config.chainId].linkToken
        const linkToken = await ethers.getContractAt("LinkToken", linkTokenAddr)
        const nftLockAndReleasePool = await deployments.get("NFTPoolLockAndRelease")

        // transfer 10 LINK token from deployer to pool
        const balanceBefore = await linkToken.balanceOf(nftLockAndReleasePool.address)
        console.log(`balance before: ${balanceBefore}`)
        const transferTx = await linkToken.transfer(nftLockAndReleasePool.address, ethers.parseEther("10"))
        await transferTx.wait(6)
        const balanceAfter = await linkToken.balanceOf(nftLockAndReleasePool.address)
        console.log(`balance after: ${balanceAfter}`)

        // approve the pool have the permision to transfer deployer's token
        const nft = await ethers.getContract("MyToken", deployer)
        await nft.approve(nftLockAndReleasePool.address, 0)
        console.log("approve successfully")

        // ccip send
        const nftPoolLockAndRelease = await ethers.getContract("NFTPoolLockAndRelease", deployer)
        const lockAndCrossTx = await nftPoolLockAndRelease.lockAndCrossChainNft(
            tokenId, 
            deployer, 
            destChainSelector, 
            destReceiver
        )
        
        // provide t
        console.log(`NFT locked and crossed, transaction hash is ${lockAndCrossTx.hash}`)
})

module.exports = {}