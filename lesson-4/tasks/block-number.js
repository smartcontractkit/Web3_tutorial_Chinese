const { task } = require("hardhat/config")

// https://hardhat.org/hardhat-runner/docs/advanced/create-task

task("blocknumber", "check the current block number").setAction(async(taskArgs, hre)=>{
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`current blocknumber is ${blockNumber}`)
})

module.exports={}