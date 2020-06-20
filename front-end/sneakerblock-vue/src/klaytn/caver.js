import Caver from 'caver-js'
import Web3 from 'web3'

const TEST_NET = 'https://api.baobab.klaytn.net:8651'

export const config = {
  rpcURL: TEST_NET,
}

const caver = new Caver(new Web3.providers.HttpProvider(config.rpcURL))

export { caver }
