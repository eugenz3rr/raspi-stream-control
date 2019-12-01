<template>
    <div class="raspi-stream">
        <canvas id="raspi-stream"></canvas>
        <v-btn outlined block @click="connect">START</v-btn>
    </div>
</template>

<script>
export default {
    name: 'Player',
    data: () => {
        return {
            uri: "ws://192.168.0.164:8080",
            wsavc: null,
        }
    },
    mounted: function () {
        this.wsavc = new WSAvcPlayer(document.getElementById('raspi-stream'), "webgl", 1, 3)
        console.log(this.wsavc);
        window.addEventListener('http-live-player-connected', (e) => {
            let { socket } = e.detail;
            this.play();
        });
    },
    methods: {
        connect: function () {
            this.wsavc.connect(this.uri);
        },
        play: function () {
            this.wsavc.playStream();
        },
    }
}
</script>

<style lang="scss">
    .raspi-stream {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
