// SPDX-License-Identifier: MIT

// Define the Solidity version
pragma solidity 0.8.4;

contract simpleStorage {
    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }
}
