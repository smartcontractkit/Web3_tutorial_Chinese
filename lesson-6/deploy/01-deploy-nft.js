const { network } = require("hardhat")

module.exports = async({deployments, getNamedAccounts})=> {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = await deployments

    log("deploying NFT contract \"MyToken\"")
    await deploy("MyToken", {
        contract: "MyToken",
        from: deployer,
        log: true,
        args: [deployer]
    })
    log("\"MyToken\" is deployed")
}

module.exports.tags = ["all", "sourcechain"]