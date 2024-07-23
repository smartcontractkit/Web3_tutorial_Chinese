const { task } = require("hardhat/config")
const { networkConfig } = require("../helper-hardhat-config")

task("burn-and-cross")
    .addParam("tokenid", "token id to be burned and crossed")
    .addOptionalParam("chainselector", "chain selector of destination chain")
    .addOptionalParam("receiver", "receiver in the destination chain")
    .setAction(async(taskArgs, hre) => {
        const { firstAccount } = await getNamedAccounts()

        // get token id from parameter
        const tokenId = taskArgs.tokenid
        
        const wnft = await ethers.getContract("WrappedNFT", firstAccount)
        const nftPoolBurnAndMint = await ethers.getContract("NFTPoolBurnAndMint", firstAccount)
        
        // approve the pool have the permision to transfer deployer's token
        const approveTx = await wnft.approve(nftPoolBurnAndMint.target, tokenId)
        await approveTx.wait(6)

        // transfer 10 LINK token from deployer to pool
        console.log("transfering 10 LINK token to NFTPoolBurnAndMint contract")
        const linkAddr = networkConfig[network.config.chainId].linkToken
        const linkToken = await ethers.getContractAt("LinkToken", linkAddr)
        const transferTx = await linkToken.transfer(nftPoolBurnAndMint.target, ethers.parseEther("10"))
        await transferTx.wait(6)

        // get chain selector
        let chainSelector
        if(taskArgs.chainselector) {
            chainSelector = taskArgs.chainselector
        } else {
            chainSelector = networkConfig[network.config.chainId].companionChainSelector
        }

        // get receiver
        let receiver
        if(taskArgs.receiver) {
            receiver = taskArgs.receiver
        } else {
            receiver = (await hre.companionNetworks["destChain"].deployments.get("NFTPoolLockAndRelease")).address
        }

        // burn and cross
        const burnAndCrossTx = await nftPoolBurnAndMint.burnAndMint(tokenId, firstAccount, chainSelector, receiver)
        console.log(`NFT burned and crossed with txhash ${burnAndCrossTx.hash}`)
})

module.exports = {}