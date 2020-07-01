<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-center">개발테스트페이지</h2>
    </v-col>
    <v-col>
      <h5 class="text-center">{{ tokenName }}</h5>
      <h5 class="text-center">{{ tokenBalance }}</h5>
    </v-col>
  </v-row>
</template>

<script>
import { caver, getContractInstanceToken7 } from '@/klaytn/caver'
import { mapMutations } from 'vuex'
import klaytnService from '@/klaytn/klaytnService'

export default {
  data() {
    return {
      tokenName: '',
      tokenBalance: '',
    }
  },
  methods: {
    ...mapMutations('wallet', ['setKlaytn']),
  },
  async created() {
    // const indd = await caver.klay.getNodeInfo()
    // console.log(indd)
    const acc = await caver.klay.accounts.create()
    console.log(acc)
    this.tokenName = await getContractInstanceToken7()
      .methods.name()
      .call()
    this.tokenBalance = await getContractInstanceToken7()
      .methods.balanceOf('0x8e505cd541178775eabbdaadc9834e3cf7f1a355')
      .call()
    const service = new klaytnService()
    const sss = await service.test()
    console.log(sss)
  },
}
</script>

<style></style>
