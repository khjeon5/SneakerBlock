import Caver from 'caver-js'
import Web3 from 'web3'

const deployedABI = require('./deployedABI.json')
const TEST_NET = 'https://api.baobab.klaytn.net:8651'

export const config = {
  rpcURL: TEST_NET,
}

const caver = new Caver(new Web3.providers.HttpProvider(config.rpcURL))

const DEPLOYED_ADDRESS = '0xa47898be53fba0fecdb9b4e1dadea5bf0f3c77f7' // testnet

const getContractInstance = () => {
  const contractInstance = deployedABI && DEPLOYED_ADDRESS && new caver.klay.Contract(deployedABI, DEPLOYED_ADDRESS)
  return contractInstance
}

export { caver, getContractInstance }
