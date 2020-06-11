<template>
  <v-row>
    <v-col cols="12" class="mb-3">
      <h2 class="text-center">스니커즈 판매 등록</h2>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="6" lg="6">
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
            <v-col cols="12">
              <v-row justify="center" class="mx-1">
                <v-card class="max-auto mb-12" flat color="grey lighten-3">
                  <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" placeholder="Pick an image" prepend-icon="mdi-camera" label="upload image"></v-file-input>
                </v-card>
              </v-row>
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
              <h1 class="mb-3">모델명</h1>
              <h2 class="mb-3">가격</h2>
              <v-text-field class="mt-0 pt-0 mb-1" label="판매가격을 입력 해주세요"></v-text-field>
              <h2 class="mb-1">판매자: 지드래곤</h2>
            </v-col>
            <v-col cols="12">
              <h2 class="mb-3">제품 등록 정보</h2>
              <v-row justify="start" class="mx-1">
                <h3>브랜드 선택</h3>
                <v-col cols="12">
                  <v-select class="mt-0 pt-0 mb-1" :items="states" menu-props="auto" label="브랜드를 선택 해주세요" hide-details single-line></v-select>
                </v-col>
                <h3>모델명 선택</h3>
                <v-col cols="12">
                  <v-select class="mt-0 pt-0 mb-1" :items="states" menu-props="auto" label="모델명을 선택 해주세요" hide-details single-line></v-select>
                </v-col>
                <h3>사이즈 선택</h3>
                <v-col cols="12">
                  <v-select class="mt-0 pt-0 mb-1" :items="states" menu-props="auto" label="사이즈를 선택 해주세요" hide-details single-line></v-select>
                </v-col>
                <h3>고유번호 입력</h3>
                <v-col cols="12">
                  <v-text-field class="mt-0 pt-0 mb-1" label="고유번호를 입력 해주세요"></v-text-field>
                </v-col>
                <h3>검증자 선택</h3>
                <v-col cols="12">
                  <v-select class="mt-0 pt-0" :items="states" menu-props="auto" label="검증자를 선택 해주세요" hide-details single-line></v-select>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <h2 class="mb-2">제품 설명</h2>
              <v-textarea name="input-7-1" label="제품 설명을 적어주세요." hint="상세하게 적어주세요" auto-grow></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-row justify="end" class="mx-1">
                <v-btn color="success">등록</v-btn>
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
      rules: [value => !value || value.size < 2000000 || 'Image size should be less than 2 MB!'],
      e1: '브랜드를 선택 해주세요',
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
      ],
    }
  },
}
</script>

<style></style>
