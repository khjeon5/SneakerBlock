pragma solidity ^0.4.24;

interface IKIP7 {
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
    function totalSupply() external view returns(uint256);
    function balanceOf(address account) external view returns(uint256);
    function transfer(address recipient, uint256 amount) external returns(bool);
    function allowance(address owner, address spender) external view returns(uint256);
    function appoval(address spender, uint256 amount) external returns(bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns(bool);
    function safeTranfer(address recipient, uint256 amount, bytes data) external;
    function safeTranfer(address recipient, uint256 amount) external;
    function safeTranferFrom(address sender, address recipient, uint256 amount, bytes data) external;
    function safeTranferFrom(address sender, address recipient, uint256 amount) external;
    
}
