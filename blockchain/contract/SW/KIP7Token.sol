pragma solidity ^0.5.0;

import "https://github.com/elixirevo/smartcontract/blob/master/klaytn/contract/token/KIP7/KIP7Mintable.sol";
// import "https://github.com/elixirevo/smartcontract/blob/master/klaytn/contract/token/KIP7/KIP7Burnable.sol";
// import "https://github.com/elixirevo/smartcontract/blob/master/klaytn/contract/token/KIP7/KIP7Pausable.sol";
import "https://github.com/elixirevo/smartcontract/blob/master/klaytn/contract/token/KIP7/KIP7Metadata.sol";

import "https://github.com/elixirevo/smartcontract/blob/master/klaytn/contract/access/Roles.sol";

contract SpenderRole {
  using Roles for Roles.Role;

  event SpenderAdded(address indexed account);
  event SpenderRemoved(address indexed account);

  Roles.Role private spenders;

  constructor() internal {
    _addSpender(msg.sender);
  }

  modifier onlySpender() {
    require(isSpender(msg.sender));
    _;
  }

  function isSpender(address account) public view returns (bool) {
    return spenders.has(account);
  }

  function addSpender(address account) public onlySpender {
    _addSpender(account);
  }

  function renounceSpender() public {
    _removeSpender(msg.sender);
  }

  function _addSpender(address account) internal {
    spenders.add(account);
    emit SpenderAdded(account);
  }

  function _removeSpender(address account) internal {
    spenders.remove(account);
    emit SpenderRemoved(account);
  }
}

contract KIP7Spendable is KIP7, SpenderRole {
  /**
   * @dev Function to mint tokens
   * @param from The address that will spend the tokens
   * @param value The amount of tokens to spend
   * @return A boolean that indicates if the operation was successful
   */
  function spend(address from, uint256 value) public onlySpender returns (bool) {
    _burn(from, value);
    return true;
  }
  function transCAtoEOA(address from, address to, uint256 amount) public {
      _approve(from, address(this), amount);
      _transfer(from, to, amount);
  }
  
//   product contract
  function sendTokenBuyingSneakers(address from, address to, uint256 amount) public {
    //   _approve(msg.sender, address(this), amount);
      _transfer(from, to, amount);
  }
  
  function SendTokenTradeEnd(address from, address to, uint256 amount) public {
      _approve(from, to, amount);
      _transfer(from, to, amount);
      _approve(from, to, 0);
  }
  
  
}


contract KIP7Token is KIP7Mintable, KIP7Metadata, KIP7Spendable {
    constructor(string memory name, string memory symbol, uint8 decimals, uint256 initialSupply) KIP7Metadata(name, symbol, decimals) public {
        _mint(msg.sender, initialSupply);
    }
}