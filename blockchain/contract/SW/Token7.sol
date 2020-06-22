pragma solidity ^0.5.0;

import "./KIP7Token.sol";

contract Token7 is KIP7Token {
    constructor(string memory name, string memory symbol, uint8 decimals, uint256 initialSupply) KIP7Token(name, symbol, decimals, initialSupply) public {
        
    }
    
    // function getToken(uint _amount) public {
    //     transfer(address(this), _amount);
    // }
    
    // function sendToken(address _receive, uint _amount) public {
    //     _approve(address(this), msg.sender, _amount);
    //     transferFrom(address(this), _receive, _amount);
    // }
    // function approveCA(address spender, uint256 value) public returns (bool) {
    //     _approve(address(this), spender, value);
    //     return true;
    // }
}