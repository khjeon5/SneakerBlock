<<<<<<< HEAD
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
=======
<template>
  <v-container>
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
>>>>>>> 569399a5678910ba65d79ab5facc110b23e6d7c9
