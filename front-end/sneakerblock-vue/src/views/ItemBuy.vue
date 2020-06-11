<<<<<<< HEAD
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <h2>ItemBuy</h2>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'ItemBuy',
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
    <Buying></Buying>
  </v-container>
</template>
<script>
import Buying from '@/components/product/Buying.vue'
export default {
  components: {
    Buying,
  },
  data() {
    return {
      //
    }
  },
}
</script>
>>>>>>> 569399a5678910ba65d79ab5facc110b23e6d7c9
