module.exports = async({ getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = await deployments

    log("deploying WrappedMyToken contract..")
    await deploy("WrappedMyToken", {
        contract: "WrappedMyToken",
        from: deployer,
        log: true,
        args: [deployer]
    })
    log("contract deployed")
}

module.exports.tags = ["all", "destchain"]