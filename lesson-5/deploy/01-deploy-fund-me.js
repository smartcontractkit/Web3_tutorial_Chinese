// function deployFunc() {
//     console.log("this is the deplyment task")
// }
// module.exports.default = deployFunc;


// module.exports = async(hre) => {
//     const getNamedAccounts = hre.getNamedAccounts;
//     const deployments = hre.deployments;
//     console.log("this is the deployment task")
// }

// module.exports = async(hre) => {
//     const { getNamedAccounts, deployments } = hre;
//     console.log("this is the deployment task")
// }
const { network } = require("hardhat");
const { networkConfig, developmentChains, LOCK_TIME } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify")

module.exports = async({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer, funder } = await getNamedAccounts();
    const chainId = network.config.chainId;

    let dataFeedAddr
    if(developmentChains.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator");
        dataFeedAddr = ethUsdAggregator.address
    } else {
        dataFeedAddr = networkConfig[chainId].ethUsdPriceFeedAddr;
    }

    // if the contract does not exist, we create a fake contract for it 

    // when we use local network, use mock contract

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [LOCK_TIME, dataFeedAddr], // input the lock time and datafeed address here
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1
    })

    console.log("start---------------------------------------")

    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        console.log("fundme addr: ", fundMe.address)
        // verify the contract
        await verify(fundMe.address, [LOCK_TIME, dataFeedAddr])
    }
    log("------------------------------------------------------------")
}

module.exports.tags = ["all", "fundme"]