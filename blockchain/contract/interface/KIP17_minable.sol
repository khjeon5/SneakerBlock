//KIP17 Mintable
interface IKIP17Minable {
    function mint(address _to, uint256 _tokenId) external returns (bool);
    function isMinter(address _account) external view returns (bool);
    function addMinter(address _account) external;
    function renounceMinter() external;
}
