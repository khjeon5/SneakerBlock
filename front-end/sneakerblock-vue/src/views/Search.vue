<template>
  <v-container>
    <SearchItem></SearchItem>
    <productAllList></productAllList>
  </v-container>
</template>
<script>
import SearchItem from '@/components/Search/SearchItem.vue'
import productAllList from '@/components/product/productAllList.vue'
export default {
  components: {
    SearchItem,
    productAllList,
  },
  data() {
    return {
      //
    }
  },
}
</script>
