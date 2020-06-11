<<<<<<< HEAD
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <h2>AdminPage</h2>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'SignUp',
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
    <ChangeBtn class="mb-12"></ChangeBtn>
    <router-view />
  </v-container>
</template>
<script>
import ChangeBtn from '@/components/Admin/ChangeBtn.vue'

export default {
  components: {
    ChangeBtn,
  },
  data() {
    return {
      //
    }
  },
}
</script>
>>>>>>> 569399a5678910ba65d79ab5facc110b23e6d7c9
