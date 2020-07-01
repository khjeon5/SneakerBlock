<<<<<<< HEAD
<template>
  <v-container>
    <SignUpForm></SignUpForm>
  </v-container>
</template>
<script>
import SignUpForm from '@/components/SignForm/SignUpForm.vue'
export default {
  name: 'SignUp',
  components: {
    SignUpForm,
  },
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
    <SignUpBar></SignUpBar>
    <SignUpForm v-show="signUpcount == 0"></SignUpForm>
    <SignUpWallet v-show="signUpcount == 1"></SignUpWallet>
    <SignUpEnd v-show="signUpcount == 2"></SignUpEnd>
    <SignUpBtn></SignUpBtn>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'

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
  computed: {
    ...mapState(['signUpcount']),
  },
}
</script>
>>>>>>> 569399a5678910ba65d79ab5facc110b23e6d7c9
