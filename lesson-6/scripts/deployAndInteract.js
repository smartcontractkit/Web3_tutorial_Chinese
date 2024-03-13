const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners()
    
    const localSimulatorFactory = await ethers.getContractFactory("CCIPLocalSimulator")
    const localSimulator = await localSimulatorFactory.deploy();

    const config = await localSimulator.DOCUMENTATION();
    const { 
        chainSelector_,
        sourceRouter_,
        destinationRouter_,
        wrappedNative_,
        linkToken_,
        ccipBnM_,
        ccipLnM_
     } = config;

    console.log(`ChainSelector is ${chainSelector_}`)
    console.log(`SourceRouter is ${sourceRouter_}`)
    console.log(`DestinationRouter is ${destinationRouter_}`)
    console.log(`WrappedNative is ${wrappedNative_}`)
    console.log(`LinkToken is ${linkToken_}`)
    console.log(`ccipBnM is ${ccipBnM_}`)
    console.log(`ccipLnM is ${ccipLnM_}`)

    // deploy nft contract
    const nftFactory = await ethers.getContractFactory("MyToken")
    const nft = await nftFactory.deploy(deployer);
    await nft.waitForDeployment()
    console.log(`NFT is deployed at address ${nft.target}`)

    // deploy NFTLockAndReleasePool
    const nftLockAndReleasePoolFactory = await ethers.getContractFactory("NFTPoolLockAndRelease")
    const nftLockAndReleasePool = await nftLockAndReleasePoolFactory.deploy(sourceRouter_, linkToken_, nft.target)
    await nftLockAndReleasePool.waitForDeployment()
    console.log(`LockAndReleasePool was deployed at address ${nftLockAndReleasePool.target}`)

    // deploy the WrappedNFT 
    const wrappedNftFactory = await ethers.getContractFactory("WrappedMyToken")
    const wrappedNft = await wrappedNftFactory.deploy(deployer)
    await wrappedNft.waitForDeployment()
    console.log(`WrappedNFT was deployed at address ${wrappedNft.target}`)

    // deploy NFTBurnAndMintPool
    const nftBurnAndMintPoolFactory = await ethers.getContractFactory("NFTPoolBurnAndMint")
    const nftBurnAndMintPool = await nftBurnAndMintPoolFactory.deploy(destinationRouter_, linkToken_, wrappedNft.target)
    console.log(`BurnAndMintPool was deployed at address ${nftBurnAndMintPool.target}`)

    // mint a nft
    await nft.safeMint(deployer)
    const nftOwnedByDeployer = await nft.balanceOf(deployer)
    console.log(`there was ${nftOwnedByDeployer} nft owned by deployer`)
    const owner = await nft.ownerOf(0)
    console.log(`owner of the tokenId 0 in nft is ${owner}`)

    //request a LINK tokens from LINK faucet
    const linkTokenFactory = await ethers.getContractFactory("LinkToken")
    const linkToken = await linkTokenFactory.attach(linkToken_)
    const balanceBefore = await linkToken.balanceOf(nftLockAndReleasePool.target)
    console.log(`balance before: ${balanceBefore}`)
    await localSimulator.requestLinkFromFaucet(nftLockAndReleasePool.target, ethers.parseEther("100"))
    const balanceAfter = await linkToken.balanceOf(nftLockAndReleasePool.target)
    console.log(`balance before: ${balanceAfter}`)

    // approve the pool have the permision to transfer deployer's token
    await nft.approve(nftLockAndReleasePool.target, 0)
    console.log("approve successfully")
    
    // send nft to from LockAndRelease to BurnAndMint
    await nftLockAndReleasePool.lockAndCrossChainNft(
        0, //tokenId
        deployer,  //newOwner
        chainSelector_, //router
        nftBurnAndMintPool //receiver
    )

    // check if the wrapped NFT minted
    const balanceOfNewOwner = await wrappedNft.balanceOf(deployer)
    console.log(`balance of new owner in the wrappedNFT is ${balanceOfNewOwner}`)
    const newOwner = await wrappedNft.ownerOf(0)
    console.log(`owner of the tokenId 0 in wrapped NFT is ${newOwner}`)
}

main().then().catch((e)=>{
    console.error(e)
    process.exit(1)
})