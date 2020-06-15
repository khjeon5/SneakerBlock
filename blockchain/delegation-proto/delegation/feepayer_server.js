const Caver = require('caver-js')
const caver = new Caver('https://api.baobab.klaytn.net:8651')
const feePayerAddress = '0x91ff7b7fa367c3281063ea06fdc842cf22336487'
const feePayerPrivateKey = '0xf387103eec0ad3ba9d10117c0cd64bef4600055f3cb0e3e063ac21d4b61b3901'

// 트랜잭션 수수료 납부자의 계정을 추가합니다.
caver.klay.accounts.wallet.add(feePayerPrivateKey, feePayerAddress)

var net = require('net')

feePayerSign = (senderRawTransaction, socket) => {
  // 트랜잭션 수수료 납부자
  caver.klay
    .sendTransaction({
      senderRawTransaction: senderRawTransaction,
      feePayer: feePayerAddress,
    })
    .on('transactionHash', function (hash) {
      console.log('transactionHash', hash)
    })
    .on('receipt', function (receipt) {
      console.log('receipt', receipt)
      socket.write('Tx hash is ' + receipt.transactionHash)
      socket.write('Sender Tx hash is ' + receipt.senderTxHash)
    })
    .on('error', console.error) // 가스 부족 에러(out-of-gas error)가 발생하면 두 번째 파라미터는 트랜잭션 영수증이 됩니다.
}

var server = net.createServer(function (socket) {
  console.log('Client is connected ...')
  socket.write('This is fee delegating service')
  socket.write('Fee payer is ' + feePayerAddress)
  socket.on('data', function (data) {
    console.log('로우데이터:', data)
    console.log('Received data from client:', data.toString())
    feePayerSign(data.toString(), socket)
  })
})

server.listen(1337, '127.0.0.1')
console.log('Fee delegate service started ...')
