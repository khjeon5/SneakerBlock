<<<<<<< HEAD
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <h2>Products</h2>
        </v-row>
      </v-col>
      <v-col v-for="n in 12" :key="n" cols="6" xs="6" lg="3" md="3">
        <v-row justify="center" class="mx-1">
          <v-card color="primary" class="max-auto">
            <v-container>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
            </v-container>
            <h2 class="text-center">안녕하세요 {{ n }}</h2>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'productAllList',
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style></style>
=======
<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center">
        <h2>All Sneakers</h2>
      </v-row>
    </v-col>
    <v-col v-for="product in allProduct" :key="product._id" cols="6" xs="6" sm="6" md="3" lg="3">
      <v-row justify="center" class="mx-1">
        <v-card color="grey lighten-3" class="max-auto" @click="$router.push({ name: 'Item' })" style="cursor:pointer" flat>
          <v-container class="mt-3">
            <v-img :src="require(`@/assets/sneakers/${product.img}`)"></v-img>
          </v-container>
          <h4 class="text-center mt-3">{{ product.name }}</h4>
          <h3 class="text-center mb-3">₩ {{ product.price }}</h3>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    allProduct: gql`
      query {
        allProduct {
          _id
          name
          price
          img
        }
      }
    `,
  },
  name: 'productAllList',
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style></style>
>>>>>>> 569399a5678910ba65d79ab5facc110b23e6d7c9
