async function verify(address, args) {
    await hre.run("verify:verify", {
      address: address,
      constructorArguments: args,
    });
  }
  

module.exports = {verify} 