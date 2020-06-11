<<<<<<< HEAD
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <h2>Sign In</h2>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'SignIn',
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
>>>>>>> 569399a5678910ba65d79ab5facc110b23e6d7c9
