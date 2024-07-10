const { task } = require("hardhat")


task("block-number", "prints current blocknumber address").setAction(
    async (taskArgs , hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log("current block number  : ", blockNumber)
    }
)