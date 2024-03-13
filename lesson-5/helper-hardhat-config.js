const networkConfig = {
    11155111: {
        name: "sepolia",
        ethUsdPriceFeedAddr: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },
    80001: {
        name: "mumbai",
        ethUsdPriceFeedAddr: "0x0715A7794a1dc8e42615F059dD6e406A6594651A"
    }
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 300000000000
const LOCK_TIME = 1000

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
    LOCK_TIME
}