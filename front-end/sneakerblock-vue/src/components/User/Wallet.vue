<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-center">
        지갑
      </h2>
    </v-col>
    <v-col cols="12">
      <v-card max-width="400" class="mx-auto" flat>
        <h4 class="mb-3">내 지갑 주소</h4>
        <v-text-field :value="address" label="Address" outlined readonly></v-text-field>

        <h4 class="mb-3">보유 토큰</h4>
        <v-text-field :value="token + ' SBT'" label="Token" outlined readonly></v-text-field>

        <h4 class="mb-3">보유 스니커즈</h4>
        <v-row justify="center" class="mx-1">
          <v-col v-for="n in 4" :key="n" cols="6">
            <v-card color="grey lighten-3" class="max-auto" @click="$router.push({ name: 'Item' })" style="cursor:pointer" flat>
              <v-container class="mt-3">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
              </v-container>
              <h3 class="text-center mt-3">모델명 {{ n }}</h3>
              <h2 class="text-center mb-3">₩ 300,000</h2>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      address: '0x54dff6c456a84b2e35a454dff6c456a84b2e35a4',
      token: '12312',
      sneakers: [
        {
          asd: 'asd',
          ggg: 'ggg',
        },
        {
          asd: 'asd211',
          ggg: 'ggg222',
        },
      ],
    }
  },
}
</script>

<style></style>
