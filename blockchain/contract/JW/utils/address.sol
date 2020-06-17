pragma soclidity ^0.4.24;

interface IKIP13 {
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}

contract KIP13 is IKIP13 {
    bytes4 private constant _INTERFACE_ID_ERC165 = 0x01ffc9a7;
    
    mapping(bytes4 => bool) private _supportedInterfaces;
    
    constructor () internal {
        _registerInterface(_INTERFACE_ID_ERC165);
    }
    
    function supportsInterface(bytes4 interfaceId) external view returns (bool) {
        return _supportedInterfaces[interfaceId];
    }
    
    function _registerInterface(bytes4 interfaceId) internal {
        require(interfaceId != 0xffffffff, "ERC165: invalid interface id");
        _supportedInterfaces[interfaceId] = true;
    }
}