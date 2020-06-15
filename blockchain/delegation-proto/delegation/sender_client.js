var net = require('net')
var client = new net.Socket()

const Caver = require('caver-js')
const caver = new Caver('https://api.baobab.klaytn.net:8651')
const senderAddress = '0x19687755badea96d0d6f485ad7264a4af56879b9'
const senderPrivateKey = '0x186c1d383964f07df3d76421dad200a9e105b3d3599ad9c5fbbf97cb0b260d2c'
const toAddress = '0x8e505cd541178775eabbdaadc9834e3cf7f1a355'

sendFeeDelegateTx = async () => {
  // 발신자의 개인키로 트랜잭션을 서명합니다.
  const { rawTransaction: senderRawTransaction } = await caver.klay.accounts.signTransaction(
    {
      type: 'FEE_DELEGATED_VALUE_TRANSFER',
      from: senderAddress,
      to: toAddress,
      gas: '300000',
      value: caver.utils.toPeb('0.1', 'KLAY'),
    },
    senderPrivateKey
  )

  // 서명된 raw 트랜잭션을 트랜잭션 수수료 납부자의 서버로 전송합니다.
  client.connect(1337, '127.0.0.1', function () {
    console.log('Connected to fee delegated service')
  })
  client.write(senderRawTransaction)
  console.log(senderRawTransaction)

  client.on('data', function (data) {
    console.log('Received data from server: ' + data)
  })

  client.on('close', function () {
    console.log('Connection closed')
  })
}

sendFeeDelegateTx()
