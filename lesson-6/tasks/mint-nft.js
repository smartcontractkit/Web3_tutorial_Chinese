// const { deployments } = require("hardhat")
const { task } = require("hardhat/config")

task("mint-nft").setAction(async(taskArgs, hre) => {
    const {deployer} = await getNamedAccounts()
    const nft = await ethers.getContract("MyToken", deployer)
    // const wnft = await ethers.getContract("WrappedMyToken", deployer)
    // const wnft = await deployments.get("WrappedMyToken", {network})

    console.log(`nft address is ${nft.target}`)


    // const nft = await ethers.getContractAt("Mytoken", myToken.address);
    // const wnft = await deployments.get("WrappedMyToken")
    // console.log(`wnft address is ${wnft.address}`)
  
    console.log("minting NFT...")
    const mintTx = await nft.safeMint(deployer)
    await mintTx.wait(6)
    const tokenAmount = await nft.totalSupply()
    const tokenId = tokenAmount - 1n
    console.log(`NFT minted, tokenId is ${tokenId}`)
})


module.exports = {}