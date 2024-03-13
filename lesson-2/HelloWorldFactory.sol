// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "./HelloWorld.sol";

contract HelloWorldFactory {
    HelloWorld hw;

    HelloWorld[] hws;

    function createHelloWorld() public {
        hw = new HelloWorld();
        hws.push(hw);
    }

    function getHwByIndex(uint256 index) public view returns (HelloWorld _hw) {
        _hw = hws[index];
    }

    function callHwFunctionByIndex(uint256 index) public view returns (string memory result) {
        result = hws[index].sayHello();
    }
}