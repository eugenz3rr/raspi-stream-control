import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify/dist/vuetify.min";

Vue.use(Vuetify);

export let Helper = new Vue({
  name: 'Helper',
  data: {
    fullscreen: false
  },
  methods: {

    // Calculate ratio by given width.
    screenRatio: function ( ratioX, ratioY, x) {
      return {
        x,
        y: x / ratioX * ratioY, 
      }
    },
  }
});


gameControl.on('connect', gamepad => {
  console.log('A new gamepad was connected!');

  gamepad.on('up0', (value) => {
    
  });
});

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
