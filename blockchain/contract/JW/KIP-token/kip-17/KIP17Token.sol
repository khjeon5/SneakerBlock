pragma solidity ^0.5.0;

import "./KIP17Full.sol";
import "./KIP17Mintable.sol";
import "./KIP17Image.sol";

contract KIP17Token is KIP17Full, KIP17Mintable, Klaystargram{
    constructor (string memory name, string memory symbol) public KIP17Full(name, symbol) {
    }
}