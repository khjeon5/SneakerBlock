<template>
  <v-container>
    <SignUpBar></SignUpBar>
    <SignUpForm v-if="btn == 0"></SignUpForm>
    <SignUpWallet v-if="btn == 1"></SignUpWallet>
    <SignUpEnd v-if="btn == 2"></SignUpEnd>
    <SignUpBtn></SignUpBtn>
  </v-container>
</template>
<script>
import SignUpBar from '@/components/SignForm/SignUpBar.vue'
import SignUpForm from '@/components/SignForm/SignUpForm.vue'
import SignUpWallet from '@/components/SignForm/SignUpWallet.vue'
import SignUpEnd from '@/components/SignForm/SignUpEnd.vue'
import SignUpBtn from '@/components/SignForm/SignUpBtn.vue'
export default {
  name: 'SignUp',
  components: {
    SignUpForm,
    SignUpBar,
    SignUpWallet,
    SignUpEnd,
    SignUpBtn,
  },
  data() {
    return {
      btn: 0,
    }
  },
}
</script>
