// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloWorld {
    string strVar = "Hello World";
  
    struct Info {
        string phrase;
        uint256 id;
        address addr;
    }

    Info[] infos;

    mapping(uint256 id => Info info) infoMapping;
  
    function sayHello(uint256 _id) public view returns(string memory) {
        if(infoMapping[_id].addr == address(0x0)) {
            return addinfo(strVar); 
        } else {
            return addinfo(infoMapping[_id].phrase);
        }
    }
    
    function setHelloWorld(string memory newString, uint256 _id) public {
        Info memory info = Info(newString, _id, msg.sender);
        infoMapping[_id] = info;
    }


    function addinfo(string memory helloWorldStr) internal pure returns(string memory) {
        return string.concat(helloWorldStr, " from Frank's contract.");
    }
}