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
