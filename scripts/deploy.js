const {ethers , run , network} = require("hardhat");

async function main(){
  
    const SimpleStorageFactory =  await ethers.getContractFactory(
        "SimpleStorage"
    )

    console.log("deploying")

    const simpleStorage = await SimpleStorageFactory.deploy();

    await simpleStorage.getDeployedCode();

    const address = await simpleStorage.getAddress();

    console.log(address);

    console.log(network.config);

    if( network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY){
        await simpleStorage.deploymentTransaction.wait(6);
        await verify(address , []);
    }


}


async function verify(contractaddress , args){
    console.log("verifying..")

    try{
    await run("verify:verify", {
       address : contractaddress,
       constructorArguments : args
    })

} catch(e){
    if(e.message.toLowerCase().includes("already verified")){
        console.log("already verified")
    } else{
        console.log(e);
    }
    
}
}

main();