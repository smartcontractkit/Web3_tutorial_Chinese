const { task } = require("hardhat/config")

task("deploy-contract").setAction(async(taskArgs, hre) => {
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
})

async function verify(address, args) {
    await hre.run("verify:verify", {
      address: address,
      constructorArguments: args,
    });
  }

module.exports = {}