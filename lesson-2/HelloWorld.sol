// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
contract HelloWorld {
	string str = "Hello World";

    struct Info {
        string username;
        string helloPhrase;
    }

    Info[] info;

	function setString(string memory strToSet) public {
		str = strToSet; 
    }

    function setInfo(string memory _username, string memory _helloPhrase) public {
        info.push(Info(_username, _helloPhrase));
    }

    function getInfoByIndex(uint256 _index) public view returns(Info memory _info) {
        _info = info[_index];
    }

    function sayHello() public view returns (string memory result) {
        result = concatStrings(str);
    }

    function concatStrings(string memory strTobeAdded) public pure returns (string memory result) {
        result = string.concat(strTobeAdded, "from Frank's smart contract");
    }

    function someFunction(bytes32 st) public {}
}