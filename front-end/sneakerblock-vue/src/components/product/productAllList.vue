<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center">
        <h2>All Sneakers</h2>
      </v-row>
    </v-col>
    <v-col v-for="n in 12" :key="n" cols="6" xs="6" sm="6" md="3" lg="3">
      <v-row justify="center" class="mx-1">
        <v-card color="grey lighten-3" class="max-auto" @click="$router.push({ name: 'Item' })" style="cursor:pointer" flat>
          <v-container class="mt-3">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
          </v-container>
          <h3 class="text-center mt-3">모델명 {{ n }}</h3>
          <h2 class="text-center mb-3">₩ 300,000</h2>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
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
