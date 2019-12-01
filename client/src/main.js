import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify/dist/vuetify.min";

Vue.use(Vuetify);

gameControl.on('connect', gamepad => {
  console.log('A new gamepad was connected!');

  gamepad.on('up0', (value) => {
    
  });
});

//Vue.use(Vuetify);

new Vue({
  el: '#app',
  vuetify: new Vuetify({}),
  render: h => h(App)
})
