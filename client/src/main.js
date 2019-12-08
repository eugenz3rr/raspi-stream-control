import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify/dist/vuetify.min";
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

const socket = io('http://stream:8081');

Vue.use(Vuetify);
Vue.use(VueSocketIOExt, socket);

new Vue({
  el: '#app',
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  }),
  render: h => h(App)
})


export let Helper = new Vue({
  name: 'Helper',
  data: {
    fullscreen: false,
    socket: null
  },
  methods: {

    // Calculate ratio by given width.
    screenRatio: function ( ratioX, ratioY, x) {
      return {
        x,
        y: x / ratioX * ratioY, 
      }
    },
  },
});
