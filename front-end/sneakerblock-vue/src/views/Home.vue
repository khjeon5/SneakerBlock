<template>
  <div>
    <HelloWorld />
    <v-container>
      <productAllList />
    </v-container>
    <!-- <div v-for="user in allUsers" :key="user._id">
      {{ user.name }}<br />
      {{ user.email }}<br />
      {{ user.address }}<br />
      {{ user.pubKey }}<br />
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import productAllList from '@/components/product/productAllList.vue'
// import gql from 'graphql-tag'

export default {
  // apollo: {
  //   allUsers: gql`
  //     query {
  //       allUsers {
  //         _id
  //         email
  //         password
  //         name
  //         address
  //         pubKey
  //       }
  //     }
  //   `,
  // },
  name: 'Home',
  components: {
    HelloWorld,
    productAllList,
  },
}
</script>
