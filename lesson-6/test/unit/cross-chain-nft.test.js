const { getNamedAccounts, deployments } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")
const { assert } = require("chai")

!developmentChains.includes(network.name) 
    ? describe.skip : 
    describe("test nft transer", function() {
        let deployer
        let nft
        let nftPoolLockAndRelease
        let wNft
        let nftPoolMintAndBurn
        let ccipSimulator
        let chainSelector

        before(async function() {
            deployer = (await getNamedAccounts()).deployer
            await deployments.fixture(["all"])
            ccipSimulator = await ethers.getContract("CCIPLocalSimulator", deployer)
            chainSelector = (await ccipSimulator.DOCUMENTATION()).chainSelector_

            nft = await ethers.getContract("MyToken", deployer)
            nftPoolLockAndRelease = await ethers.getContract("NFTPoolLockAndRelease", deployer)
            wNft = await ethers.getContract("WrappedMyToken", deployer)
            nftPoolMintAndBurn = await ethers.getContract("NFTPoolBurnAndMint", deployer)
        })

        describe("test if the nft could minted successfully", async function() {
            it("the owner of the nft is deployer", async function() {
                await nft.safeMint(deployer)
                assert.equal((await nft.ownerOf(0)), deployer)    
            })
        })

        describe("test if the nft is locked and crossed sucessfully", async function() {
        
            it("the owner of the nft is lock and release pool", async function() {
                await nft.approve(nftPoolLockAndRelease.target, 0)
                await ccipSimulator.requestLinkFromFaucet(nftPoolLockAndRelease.target, ethers.parseEther("10"))
                await nftPoolLockAndRelease.lockAndCrossChainNft(0, deployer, chainSelector, nftPoolMintAndBurn.target)
                assert.equal((await nft.ownerOf(0)), nftPoolLockAndRelease.target)
            })

            it("the owner of the wnft is deployer", async function() {
                assert.equal((await wNft.ownerOf(0)), deployer)
            })
        })

        describe("test if the nft is burned successfully", async function() {
            it("the total supply of the wnft is 0", async function() {
                await ccipSimulator.requestLinkFromFaucet(nftPoolMintAndBurn, ethers.parseEther("10"))
                await wNft.approve(nftPoolMintAndBurn, 0)
                await nftPoolMintAndBurn.burnAndCrossChainNft(
                    0, 
                    deployer, 
                    chainSelector, 
                    nftPoolLockAndRelease.target
                )
                assert.equal((await wNft.totalSupply()), 0)
            })

            it("the nft is approved to deployer", async function() {
                assert.equal((await nft.getApproved(0)), deployer)
            })
        })

        describe("test if the nft can be transferred to owner successfully", async function() {
            it("the nft can be claimed by the deployer", async function() {
                await nft.safeTransferFrom(nftPoolLockAndRelease.target, deployer, 0)
                assert.equal((await nft.ownerOf(0)), deployer)
            })
        })
    })