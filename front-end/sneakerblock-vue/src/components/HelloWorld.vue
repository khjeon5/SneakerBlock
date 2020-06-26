<template>
  <div>
    <v-carousel height="300" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(item, i) in items" :key="i" src="./1.jpg" reverse-transition="fade-transition" transition="fade-transition">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 font-weight-bold white--text">SHOE BOX</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row>
        <v-col>
          <v-row justify="center"> </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>
