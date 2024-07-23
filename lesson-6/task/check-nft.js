const { task } = require("hardhat/config")

task("check-nft").setAction(async(taskArgs, hre) => {
    const { firstAccount } = await getNamedAccounts()
    const nft = await ethers.getContract("MyToken", firstAccount)

    console.log("checking status of ERC-721")
    const totalSupply = await nft.totalSupply()
    console.log(`there are ${totalSupply} tokens under the collection`)
    for(let tokenId = 0; tokenId < totalSupply; tokenId++) {
        const owner = await nft.ownerOf(tokenId)
        console.log(`TokenId: ${tokenId}, Owner is ${owner}`)
    }
})

module.exports = {}