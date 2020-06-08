<template>
  <v-row>
    <v-col cols="12">
      <v-card max-width="400" class="mx-auto mt-3" flat>
        <v-row justify="end" v-if="btn == 0">
          <v-btn :disabled="!valid" color="primary" class="mx-3" @click="next()">
            next
          </v-btn>
        </v-row>
        <v-row justify="space-between" v-if="btn == 1">
          <v-btn color="teal white--text" class="mx-3" @click="before()">
            BEFORE
          </v-btn>
          <v-btn :disabled="!valid" color="primary" class="mx-3" @click="join()">
            JOIN
          </v-btn>
        </v-row>
        <v-row justify="end" v-if="btn == 2">
          <v-btn :disabled="!valid" color="primary" class="mx-3" router :to="{ name: 'SignIn' }">
            Sign In
          </v-btn>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      btn: 0,
    }
  },
  methods: {
    next() {
      this.btn++
    },
    join() {
      this.btn++
    },
    signin() {
      //
    },
    before() {
      this.btn--
    },
  },
}
</script>

<style></style>
