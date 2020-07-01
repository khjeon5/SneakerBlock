import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
// import SocketIO from 'socket.io-client'

// import net from 'net'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:3000'),
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_',
    },
    // options: { path: '/my-app/' }, //Optional options
  }),
)

// Vue.prototype.$net = new net.Socket()

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
