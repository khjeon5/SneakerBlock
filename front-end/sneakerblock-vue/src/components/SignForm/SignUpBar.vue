<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center">
        <v-progress-linear color="teal darken-3" height="30" class="mx-10 white--text" :value="signupBarPC">
          <v-row class="font-weight-bold text-center mt-4">
            <v-col cols="4">
              <p class="ml-3">회원가입</p>
            </v-col>
            <v-col cols="4">
              <p class="">지갑생성</p>
            </v-col>
            <v-col cols="4">
              <p class="mr-3">가입완료</p>
            </v-col>
          </v-row>
        </v-progress-linear>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      //
    }
  },
  computed: {
    ...mapState(['signupBarPC']),
  },
}
</script>

<style></style>
