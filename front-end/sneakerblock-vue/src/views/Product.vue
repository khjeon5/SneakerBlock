<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <h2>Product</h2>
        </v-row>
      </v-col>
    </v-row>
    <productAllList />
  </v-container>
</template>
<script>
import productAllList from '@/components/product/productAllList.vue'
export default {
  name: 'Product',
  components: {
    productAllList,
  },
  data() {
    return {
      //
    }
  },
}
</script>
