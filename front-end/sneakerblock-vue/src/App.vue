<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app right disable-resize-watcher temporary>
      <v-list dense>
        <v-list-item router :to="{ name: 'Home' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'Search' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Search</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'Product' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sneakers</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'ProductEnroll' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Enroll</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'UserPage' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Page</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'Favorites' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Favorites</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'UserWallet' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Wallet</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'SignUp' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sign Up</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'SignIn' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sign In</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="teal darken-4" dark flat>
      <v-toolbar-title @click="$router.push({ name: 'Home' })" style="cursor:pointer">SHOE BOX</v-toolbar-title>
      <v-btn color="success" @click="screen = !screen" style="margin-left:20px">screen</v-btn>
      <v-spacer></v-spacer>
      <div v-if="screen">
        <span @click="$router.push({ name: 'TestPage' })" style="cursor:pointer" class="mx-2">TestPage</span>
        <span @click="$router.push({ name: 'AdminPage' })" style="cursor:pointer" class="mx-2">AdminPage</span>
        <span @click="$router.push({ name: 'Home' })" style="cursor:pointer" class="mx-2">Home</span>
        <span @click="$router.push({ name: 'Search' })" style="cursor:pointer" class="mx-2">Search</span>
        <span @click="$router.push({ name: 'Product' })" style="cursor:pointer" class="mx-2">Sneakers</span>
        <span @click="$router.push({ name: 'ProductEnroll' })" style="cursor:pointer" class="mx-2">Enroll</span>
        <span @click="$router.push({ name: 'UserPage' })" style="cursor:pointer" class="mx-2">My Page</span>
        <span @click="$router.push({ name: 'Favorites' })" style="cursor:pointer" class="mx-2">Favorites</span>
        <span @click="$router.push({ name: 'UserWallet' })" style="cursor:pointer" class="mx-2">Wallet</span>
        <span @click="$router.push({ name: 'SignUp' })" style="cursor:pointer" class="mx-2">Sign Up</span>
        <span @click="$router.push({ name: 'SignIn' })" style="cursor:pointer" class="mx-2">Sign In</span>
      </div>
      <v-app-bar-nav-icon v-else @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer color="teal darken-4 white--text" class="pt-6">
      <v-spacer></v-spacer>
      <div class="mb-6">
        <h1><strong>SHOE BOX</strong></h1>
        <h4><strong>with Blockchain Playground</strong></h4>
      </div>
      <v-spacer></v-spacer>
      <div class="mb-6">
        서울 마포구 공덕동 254-5, 공덕역 4번 출구, 신용보증기금빌딩 15층 알파룸 <br />
        <strong>Copyright © 2020 SHOE BOX. All Rights Reserved.</strong>
      </div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    //
  },

  data() {
    return {
      drawer: false,
      screen: true,
      search: false,
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
    }
  },
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
