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
