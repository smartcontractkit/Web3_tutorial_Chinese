module.exports = async({getNamedAccounts, deployments}) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments

    log("deploying wrapped NFT on destination chain")
    await deploy("WrappedNFT", {
        contract: "WrappedNFT",
        from: firstAccount,
        log: true,
        args: ["WrappedNFT", "WNFT"]
    })
    log("deployed wrapped nft")
}

module.exports.tags = ["all", "destchain"]