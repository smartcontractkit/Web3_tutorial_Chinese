const { deployments, getNamedAccounts, ethers } = require("hardhat")
const { assert, expect } = require("chai")
const helpers = require("@nomicfoundation/hardhat-network-helpers")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name) 
    ? describe.skip 
    : describe("FundMe", function() {
        let fundMe
        let fundMe_1
        let deployer
        let funder
        let mockDataFeed
        beforeEach(async function() {
            // deploy the fundme contract using the hardhat-deploy
            deployer = (await getNamedAccounts()).deployer
            funder = (await getNamedAccounts()).funder
            
            await deployments.fixture(["all"])
            fundMe = await ethers.getContract("FundMe", deployer)
            fundMe_1 = await ethers.getContract("FundMe", funder)

            mockDataFeed = await ethers.getContract("MockV3Aggregator", deployer)
        })

        describe("test deployment", async function() {
            it("contract is deployed by deployer", async function(){
                const owner = await fundMe.owner()
                assert.equal(owner, deployer)
            })
        })

        describe("test constructor", async function() {
            it("sets the aggregator address correctly", async function() {
                const mockDataFeedAddr = await fundMe.dataFeed()
                assert.equal(mockDataFeedAddr, mockDataFeed.target)
            })
        })

        // test fund
        describe("The contract can be funded", async function() {
            it("Users can fund the contract successfully", async function() {
                await fundMe.fund({value: ethers.parseEther("0.1")})
                assert.equal((await ethers.provider.getBalance(fundMe.target)), ethers.parseEther("0.1"))
            })
        })

        describe("Funder have the correct balance after fund", async function() {
            it("Funder will have the correct balance", async function(){
                await fundMe.fund({value: ethers.parseEther("0.1")})
                await fundMe_1.fund({value: ethers.parseEther("0.2")})
                assert.equal((await fundMe.listOfFunders(deployer)), ethers.parseEther("0.1"))
                assert.equal((await fundMe.listOfFunders(funder)), ethers.parseEther("0.2"))
            })
        })

        describe("Contract cannot be funded if window is closed", async function() {
            it("Fund should be reverted if window is closed", async function(){
                await helpers.time.increase(1100)
                await helpers.mine()
                await fundMe.fund({value: ethers.parseEther("0.1")})
                assert.equal((await fundMe.listOfFunders(deployer)), ethers.parseEther("0.1"))            
            })
        })

        describe("Contract cannot be funded if pay is not enough", async function() {
            it("Fund shoudl be reverted if the pay is not enough", async function() {
                await expect(fundMe.fund({value: ethers.parseEther("0.001")})).to.be.revertedWith("Please send more ETH");
            })
        })

        // test getfund
        describe("Target reached, locked, the fund cannot be withdrawn", async function() {
            it("Fund call should be reverted", async function() {
                await fundMe.fund({value: ethers.parseEther("0.3")})
                await helpers.time.increase(900)
                await helpers.mine()
                await expect(fundMe.getFund()).to.be.revertedWith("The campaign is still locked")
            })
        })

        describe("Target reached, unlocked, the fund can be withdrawn", async function() {
            it("Fund call should be reverted", async function() {
                await fundMe.fund({value: ethers.parseEther("0.3")})
                await helpers.time.increase(1100)
                await helpers.mine()
                await expect(fundMe.getFund()).to.emit(fundMe, "FundWithdrawnByOwner").withArgs(ethers.parseEther("0.3"))
            })
        })

        describe("Target not reached, unlocked, the fund can be withdrawn", async function() {
            it("Fund call should be reverted", async function() {
                await fundMe.fund({value: ethers.parseEther("0.05")})
                await helpers.time.increase(1100)
                await helpers.mine()
                await expect(fundMe.getFund()).to.be.revertedWith("target is not reached")
            })
        })

        describe("Target not reached, locked, the fund cannot be withdrawn", async function() {
            it("Fund call should be reverted", async function() {
                await fundMe.fund({value: ethers.parseEther("0.05")})
                await helpers.time.increase(900)
                await helpers.mine()
                await expect(fundMe.getFund()).to.be.revertedWith("The campaign is still locked")
            })
        })

        // test refund
        describe("Target reached, unlocked, fund cannot refunded", async function() {
            it("Refund call should be reverted", async function() {
                await fundMe.fund({value: ethers.parseEther("0.3")})
                await helpers.time.increase(1100)
                await helpers.mine()
                await expect(fundMe.getRefund()).to.be.revertedWith("target is reached")
            })
        })

        describe("Target reached, locked, fund cannot refunded", async function() {
            it("Refund call should be reverted", async function(){
                await fundMe.fund({value: ethers.parseEther("0.3")})
                await helpers.time.increase(900)
                await helpers.mine()
                await expect(fundMe.getRefund()).to.be.revertedWith("The campaign is still locked")
            })
        })

        describe("Target not reached, unlocked, the fund cannot be be withdraw", async function() {
            it("Refund call should be successful", async function() {
                await fundMe.fund({value: ethers.parseEther("0.05")})
                await helpers.time.increase(1100)
                await helpers.mine()
                const valueRefund = await fundMe.listOfFunders(deployer)
                await expect(fundMe.getRefund()).to.emit(fundMe, "RefundByFunder").withArgs(deployer, valueRefund)
            })
        })

        describe("Target not reached, locked, the fund can be refunded", async function() {
            it("Refund call should be reverted", async function() {
                await fundMe.fund({value: ethers.parseEther("0.05")})
                await helpers.time.increase(900)
                await helpers.mine()
                await expect(fundMe.getRefund()).to.be.revertedWith("The campaign is still locked")
            })
        })


    })