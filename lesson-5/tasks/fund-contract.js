const { task } = require("hardhat/config")
// const { ethers } = require("hardhat")

task("fund-contract", "fund the fundme contract")
    .addOptionalParam("addr", "address of the fundme contract")
    .setAction(async(taskArgs, hre) => {
    const fundMeFactory = await ethers.getContractFactory("FundMe")
    const fundMe = fundMeFactory.attach(taskArgs.addr)

    console.log("fund the contract...")
    const fundTx = await fundMe.fund({
      value: ethers.parseEther("0.1")
    })
    await fundTx.wait()
    console.log("funded the contract")
  
    const fundMeBalance = await ethers.provider.getBalance(fundMe.target);
    console.log(`balance of the fundme is ${fundMeBalance}`)
  
    const [firstAccount, secondAccount] = await ethers.getSigners();
    console.log(`first account address is ${firstAccount.address}`)
    console.log(`second account address is ${secondAccount.address}`)
  
    console.log("fetching the funds of the first account...")
    const fundsOfFirstAccount = await fundMe.listOfFunders(firstAccount.address);
    console.log(`Current funds of first account is ${fundsOfFirstAccount}`)
  
    console.log("fund the contract on behalf of the second account...")
    const secondFundTx = await fundMe.connect(secondAccount).fund({
      value: ethers.parseEther("0.1")
    })
    await secondFundTx.wait()
  
    console.log("fetching the funds of the second account...")
    const fundsOfSecondAccount = await fundMe.listOfFunders(secondAccount.address);
    console.log(`Current funds of second account is ${fundsOfSecondAccount}`)
})

module.exports ={}