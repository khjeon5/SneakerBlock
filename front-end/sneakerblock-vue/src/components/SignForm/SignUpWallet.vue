<template>
  <v-row>
    <v-col>
      <v-row justify="center">
        <h2>지갑 생성</h2>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-card max-width="400" class="mx-auto" flat>
        <v-form ref="form">
          <v-text-field value="0x5465432135135135354324135432131024354xss" label="지갑주소" filled readonly></v-text-field>
          <v-textarea
            label="Private-Key"
            filled
            auto-grow
            readonly
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
          <v-textarea
            label="Public-Key"
            filled
            auto-grow
            readonly
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style></style>
