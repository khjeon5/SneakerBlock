<template>
  <v-container>
    <FavoriteList></FavoriteList>
    <productAllList></productAllList>
  </v-container>
</template>
<script>
import FavoriteList from '@/components/product/FavoriteList.vue'
import productAllList from '@/components/product/productAllList.vue'
export default {
  components: {
    FavoriteList,
    productAllList,
  },
  data() {
    return {
      //
    }
  },
}
</script>
