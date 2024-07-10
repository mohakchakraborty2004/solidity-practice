const {ethers} =  require("hardhat");
const { assert } = require("chai")

describe("SimpleStorage", () =>{

  let simpleStorageFactory , simpleStorage

  beforeEach(async function(){
   simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
   simpleStorage = await simpleStorageFactory.deploy();
  })

  it("should start with fav no. as 0", async ()=> {
    const currentValue =  await simpleStorage.retrive();
    const expectedvalue =  0;

    assert.equal(currentValue.toString() , expectedvalue);
    
  })  

  it("should update when called update", async()=>{
  //logic
  })

})