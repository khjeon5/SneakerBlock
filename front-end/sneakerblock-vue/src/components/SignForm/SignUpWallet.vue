<template>
  <v-row>
    <v-col>
      <v-row justify="center">
        <h2>지갑 생성</h2>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-card max-width="400" class="mx-auto" flat>
        <v-form ref="form">
          <v-text-field :value="createAC.address" label="지갑주소" filled readonly></v-text-field>
          <v-textarea label="Private-Key" filled auto-grow readonly :value="createAC.privateKey"></v-textarea>
          <v-textarea label="Public-Key" filled auto-grow readonly :value="createAC.accountKey"></v-textarea>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import { caver } from '@/klaytn/caver'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      //
    }
  },
  computed: {
    ...mapState('wallet', ['createAC']),
  },
  methods: {
    ...mapMutations('wallet', ['setKlaytn', 'setIsConnectWallet', 'setMyAddress', 'setBalance']),
    // async createAccount() {
    //   const acc = await caver.klay.accounts.create()
    //   this.createAC = acc
    // },
  },
}
</script>

<style></style>
