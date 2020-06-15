const Caver = require('caver-js')

const caver = new Caver('https://api.baobab.klaytn.net:8651/')

caver.klay.getNodeInfo().then(console.log)

// 보내는사람
const senderPrivateKey = '0x186c1d383964f07df3d76421dad200a9e105b3d3599ad9c5fbbf97cb0b260d2c'

// 받는사람
const feePayerAddress = '0x91ff7b7fa367c3281063ea06fdc842cf22336487'
const feePayerPrivateKey = '0xf387103eec0ad3ba9d10117c0cd64bef4600055f3cb0e3e063ac21d4b61b3901'

const signd = async () => {
  const { rawTransaction: senderRawTransaction } = await caver.klay.accounts.signTransaction(
    {
      type: 'FEE_DELEGATED_VALUE_TRANSFER',
      from: '0x19687755badea96d0d6f485ad7264a4af56879b9',
      to: '0x8e505cd541178775eabbdaadc9834e3cf7f1a355',
      gas: '300000',
      value: caver.utils.toPeb('1', 'KLAY'),
    },
    senderPrivateKey
  )

  caver.klay.accounts.wallet.add(feePayerPrivateKey, feePayerAddress)

  caver.klay
    .sendTransaction({
      senderRawTransaction: senderRawTransaction,
      feePayer: feePayerAddress,
    })
    .on('transactionHash', function (hash) {
      console.log('1 hash====================')
      console.log(hash)
    })
    .on('receipt', function (receipt) {
      console.log('2 receipt====================')
      console.log(receipt)
    })
    .on('error', console.error)
}

signd()
