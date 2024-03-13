const { task } = require("hardhat/config")

task("claim-nft")
    .addParam("tokenid", "The tokenId of the NFT")
    .setAction(async(taskArgs, hre) => {
        const { deployer } = await getNamedAccounts()
        const tokenId = taskArgs.tokenid
        const nft = await ethers.getContract("MyToken", deployer)
        console.log("claiming NFT...")

        const nftPoolLockAndReleaseAddr = (await deployments.get("NFTPoolLockAndRelease")).address
        await nft.safeTransferFrom(nftPoolLockAndReleaseAddr, deployer, tokenId)
        console.log("transfer sucess")
})

module.exports = {}