<template>
  <v-container>
    <SignUpBar></SignUpBar>
    <SignUpForm></SignUpForm>
    <SignUpWallet></SignUpWallet>
    <SignUpEnd></SignUpEnd>
  </v-container>
</template>
<script>
import SignUpBar from '@/components/SignForm/SignUpBar.vue'
import SignUpForm from '@/components/SignForm/SignUpForm.vue'
import SignUpWallet from '@/components/SignForm/SignUpWallet.vue'
import SignUpEnd from '@/components/SignForm/SignUpEnd.vue'
export default {
  name: 'SignUp',
  components: {
    SignUpForm,
    SignUpBar,
    SignUpWallet,
    SignUpEnd,
  },
  data() {
    return {
      //
    }
  },
}
</script>
