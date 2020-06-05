<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-center">관리자 페이지</h2>
    </v-col>
    <v-col cols="12">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">선택</th>
              <th class="text-left">검증자 신청 목록</th>
              <th class="text-left">상태</th>
              <th class="text-left">잔여기간</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td><v-checkbox v-model="selected" :value="item.name"></v-checkbox></td>
              <td>{{ item.name }}</td>
              <td>신청</td>
              <td>{{ item.calories }} 일</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-col max-width="800" class="mx-auto" flat>
        <v-row justify="end">
          <v-btn color="success" class="mr-6">취소</v-btn>
          <v-btn color="success">승인</v-btn>
        </v-row>
      </v-col>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Delivery',
  data() {
    return {
      selected: [],
      desserts: [
        {
          name: 'john',
          calories: '54654654354354354344',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
      ],
    }
  },
}
</script>
