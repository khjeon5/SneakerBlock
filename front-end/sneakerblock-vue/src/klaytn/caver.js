import Caver from 'caver-js'
import Web3 from 'web3'

const deployedABI = require('./deployedABITokne7.json')
const TEST_NET = 'https://api.baobab.klaytn.net:8651'
export const config = {
  rpcURL: TEST_NET,
}
const caver = new Caver(new Web3.providers.HttpProvider(config.rpcURL))
const DEPLOYED_ADDRESS = '0xf6E1f48CC41Fc55EB67b1119F40a0beaFB4362b6'

const getContractInstance = () => {
  const contractInstance = deployedABI && DEPLOYED_ADDRESS && new caver.klay.Contract(deployedABI, DEPLOYED_ADDRESS)
  return contractInstance
}

export { caver, getContractInstance }
