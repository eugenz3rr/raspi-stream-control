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
  data() {
    return {
      Helper,
      socket: null
    }
  },
  components: {
    'raspi-player': Player,
    'raspi-toolbar': Toolbar
  },
  mounted: function () {

    gameControl.on('connect', gamepad => {

      gamepad.on('button0', () => {
      }).before('button0', () => {
        this.socket.emit('control', ['X', true]);
      }).after( 'button0', () => {
        this.socket.emit('control', ['X', false]);
      });

      gamepad.on('button1', () => {
      }).before('button1', () => {
        this.$socket.client.emit('control', ['O', true]);
      }).after( 'button1', () => {
        this.$socket.client.emit('control', ['O', false]);
      });

      gamepad.on('button3', () => {
      }).before('button3', () => {
        this.$socket.client.emit('control', ['[]', true]);
      }).after( 'button3', () => {
        this.$socket.client.emit('control', ['[]', false]);
      });

      gamepad.on('button4', () => {
      }).before('button4', () => {
        this.$socket.client.emit('control', ['A', true]);
      }).after( 'button4', () => {
        this.$socket.client.emit('control', ['A', false]);
      });

      gamepad.on('button7', () => {
      }).before('button7', () => {
        this.$socket.client.emit('control', ['R1', true]);
      }).after( 'button7', () => {
        this.$socket.client.emit('control', ['R1', false]);
      });

      gamepad.on('button9', () => {
      }).before('button9', () => {
        this.$socket.client.emit('control', ['R2', true]);
      }).after( 'button9', () => {
        this.$socket.client.emit('control', ['R2', false]);
      });

      gamepad.on('button6', () => {
      }).before('button6', () => {
        this.$socket.client.emit('control', ['L1', true]);
      }).after( 'button6', () => {
        this.$socket.client.emit('control', ['L1', false]);
      });

      gamepad.on('button8', () => {
      }).before('button8', () => {
        this.$socket.client.emit('control', ['L2', true]);
      }).after( 'button8', () => {
        this.$socket.client.emit('control', ['L2', false]);
      });

      gamepad.on('button13', () => {
      }).before('button13', () => {
        this.$socket.client.emit('control', ['LJ', true]);
      }).after( 'button13', () => {
        this.$socket.client.emit('control', ['LJ', false]);
      });

      gamepad.on('button14', () => {
      }).before('button14', () => {
        this.$socket.client.emit('control', ['RJ', true]);
      }).after( 'button14', () => {
        this.$socket.client.emit('control', ['RJ', false]);
      });

      gamepad.on('button11', () => {
      }).before('button11', () => {
        this.$socket.client.emit('control', ['START', true]);
      }).after( 'button11', () => {
        this.$socket.client.emit('control', ['START', false]);
      });

      gamepad.on('button10', () => {
      }).before('button10', () => {
        this.$socket.client.emit('control', ['SELECT', true]);
      }).after( 'button10', () => {
        this.$socket.client.emit('control', ['SELECT', false]);
      });

      gamepad.on('button12', () => {
      }).before('button12', () => {
        this.$socket.client.emit('control', ['MODE', true]);
      }).after( 'button12', () => {
        this.$socket.client.emit('control', ['MODE', false]);
      });
    });
  },
  sockets: {
    connect() {
      console.log('socket connected');
      this.socket = this.$socket.client;
    },
    customEmit(val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  }
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
