<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-center">검색</h2>
    </v-col>
    <v-col cols="12">
      <v-card max-width="400" class="mx-auto" flat>
        <v-form ref="form">
          <v-text-field label="검색할 내용을 입력 해주세요" single-line outlined clearable></v-text-field>
          <v-row justify="end" class="mx-1">
            <v-btn color="success">검색</v-btn>
          </v-row>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      //
    }
  },
}
</script>

<style></style>
