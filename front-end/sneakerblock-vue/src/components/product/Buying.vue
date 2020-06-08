<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-center">결제 페이지</h2>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="6" lg="6" class="pt-0">
      <v-card class="max-auto" flat color="grey lighten-3">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-row justify="center" class="mx-1 mt-12 mb-6">
                <v-card class="max-auto" flat>
                  <v-img src="https://picsum.photos/300/300?random"></v-img>
                </v-card>
              </v-row>
            </v-col>
            <v-col cols="12" class="text-center">
              <h1 class="mb-3">지드래곤 에디션</h1>
              <h2 class="mb-1">가격: ₩ 300,000</h2>
              <h2 class="mb-1">판매자: 지드래곤</h2>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" class="pt-0">
      <v-card class="max-auto" flat>
        <v-container class="pt-0">
          <v-row>
            <v-col cols="12">
              <h2 class="mb-3">구매자 정보</h2>
              <h3 class="mb-1">이름: 김스니커</h3>
              <h3 class="mb-1">배송지: 서울시 마포구 마포대로 89길 블록체인 크립토빌라 101동 7272호</h3>
            </v-col>
            <v-col cols="12">
              <h2 class="mb-3">결제 정보</h2>
              <h3>내 지갑 주소 : 0x12354654864156321321313</h3>
              <h3>내 토큰 잔액 : 3,000,000 XKRW</h3>
              <h3>결제 금액 : 300,000 XKRW</h3>
            </v-col>
            <v-col cols="12">
              <v-row justify="end" class="mx-1">
                <v-btn color="teal darken-3 white--text">결제</v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
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
