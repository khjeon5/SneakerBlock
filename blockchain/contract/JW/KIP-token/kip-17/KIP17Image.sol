pragma solidity ^0.5.0;

import "./KIP17.sol";
import "./KIP17Enumerable.sol";

contract Klaystargram is KIP17, KIP17Enumerable {
    event PhotoUploaded (uint indexed tokenId, bytes photo, string title, string location, string description, uint256 timestamp);

    mapping (uint256 => PhotoData) private _photoList;

    struct PhotoData {
        uint256 tokenId;                       // 1부터 차례로 1씩 증가하는 고유한 토큰 ID
        address[] ownerHistory;                // 이전 소유자들의 기록
        bytes photo;                           // 이미지의 소스
        string title;                          // 사진 제목
        string location;                       // 사진 촬영 장소
        string description;                    // 사진에 대한 간략한 설명
        uint256 timestamp;                     // 업로드된 시간
    }
    
    function uploadPhoto(bytes memory photo, string memory title, string memory location, string memory description, string memory sneakers_name) public {
    uint256 tokenId = totalSupply() + 1;

    _mint(msg.sender, tokenId, sneakers_name);

    address[] memory ownerHistory;

    PhotoData memory newPhotoData = PhotoData({
        tokenId : tokenId,
        ownerHistory : ownerHistory,
        photo : photo,
        title: title,
        location : location,
        description : description,
        timestamp : now
    });

    _photoList[tokenId] = newPhotoData;
    _photoList[tokenId].ownerHistory.push(msg.sender);

    emit PhotoUploaded(tokenId, photo, title, location, description, now);
    }
    /**
  * @notice safeTransferFrom 함수는 수신자가 ERC721 토큰을 처리할 수 있는지 체크하여 토큰이 유실되는 상황을 줄여줍니다. 해당 사실을 확인한 후 아래에서 정의된 transferFrom 함수를 호출합니다.
  */
    function transferOwnership(uint256 tokenId, address to) public returns(uint, address, address, address) {
        safeTransferFrom(msg.sender, to, tokenId);
    }

/**
  * @notice safeTransferFrom 함수를 사용하는 transferOwnership을 사용하기를 권장합니다.
  * @dev 소유권이 이전될 때마다 새로운 소유자의 주소가 ownerHistory 배열에 추가되도록 하기 위해 transferFrom 함수를 재정의합니다.
  */
    function transferFrom(address from, address to, uint256 tokenId) public {
        super.transferFrom(from, to, tokenId);
        _photoList[tokenId].ownerHistory.push(to);
    }
    
    function getPhoto(uint tokenId) public view returns(uint256, address[] memory, bytes memory, string memory, string memory, string memory, uint256) {
        require(_photoList[tokenId].tokenId != 0, "Photo does not exist");
        return (
            _photoList[tokenId].tokenId,
            _photoList[tokenId].ownerHistory,
            _photoList[tokenId].photo,
            _photoList[tokenId].title,
            _photoList[tokenId].location,
            _photoList[tokenId].description,
            _photoList[tokenId].timestamp);
    }
}