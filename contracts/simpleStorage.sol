// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract SimpleStorage {
       uint256 public favoriteNumber;
  //default is 0 

//  People public person = People({favoriteNumber : 2, Name : "mohak"});

  People[] public _person;

  mapping(string => uint256) public nameToNumber;
  mapping(uint256 => string) public numberToName;

  
  struct People {
    uint256 favoriteNumber;
    string Name;
  }

  function store(uint256 _favoriteNumber) public {
    favoriteNumber = _favoriteNumber;
    
  }

  function retrive() public view returns(uint256){
    return favoriteNumber;
  }

function AddPerson(string memory _name, uint256 _favoriteNumber) public {
    _person.push(People(_favoriteNumber, _name));
    nameToNumber[_name] = _favoriteNumber;
    numberToName[_favoriteNumber] = _name;
}

}
