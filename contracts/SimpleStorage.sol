// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleStorage {

    uint256 private value;
    address public owner;

    event ValueUpdated(uint256 oldValue, uint256 newValue);

    constructor() {
        owner = msg.sender;
    }

    function setValue(uint256 _value) public {
        uint256 oldValue = value;
        value = _value;

        emit ValueUpdated(oldValue, _value);
    }

    function getValue() public view returns (uint256) {
        return value;
    }

    function increment() public {
        value += 1;
    }

    function decrement() public {
        require(value > 0, "Value cannot be negative");
        value -= 1;
    }

    function reset() public {
        value = 0;
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}
