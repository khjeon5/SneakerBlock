<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-center">마이 페이지</h2>
    </v-col>
    <v-col cols="12">
      <h3 class="text-center">배송현황</h3>
    </v-col>
    <v-col cols="12">
      <v-card max-width="500" class="mx-auto" flat>
        <v-simple-table height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">배송제품</th>
                <th class="text-center">상태</th>
                <th class="text-center">수령</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td class="text-center">{{ item.name }}</td>
                <td class="text-center">{{ item.calories }}</td>
                <td class="text-center">
                  <v-btn color="success">수령확인</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-col>
    <v-col cols="12">
      <h3 class="text-center">회원 정보</h3>
    </v-col>
    <v-col cols="12" class="text-center">
      <v-card max-width="400" class="mx-auto" flat>
        <p>이메일: {{ userinfo.email }}</p>
        <p>이름: {{ userinfo.name }}</p>
        <p>유저유형: {{ userinfo.type }}</p>
        <p>배송지: {{ userinfo.deliveryAddress }}</p>
        <div class="text-right mt-12 mb-12">
          <v-btn color="success" @click="changeUserType">검증자 신청</v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {
        email: '123@asd.com',
        name: 'asd',
        type: '일반',
        deliveryAddress: '서울시 마포구 신촌역',
      },
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
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
  methods: {
    changeUserType() {
      this.userinfo.type = '검증자'
    },
  },
}
</script>

<style></style>
