import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const BASEURL = "https://vueauthapp.herokuapp.com";
Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    user: null,
    isLoggedin: false,
    notes: {
      title: '',
      desc: ''
    }
  },
  mutations: {

  },
  actions: {
  }
})
