import Vue from 'vue'
import Vuex from 'vuex'

import wallet from '@/store/modules/wallet'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signUpcount: 0,
    signupBarPC: 33,
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
