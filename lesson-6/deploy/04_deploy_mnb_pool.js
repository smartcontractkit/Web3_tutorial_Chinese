const { network } = require("hardhat")

module.exports = async({getNamedAccounts, deployments}) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments
    const {developmentChains, networkConfig} = require("../helper-hardhat-config")
    
    let router
    let linkTokenAddr
    let wnftAddr
    if(developmentChains.includes(network.name)) {
        const ccipSimulatorTx = await deployments.get("CCIPLocalSimulator")
        const ccipSimulator = await ethers.getContractAt("CCIPLocalSimulator", ccipSimulatorTx.address)
        const ccipConfig = await ccipSimulator.configuration()
        router = ccipConfig.destinationRouter_
        linkTokenAddr = ccipConfig.linkToken_        
    } else {
        router = networkConfig[network.config.chainId].router
        linkTokenAddr = networkConfig[network.config.chainId].linkToken
    }

    const wnftTx = await deployments.get("WrappedNFT")
    wnftAddr = wnftTx.address

    log(`get the parameters: ${router}, ${linkTokenAddr}, ${wnftAddr}`)
    log("deploying nftPoolBurnAndMint")
    await deploy("NFTPoolBurnAndMint", {
        contract: "NFTPoolBurnAndMint",
        from: firstAccount,
        log: true,
        args: [router, linkTokenAddr, wnftAddr]
    })
    log("nftPoolBurnAndMint deployed")
}

module.exports.tags = ["all", "destchain"]