<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-center">배달업체 페이지</h2>
    </v-col>
    <v-col cols="12">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">선택</th>
              <th class="text-left">제품명</th>
              <th class="text-left">수령지</th>
              <th class="text-left">배송지</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td><v-checkbox v-model="selected" :value="item.name"></v-checkbox></td>
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-col max-width="800" class="mx-auto" flat>
        <v-row justify="end">
          <v-btn color="success" class="mr-6">수령완료</v-btn>
          <v-btn color="success">배송완료</v-btn>
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
          name: '지드래곤에디션',
          calories: 'ㅁㄴㅇㅁㄴㄹㅁㅇㄹㅇ나ㅓㅗㅍ미ㅏ너오피ㅏ너오',
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
