import { caver } from './caver'

export default class KlaytnService {
  constructor() {
    //
  }

  async getBlockNumber() {
    const blockNumber = await caver.klay.getBlockNumber()
    return blockNumber
  }
}
