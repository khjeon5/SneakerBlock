<<<<<<< HEAD
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <h2>UserWallet</h2>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'UserWallet',
  data() {
    return {
      //
    }
  },
}
</script>
=======
<template>
  <v-container>
    <Wallet></Wallet>
  </v-container>
</template>
<script>
import Wallet from '@/components/User/Wallet.vue'
export default {
  name: 'UserWallet',
  components: {
    Wallet,
  },
  data() {
    return {
      //
    }
  },
}
</script>
>>>>>>> 569399a5678910ba65d79ab5facc110b23e6d7c9
