<template>
  <v-row>
    <v-col>
      <h2 class="text-center">개발테스트페이지</h2>
    </v-col>
  </v-row>
</template>

<script>
import { caver } from '@/klaytn/caver'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      //
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
  },
}
</script>

<style></style>
