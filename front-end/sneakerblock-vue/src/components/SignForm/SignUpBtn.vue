<template>
  <v-row>
    <v-col cols="12">
      <v-card max-width="400" class="mx-auto mt-3" flat>
        <v-row justify="end" v-if="signUpcount == 0">
          <v-btn :disabled="!valid" color="primary" class="mx-3" @click="next()">
            next
          </v-btn>
        </v-row>
        <v-row justify="space-between" v-if="signUpcount == 1">
          <v-btn color="teal white--text" class="mx-3" @click="before()">
            BEFORE
          </v-btn>
          <v-btn :disabled="!valid" color="primary" class="mx-3" @click="createAccount()">
            generate
          </v-btn>
          <v-btn :disabled="!valid" color="primary" class="mx-3" @click="join()">
            JOIN
          </v-btn>
        </v-row>
        <v-row justify="end" v-if="signUpcount == 2">
          <v-btn :disabled="!valid" color="primary" class="mx-3" @click="toSignin" router :to="{ name: 'SignIn' }">
            Sign In
          </v-btn>
        </v-row>
      </v-card>
    </v-col>
    {{ createAC.privateKey }}<br />
    {{ createAC.address }}<br />
    {{ this.vxemail }}<br />
    {{ vxpw }}<br />
    {{ vxname }}<br />
  </v-row>
</template>

<script>
// import { caver } from '@/klaytn/caver'
import { mapState, mapMutations } from 'vuex'
//import { CREATE_USER_MUTATION } from '@/constants/graphql'
import gql from 'graphql-tag'
export default {
  data() {
    return {
      valid: true,
      btn: 0,
    }
  },
  computed: {
    ...mapState(['signUpcount', 'vxemail', 'vxpw', 'vxname']),
    ...mapState('wallet', ['createAC']),
  },
  methods: {
    ...mapMutations(['next', 'before', 'join', 'toSignin']),
    ...mapMutations('wallet', ['createAccount']),
    toSignin() {
      console.log('clicked')
      this.$apollo.mutate({
        mutation: gql`
          mutation createUser($email: String!, $password: String!, $name: String!, $address: String!, $pubkey: String!) {
            createUser(input: { email: $email, password: $password, name: $name, address: $address, pubkey: $pubkey }) {
              _id
              email
              password
              address
              name
              pubKey
            }
          }
        `,
        variables: {
          email: this.vxemail,
          password: this.vxpw,
          name: this.vxname,
          address: this.createAC.address,
          pubkey: this.createAC.privateKey,
        },
      }),
        // this.$apollo.mutate({
        //   mutation: CREATE_USER_MUTATION,
        //   variables: {
        //     email: this.vxemail,
        //     password: this.vxpw,
        //     name: this.vxname,
        //     address: this.createAC.address,
        //     pubkey: this.createAC.privateKey,
        //   },
        // }),
        console.log('singin completed')
    },
  },
}
</script>

<style></style>
