<template>
  <div id="app">
   
      <raspi-player></raspi-player>
   
  </div>
</template>

<script>
import Player from './Player'

export default {
  name: 'app',
  data: () => {
    return {
    }
  },
  components: {
    'raspi-player': Player,
  },
  mounted: () => {
  },
}
</script>

<style lang="scss">

</style>
