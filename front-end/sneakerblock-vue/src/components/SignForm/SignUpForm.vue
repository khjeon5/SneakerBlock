<template>
  <v-row>
    <v-col>
      <v-row justify="center">
        <h2>회원가입</h2>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-card max-width="400" class="mx-auto text-end" flat>
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required :value="vxemail" @input="updateEmail"></v-text-field>
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="password"
            :rules="passwordRules"
            :type="show ? 'text' : 'password'"
            label="Password"
            hint="At least 8 characters"
            value=""
            required
            @click:append="show = !show"
            @input="updatePassword"
          ></v-text-field>
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required @input="updateName">aaaa</v-text-field>
          <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>
        </v-form>
      </v-card>
    </v-col>
    {{ vxemail }}
    {{ email }}
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [v => !!v || 'Name is required', v => (v && v.length <= 10) || 'Name must be less than 10 characters'],
      email: '',
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      password: '',
      show: false,
      passwordRules: [v => !!v || 'Password is required', v => v.length >= 8 || 'Password min 8 characters'],
      checkbox: false,
      alertvalue: null,
      account: null,
      PubKey: null,
      nexttwo: null,
    }
  },
  computed: {
    ...mapState(['vxemail', 'vxpw', 'vxname', 'vxPubKey']),
  },
  methods: {
    updateEmail() {
      this.$store.state.vxemail = this.email
    },
    updatePassword() {
      this.$store.state.vxpw = this.password
    },
    updateName() {
      this.$store.state.vxname = this.name
    },
    onDone() {
      this.alertvalue = true
    },
    testlogin() {
      console.log(this.email, this.password, this.name)
    },
    next() {
      if (this.emailVerify) {
        console.log('가입되었습니다.')
      } else {
        console.log(this.emailVerify)

        alert('이미 있는 이메일입니다.')
      }
    },
  },
}
</script>

<style>
/*  */
</style>
