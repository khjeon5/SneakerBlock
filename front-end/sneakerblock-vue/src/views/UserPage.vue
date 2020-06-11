<<<<<<< HEAD
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <h2>UserPage</h2>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'UserPage',
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
    <MyPage></MyPage>
  </v-container>
</template>
<script>
import MyPage from '@/components/User/MyPage.vue'
export default {
  components: {
    MyPage,
  },
  name: 'UserPage',
  data() {
    return {
      //
    }
  },
}
</script>
>>>>>>> 569399a5678910ba65d79ab5facc110b23e6d7c9
