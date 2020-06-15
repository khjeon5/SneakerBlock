const Caver = require('caver-js')

const caver = new Caver('https://api.baobab.klaytn.net:8651/')

caver.klay.getNodeInfo().then(console.log)

// const account = caver.klay.accounts.create()

const account = caver.klay.accounts.wallet.add('0xf387103eec0ad3ba9d10117c0cd64bef4600055f3cb0e3e063ac21d4b61b3901')


caver.klay.sendTransaction({
  type: 'VALUE_TRANSFER',
  from: account.address,
  to: '0x8e505cd541178775eabbdaadc9834e3cf7f1a355',
  gas: '300000',
  value: caver.utils.toPeb('1', 'KLAY'),
}).then(console.log)

