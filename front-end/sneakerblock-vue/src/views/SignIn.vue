<template>
  <v-container>
    <SignInForm></SignInForm>
  </v-container>
</template>
<script>
import SignInForm from '@/components/SignForm/SignInForm.vue'
export default {
  name: 'SignIn',
  components: {
    SignInForm,
  },
  data() {
    return {
      //
    }
  },
}
</script>
