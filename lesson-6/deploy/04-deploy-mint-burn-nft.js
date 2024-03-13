const { developmentChains } = require("../helper-hardhat-config")
const { network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")

module.exports = async({getNamedAccounts, deployments}) => {
    const { deployer } = await getNamedAccounts()
    const { log, deploy } = await deployments

    let sourceRouter
    let linkToken
    let wNftAddr

    if(developmentChains.includes(network.name)) {
        const ccipSimulatorTx = await deployments.get("CCIPLocalSimulator")
        const ccipSimulator = await ethers.getContractAt("CCIPLocalSimulator", ccipSimulatorTx.address)
        console.log("getting the config from ccipSimulator")
        const config = await ccipSimulator.DOCUMENTATION()
        sourceRouter = config.destinationRouter_
        linkToken = config.linkToken_
    } else {
        sourceRouter = networkConfig[network.config.chainId].sourceRouter
        linkToken = networkConfig[network.config.chainId].linkToken
    }
    wNft = await deployments.get("WrappedMyToken")
    wNftAddr = wNft.address
    
    log("deploying NFTPoolBurnAndMint contract..")
    await deploy("NFTPoolBurnAndMint", {
        contract: "NFTPoolBurnAndMint",
        from: deployer,
        log: true,
        args: [sourceRouter, linkToken, wNftAddr]
    })
    log("contract deployed")

}

module.exports.tags = ["all", "destchain"]