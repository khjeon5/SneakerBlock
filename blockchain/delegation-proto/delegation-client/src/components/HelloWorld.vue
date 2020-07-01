<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h4>내 주소: {{ myaddress }}</h4>
      <h4>내 클레이: {{ myklay }} Klay</h4>
      <h4>내 토큰: {{ mytoken }}</h4>
    </div>
    <form action="post">
      <input v-model="sendKlay" placeholder="전송할 클레이를 입력 해주세요" />
    </form>
    <button @click="signTran">전송</button>
  </div>
</template>

<script>
import Web3 from 'web3'
import Caver from 'caver-js'

const caver = new Caver(new Web3.providers.HttpProvider('https://api.baobab.klaytn.net:8651'))

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      myaddress: '0x19687755badea96d0d6f485ad7264a4af56879b9',
      mypriv: '0x186c1d383964f07df3d76421dad200a9e105b3d3599ad9c5fbbf97cb0b260d2c',
      toaddress: '0x8e505cd541178775eabbdaadc9834e3cf7f1a355',
      myklay: '0',
      mytoken: '10 AA',
      transactionRecipt: '',
      sendKlay: null,
    }
  },
  methods: {
    async signTran() {
      // console.log(this.sendKlay)
      const { rawTransaction: senderRawTransaction } = await caver.klay.accounts.signTransaction(
        {
          type: 'FEE_DELEGATED_VALUE_TRANSFER',
          from: this.myaddress,
          to: this.toaddress,
          gas: '300000',
          value: caver.utils.toPeb(this.sendKlay, 'KLAY'),
        },
        this.mypriv,
      )
      console.log(senderRawTransaction)
      this.$socket.emit('data', senderRawTransaction)
      this.$socket.on('data', function(data) {
        console.log('Received data from server: ' + data)
      })
      this.$socket.on('disconnect', function() {
        console.log('Connection closed')
      })

      // this.$http
      //   .post('http://127.0.0.1:1337', senderRawTransaction)
      //   .then(console.log)
      //   .catch(console.log)
      // =====================================================
      // const client = this.$net
      // client.connect(1337, '127.0.0.1', function() {
      //   console.log('Connected to fee delegated service')
      // })
      // client.write(senderRawTransaction)

      // client.on('data', function(data) {
      //   console.log('Received data from server: ' + data)
      // })

      // client.on('close', function() {
      //   console.log('Connection closed')
      // })
    },
    async getKlay() {
      const pebklay = await caver.klay.getBalance(this.myaddress)
      this.myklay = await caver.utils.fromPeb(pebklay)
    },
    getklayInterval() {
      setInterval(() => {
        // console.log('as')
        this.getKlay()
      }, 1000)
    },
  },
  async created() {
    await caver.klay.getNodeInfo().then(console.log)
    const pebklay = await caver.klay.getBalance(this.myaddress)
    this.myklay = await caver.utils.fromPeb(pebklay)
    // console.log(this.$net)
    // console.lgo(this.$socket)
    this.$socket.on('connect', function() {
      console.log('connected')
    })
    this.getklayInterval()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
