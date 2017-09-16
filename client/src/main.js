// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import axios from 'axios'
import * as firebase from 'firebase'

Vue.use(Vuefire)
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD1V4lqU8dCUpQkZUEbRXEOWtbifhfpA6Q",
  authDomain: "tamastro-12.firebaseapp.com",
  databaseURL: "https://tamastro-12.firebaseio.com",
  projectId: "tamastro-12",
  storageBucket: "tamastro-12.appspot.com",
  messagingSenderId: "118127145065"
};

const firebaseApp = firebase.initializeApp(config)


Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: `http://localhost:3000`
})

Vue.prototype.$db = firebaseApp.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
