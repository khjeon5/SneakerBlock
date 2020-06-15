<template>
  <div>
    <HelloWorld />
    <span>{{ this.vxPubKey }}님 로그인을 환영합니다.</span>
    <v-container>
      {{ vxPubKey }}
      <productAllList />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import productAllList from '@/components/product/productAllList.vue'

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['vxPubKey']),
  },

  name: 'Home',
  components: {
    HelloWorld,
    productAllList,
  },
}
</script>
