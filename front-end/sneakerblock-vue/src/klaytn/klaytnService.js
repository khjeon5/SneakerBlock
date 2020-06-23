import { caver } from './caver'

//const agContract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)

export default class KlaytnService {
  constructor() {
    //
  }

  async getBlockNumber() {
    const blockNumber = await caver.klay.getBlockNumber()
    return blockNumber
  }

  async getBalance(address) {
    const balance = await caver.klay.getBalance(address)
    return caver.utils.fromPeb(balance, 'KLAY')
  }
}
