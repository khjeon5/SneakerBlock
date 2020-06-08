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
