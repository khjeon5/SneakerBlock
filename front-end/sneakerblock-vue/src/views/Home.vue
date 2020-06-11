<template>
  <div>
    <HelloWorld />
    <productAllList />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import productAllList from '@/components/product/productAllList.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    productAllList,
  },
}
</script>
