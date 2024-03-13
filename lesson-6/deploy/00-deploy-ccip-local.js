const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

module.exports = async({getNamedAccounts, deployments}) => {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments
    if(developmentChains.includes(network.name)) {
        log("development envrionment detected, deploying CCIPSimulator..")
        await deploy("CCIPLocalSimulator", {
            contract: "CCIPLocalSimulator",
            from: deployer,
            log: true,
            args:[]
        })
        log("CCIPLocalSimulator deployed")
    }
}

module.exports.tags = ["all", "test"]