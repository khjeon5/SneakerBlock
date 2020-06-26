import Caver from 'caver-js'
import Web3 from 'web3'

const deployedABIToken7 = require('./deployedABIToken7.json')
const deployedABIToken17 = require('./deployedABIToken7.json')

const TEST_NET = 'https://api.baobab.klaytn.net:8651'
export const config = {
  rpcURL: TEST_NET,
}
const caver = new Caver(new Web3.providers.HttpProvider(config.rpcURL))

const DEPLOYED_ADDRESS_TOKEN7 = '0xf6E1f48CC41Fc55EB67b1119F40a0beaFB4362b6'
const DEPLOYED_ADDRESS_TOKEN17 = '0x98137F18a4A2dc1444eF33edf9eDddB5C8D8A4f0'

const getContractInstanceToken7 = () => {
  const contractInstance = deployedABIToken7 && DEPLOYED_ADDRESS_TOKEN7 && new caver.klay.Contract(deployedABIToken7, DEPLOYED_ADDRESS_TOKEN7)
  return contractInstance
}
const getContractInstanceToken17 = () => {
  const contractInstance = deployedABIToken17 && DEPLOYED_ADDRESS_TOKEN17 && new caver.klay.Contract(deployedABIToken17, DEPLOYED_ADDRESS_TOKEN17)
  return contractInstance
}
export { caver, getContractInstanceToken7, getContractInstanceToken17 }
