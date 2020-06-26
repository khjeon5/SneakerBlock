const Token7 = artifacts.require('Token7')
const Token17 = artifacts.require('Token17')
const fs = require('fs')

module.exports = async function (deployer) {
  deployer.deploy(Token7, 'TEST', 'TET', 0, 10000).then(() => {
    if (Token7._json) {
      fs.writeFile('deployedABIToken7', JSON.stringify(Token7._json.abi, 2), (err) => {
        if (err) throw err
        console.log(`The abi of ${Token7._json.contractName} is recorded on deployedABI file`)
      })
    }
    fs.writeFile(
      'deployedAddressToken7',
      Token7.address,
      (err) => {
        if (err) throw err
        console.log(`The deployed contract address * ${Token7.address} * is recorded on deployedAddress file`)
    })
  })
  deployer.deploy(Token17, 'NFTTEST', 'NFTT').then(() => {
    if (Token17._json) {
      fs.writeFile('deployedABIToken17', JSON.stringify(Token17._json.abi, 2), (err) => {
        if (err) throw err
        console.log(`The abi of ${Token17._json.contractName} is recorded on deployedABI file`)
      })
    }
    fs.writeFile(
      'deployedAddressToken17',
      Token17.address,
      (err) => {
        if (err) throw err
        console.log(`The deployed contract address * ${Token17.address} * is recorded on deployedAddress file`)
    })
  })
}
