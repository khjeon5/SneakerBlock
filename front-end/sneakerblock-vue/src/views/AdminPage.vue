<template>
  <v-container>
    <ChangeBtn class="mb-12"></ChangeBtn>
    <Admin></Admin>
    <Validator></Validator>
    <Delivery></Delivery>
  </v-container>
</template>
<script>
import ChangeBtn from '@/components/Admin/ChangeBtn.vue'
import Validator from '@/components/Admin/Validator.vue'
import Delivery from '@/components/Admin/Delivery.vue'
import Admin from '@/components/Admin/Admin.vue'
export default {
  components: {
    ChangeBtn,
    Delivery,
    Validator,
    Admin,
  },
  data() {
    return {
      //
    }
  },
}
</script>
