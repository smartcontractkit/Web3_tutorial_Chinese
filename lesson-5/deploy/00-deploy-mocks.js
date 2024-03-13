const { network } = require("hardhat")
const { developmentChains, DECIMALS, INITIAL_ANSWER } = require("../helper-hardhat-config")

module.exports = async({getNamedAccounts, deployments}) => {
    const { deployer } = await getNamedAccounts();
    const { deploy, log } = deployments

    if(developmentChains.includes(network.name)) {
        log("development environment detected")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER]
        })
        log("Mocks deployed")
        log("----------------------------------")
    }

}

module.exports.tags = ["all", "mocks"]