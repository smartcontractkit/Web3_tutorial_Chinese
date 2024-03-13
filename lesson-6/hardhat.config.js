require("@nomicfoundation/hardhat-toolbox");
require("@chainlink/env-enc").config();
require("./tasks")
require('hardhat-deploy');
require("hardhat-deploy-ethers");
require('@nomicfoundation/hardhat-chai-matchers');
require('@nomicfoundation/hardhat-ethers');
require('@typechain/hardhat');
require('hardhat-gas-reporter');
require('solidity-coverage');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY_1 = process.env.PRIVATE_KEY_1;
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const AVALANCHE_RPC_URL = process.env.AVALANCHE_RPC_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.24" },
      { version: "0.7.0" },
      { 
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1,
          },
        },
      },
    ]
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  },
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY, PRIVATE_KEY_1],
      chainId: 11155111,
      blockConfirmations: 6,
      companionNetworks: {
        destChain: "fuji",
      },
    },
    fuji: {
      url: AVALANCHE_RPC_URL,
      accounts: [PRIVATE_KEY, PRIVATE_KEY_1],
      chainId: 43113,
      blockConfirmations: 6,
      companionNetworks: {
        destChain: "sepolia"
      }
    },
    hardhat: {
      allowUnlimitedContractSize: true,
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
    funder: {
      default: 1
    }
  },
};
