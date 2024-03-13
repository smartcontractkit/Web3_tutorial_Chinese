const networkConfig = {
    11155111: {
        name: "sepolia",
        ethUsdPriceFeedAddr: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
        sourceRouter: "0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59",
        chainSelector: "16015286601757825753",
        linkToken: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
        companionChainSelector: "14767482510784806043"
    },
    80001: {
        name: "mumbai",
        ethUsdPriceFeedAddr: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
        sourceRouter: "0x1035CabC275068e0F4b745A29CEDf38E13aF41b1",
        chainSelector: "12532609583862916517",
        linkToken: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
    },
    43113: {
        name: "fuji",
        ethUsdPriceFeedAddr: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
        sourceRouter: "0xF694E193200268f9a4868e4Aa017A0118C9a8177",
        chainSelector: "14767482510784806043",
        linkToken: "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846",
        companionChainSelector: "16015286601757825753"
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