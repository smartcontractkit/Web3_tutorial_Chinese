// import the ethers from hardhat
// write a main function
// call the main function

const { ethers } = require("hardhat");

async function main() {
  const fundMeFacotry = await ethers.getContractFactory("FundMe");
  console.log("deploiying the contract...");
  
  const fundMe = await fundMeFacotry.deploy(10);
  await fundMe.waitForDeployment();
  console.log(`contract fundme is deployed successfully at addree ${fundMe.target}`)
  
  if(hre.network.config.chainId == 11155111 && process.env.ETHERSCAN_API_KEY) {
    console.log("wait for 3 confirmations")
    await fundMe.deploymentTransaction().wait(3)
    console.log("verifying contract on etherscan...")
    await verify(fundMe.target, [10])
  } else {
    console.log("skipping verification")
  }

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
}

async function verify(address, args) {
  await hre.run("verify:verify", {
    address: address,
    constructorArguments: args,
  });
}

main().then().catch((error) => {
  console.log(`error is ${error}`)
  process.exit(1)
})