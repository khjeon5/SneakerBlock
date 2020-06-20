pragma soclidity ^0.4.24;

//KIP7 wallet interface
interface IKIP7Receiver {
    function onKIPReceived(address _operator, address _from, uint256 _amount, bytes _data) external returns(bytes4);
}
