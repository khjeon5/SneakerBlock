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
