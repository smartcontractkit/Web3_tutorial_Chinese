// const { deployments } = require("hardhat")
const { task } = require("hardhat/config")

task("mint-nft").setAction(async(taskArgs, hre) => {
    const {firstAccount} = await getNamedAccounts()
    const nft = await ethers.getContract("MyToken", firstAccount)

    console.log(`nft address is ${nft.target}`)
  
    console.log("minting NFT...")
    const mintTx = await nft.safeMint(firstAccount)
    await mintTx.wait(6)
    const tokenAmount = await nft.totalSupply()
    const tokenId = tokenAmount - 1n
    console.log(`NFT minted, tokenId is ${tokenId}`)
})


module.exports = {}