const { getNamedAccounts, ethers, network } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")
const { assert } = require("chai")

developmentChains.includes(network.name) 
    ? describe.skip 
    : describe("FundMe", async function() {
        let fundMe
        let deployer
        const sendValue = ethers.parseEther("0.1")
        this.beforeEach(async function() {
            deployer = (await getNamedAccounts()).deployer
            fundMe = await ethers.getContract("FundMe", deployer)
        })

        // test fund function
        describe("The contract can be funded", async function() {
            it("Users can fund the contract successfully", async function() {
                await fundMe.fund({value: ethers.parseEther("0.1")})
                assert.equal((await ethers.provider.getBalance(fundMe.target)), ethers.parseEther("0.1"))
            })
        })
    })