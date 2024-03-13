const { network, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")

module.exports = async({getNamedAccounts, deployments}) => {

    const { deployer } = await getNamedAccounts()
    const { deploy, log } = await deployments
    
    let sourceRouter
    let linkToken
    let nftAddr
    if(developmentChains.includes(network.name)) {
        const ccipSimulatorTx = await deployments.get("CCIPLocalSimulator")
        const ccipSimulator = await ethers.getContractAt("CCIPLocalSimulator", ccipSimulatorTx.address)
        console.log("getting the config from ccipSimulator")
        const config = await ccipSimulator.DOCUMENTATION()
        sourceRouter = config.sourceRouter_
        linkToken = config.linkToken_
    } else {
        sourceRouter = networkConfig[network.config.chainId].sourceRouter
        linkToken = networkConfig[network.config.chainId].linkToken
    }
    
    const nft = await deployments.get("MyToken")
    nftAddr = nft.address

    log("deploying NFTPoolLockAndRelease contract..")
    await deploy("NFTPoolLockAndRelease", {
        contract: "NFTPoolLockAndRelease",
        from: deployer,
        log: true,
        args: [sourceRouter, linkToken, nftAddr]
    })

    log("contract deployed")
}

module.exports.tags = ["all", "sourcechain"]