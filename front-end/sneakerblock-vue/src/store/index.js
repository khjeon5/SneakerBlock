import Vue from 'vue'
import Vuex from 'vuex'

import wallet from '@/store/modules/wallet'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signUpcount: 0,
    signupBarPC: 33,
<<<<<<< HEAD
    vxemail: '',
    vxpw: '',
    vxname: '',
    vxPubKey: '',
=======
>>>>>>> 10572d90f164a7fa78921e9ea02a30f9bab13742
  },
  getters: {
    //
  },
  mutations: {
    init: state => {
      state.signUpcount = 0
      state.signupBarPC = 33
    },
    next: state => {
      state.signUpcount = 1
      state.signupBarPC = 66
    },
    before: state => {
      state.signUpcount = 0
      state.signupBarPC = 33
    },
    join: state => {
      state.signUpcount = 2
      state.signupBarPC = 100
    },
    toSignin: state => {
      state.signUpcount = 0
      state.signupBarPC = 33
    },
  },
  actions: {
    //
  },
  modules: {
    wallet,
  },
})
