const { DECIMAL, INITIAL_ANSWER, devlopmentChains} = require("../helper-hardhat-config")

module.exports= async({getNamedAccounts, deployments}) => {

    if(devlopmentChains.includes(network.name)) {
        const {firstAccount} = await getNamedAccounts()
        const {deploy} = deployments
        
        await deploy("MockV3Aggregator", {
            from: firstAccount,
            args: [DECIMAL, INITIAL_ANSWER],
            log: true
        })        
    } else {
        console.log("environment is not local, mock contract depployment is skipped")
    }
}

module.exports.tags = ["all", "mock"]