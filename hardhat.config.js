require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
//require("./tasks/block-number.js")
require("hardhat-gas-reporter")

// task("block-number", "prints current blocknumber address").setAction(
//   async (taskArgs , hre) => {
//       const blockNumber = await hre.ethers.provider.getBlockNumber()
//       console.log("current block number  : ", blockNumber)
//   }
// )

const privateKey = process.env.PRIVATE_KEY 
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/5pTZy5nIgZCR7qBCLG6YiyDV1NM2nx4p",
      accounts: [privateKey],
      chainId: 11155111,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  },
  gasReporter : {
    enabled : true,
    outputFile : "gas-report.txt",
    noColors : true
  }
};
//