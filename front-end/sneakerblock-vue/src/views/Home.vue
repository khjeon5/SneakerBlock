<template>
  <div>
    <HelloWorld />
    <span>{{ this.logInName }}님 로그인을 환영합니다.</span><br />
    <button @click="getBalance()">잔액확인</button>
    {{ this.balance }}
    <v-container>
      <productAllList />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import productAllList from '@/components/product/productAllList.vue'

import { mapState } from 'vuex'
import { caver } from '@/klaytn/caver'

export default {
  data() {
    return {
      balance: null,
    }
  },
  computed: {
    ...mapState(['vxPubKey', 'logInName']),
  },
  methods: {
    async getBalance() {
      //caver.klay.accounts.wallet.add('0x{0x4d31da58fe94a990d89192c7f77f6e3e056de3ee0bc3188163ca6c957d8776bd}', '0x2fe335a83162cb5b7dd9db89e57ac8078c81f61c')
      caver.klay.getBalance('0x2fe335a83162cb5b7dd9db89e57ac8078c81f61c').then(result => {
        console.log(result)
        this.balance = result
      })
    },
  },
  name: 'Home',
  components: {
    HelloWorld,
    productAllList,
  },
}
</script>
