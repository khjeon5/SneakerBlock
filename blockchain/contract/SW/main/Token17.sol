pragma solidity ^0.5.0;

import "../klaytn/contract/token/KIP17/KIP17Token.sol";
import "../openzeppline/contracts/ownership/Ownable.sol";
import {KIP7Spendable} from "./Token7.sol";
// import "https://github.com/elixirevo/smartcontract/blob/master/klaytn/contract/drafts/Counters.sol";

contract Token17 is KIP17Token, Ownable {
    uint256 sneakersNumber = 0;
    // // using sneakersNumber for Counters.Counter;
    // mapping (address => Counters.Counter) private sneakersNumber;
    mapping (address => mapping (uint256 => bool)) public isEnroll;
    mapping (uint256 => uint256) public itemPrice;
    mapping (uint256 => string) public isSell;
    mapping (uint256 => string) public isDelivery;
    mapping (uint256 => uint8) public isDeliveryNum;
    mapping (uint256 => address) public buyingAddress;
    uint256 _sneakersPrice;
    
    
    
    
    
    constructor(string memory name, string memory symbol) public KIP17Token(name, symbol) {
        
    }
    /// @notice The price to create new certificates
    uint256 _mintingPrice;
    
    /// @notice The currency to create new certificates
    KIP7Spendable _mintingCurrency;

    /// @dev The serial number of the next certificate to create
    uint256 nextCertificateId = 1;
    
    mapping(uint256 => uint256) certificateDataHashes;

    /**
     * @notice Query the certificate hash for a token
     * @param tokenId Which certificate to query
     * @return The hash for the certificate
     */
    function hashForToken(uint256 tokenId) external view returns (uint256) {
        return certificateDataHashes[tokenId];
    }

    /**
     * @notice The price to create certificates
     * @return The price to create certificates
     */
    function mintingPrice() external view returns (uint256) {
        return _mintingPrice;
    }

    /**
     * @notice The currency (ERC20) to create certificates
     * @return The currency (ERC20) to create certificates
     */
    function mintingCurrency() external view returns (KIP7Spendable) {
        return _mintingCurrency;
    }

    /**
     * @notice Set new price to create certificates
     * @param newMintingPrice The new price
     */
    function setMintingPrice(uint256 newMintingPrice) onlyOwner external {
        _mintingPrice = newMintingPrice;
    }

    /**
     * @notice Set new ERC20 currency to create certificates
     * @param newMintingCurrency The new currency
     */
    function setMintingCurrency(KIP7Spendable newMintingCurrency) onlyOwner external {
        _mintingCurrency = newMintingCurrency;
    }
    
    /**
     * @notice Allows anybody to create a certificate, takes payment from the
     *   msg.sender
     * @param dataHash A representation of the certificate data using the Aria
     *   protocol (a 0xcert cenvention).
     * @return The new certificate ID
     *   
     */
    function create(uint256 dataHash) external returns (uint) {
        // Take payment for this service
        _mintingCurrency.spend(msg.sender, _mintingPrice);
        
        // Create the certificate
        uint256 newCertificateId = nextCertificateId;
        _mint(msg.sender, newCertificateId);
        certificateDataHashes[newCertificateId] = dataHash;
        nextCertificateId = nextCertificateId + 1;
        
        return newCertificateId;
    }
    
    function exTran(address from, address to, uint256 amount) public {
        _mintingCurrency.transCAtoEOA(from, to, amount);
        
    }
    
    // product contract
    
    modifier equalPrice(uint256 num, uint256 price) {
        require(itemPrice[num] == price);
        _;
    }
    
    // function sneakersSellerToBuyer() public {
    //     _approve()
    //     _transferFrom(ownerOf(num), msg.sender, num);
    // }
    
    function enrollSneakers(uint256 price) public {
        _mint(msg.sender, sneakersNumber);
        isEnroll[msg.sender][sneakersNumber] = true;
        itemPrice[sneakersNumber] = price;
        approve(address(this), sneakersNumber);
        isSell[sneakersNumber] = '판매중';
        sneakersNumber++;
    }
    function buyingSneakers(uint256 num, uint256 price) public equalPrice(num, price) {
        _mintingCurrency.sendTokenBuyingSneakers(msg.sender, address(this), price);
        buyingAddress[num] = msg.sender;
        isSell[num] = '거래중';
        isDeliveryNum[num] = 1;
        isDelivery[num] = '준비중';
    }
    function deliveryStart(uint256 num) public {
        require(isDeliveryNum[num] == 1);
        isDelivery[num] = '배송중';
        isDeliveryNum[num] = 2;
        
    }
    function deliveryEnd(uint256 num) public {
        require(isDeliveryNum[num] == 2);
        isDelivery[num] = '배송완료';
        isDeliveryNum[num] = 3;
    }
    function deliveryConfirm(uint256 num) public {
        require(buyingAddress[num] == msg.sender);
        require(isDeliveryNum[num] == 3);
        isDelivery[num] = '확인완료';
        address exOwner = ownerOf(num);
        _transferFrom(ownerOf(num), msg.sender, num);
        _mintingCurrency.SendTokenTradeEnd(address(this), exOwner, itemPrice[num]);
    }
}
