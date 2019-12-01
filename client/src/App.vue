<template>
  <div id="app">
      <raspi-toolbar></raspi-toolbar>
      <raspi-player></raspi-player>
  </div>
</template>

<script>
import Helper from './main';
import Player from './Player';
import Toolbar from './Toolbar';

export default {
  name: 'RaspiController',
  data: () => {
    return {
    }
  },
  components: {
    'raspi-player': Player,
    'raspi-toolbar': Toolbar
  },
  mounted: () => {
  },
}
</script>

<style lang="scss">
  body {
    background-color: #34495e;
  }
  #app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: 50px auto;
    grid-template-areas: 
      "toolbar toolbar toolbar toolbar toolbar"
      "main main main main main";

    .raspi-stream {
      grid-area: main;
      background-color: #7f8c8d;
    }
    #toolbar {
      grid-area: toolbar;
      background-color: #2c3e50;
    }
  }
</style>
