const {getNamedAccounts, network} = require("hardhat")
const {developmentChains, networkConfig} = require("../helper-hardhat-config")

module.exports = async({getNamedAccounts, deployments}) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments

    // get parameters for constructor
    let sourceChainRouter
    let linkToken
    let nftAddr
    if(developmentChains.includes(network.name)) {
        const ccipSimulatorTx = await deployments.get("CCIPLocalSimulator")
        const ccipSimulator = await ethers.getContractAt("CCIPLocalSimulator", ccipSimulatorTx.address)
        const ccipSimulatorConfig = await ccipSimulator.configuration()
        sourceChainRouter = ccipSimulatorConfig.sourceRouter_
        linkToken = ccipSimulatorConfig.linkToken_       
        log(`local environment: sourcechain router: ${sourceChainRouter}, link token: ${linkToken}`) 
    } else {
        // get router and linktoken based on network
        sourceChainRouter = networkConfig[network.config.chainId].router
        linkToken = networkConfig[network.config.chainId].linkToken
        log(`non local environment: sourcechain router: ${sourceChainRouter}, link token: ${linkToken}`)
    }
    
    const nftTx = await deployments.get("MyToken")
    nftAddr = nftTx.address
    log(`NFT address: ${nftAddr}`)

    log("deploying the lmn pool")
    await deploy("NFTPoolLockAndRelease", {
        contract: "NFTPoolLockAndRelease",
        from: firstAccount,
        log: true,
        args: [sourceChainRouter, linkToken, nftAddr]
    })
    log("lmn pool deployed")
}

module.exports.tags = ["all", "sourcechain"]