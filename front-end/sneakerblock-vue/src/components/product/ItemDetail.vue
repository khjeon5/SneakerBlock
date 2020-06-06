<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-center">모델명</h2>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="6" lg="6">
      <v-card class="max-auto" flat>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-row justify="center" class="mx-1">
                <v-card class="max-auto" flat>
                  <v-img src="https://picsum.photos/300/300?random"></v-img>
                </v-card>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row justify="center" class="mx-1">
                <v-card class="max-auto" flat>
                  <v-btn>
                    <span>Favorites</span>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6">
      <v-card class="max-auto" flat>
        <v-container>
          <v-row>
            <v-col cols="12">
              <h1 class="mb-3">모델명</h1>
              <h2 class="mb-3">가격: 3000SBT</h2>
              <h2 class="mb-1">판매자: 지드래곤</h2>
            </v-col>
            <v-col cols="12">
              <h2 class="mb-3">제품 정보</h2>
              <h3>브랜드: 나이키</h3>
              <h3>사이즈: 270</h3>
              <h3>검증자: 검증왕 김검증</h3>
            </v-col>
            <v-col cols="12">
              <h2 class="mb-2">제품 설명</h2>
              <v-textarea
                name="input-7-1"
                label="제품 설명"
                hint="상세하게 적어주세요"
                auto-grow
                value="이것은 제품입니다. 그렇기 때문에 제품이라고 생각합니다. 그래서 제품일 수 밖에 없습니다. 펀하고 쿨하고 섹시하게 될 수 있습니다."
                readonly
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-row justify="end" class="mx-1">
                <v-btn color="success">구매</v-btn>
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
