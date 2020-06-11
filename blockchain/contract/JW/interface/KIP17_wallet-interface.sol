//KIP17 wallet interface
interface IKIP17Receiver {
    function onIKIP17Received(address _operator, address _from, uint256 _tokenId, bytes data) external returns(bytes4);
}
