import { caver, getContractInstanceToken7, getContractInstanceToken17 } from './caver'

//const agContract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)

export default class KlaytnService {
  constructor() {
    //
  }
  async test() {
    await getContractInstanceToken7().methods.name()
    const v = await getContractInstanceToken17()
      .methods.name()
      .call()
    return v
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
