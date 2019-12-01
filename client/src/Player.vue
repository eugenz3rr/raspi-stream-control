<template>
    <div class="raspi-stream">
        <div>
            <canvas id="raspi-stream"></canvas>
        </div>
    </div>
</template>

<script>
import Helper from './main';

export default {
    name: 'Player',
    data: () => {
        return {
            Helper,
            uri: "ws://127.0.0.1:8081",
            _uri: "ws://192.168.0.164:8080",
            wsavc: null,
            ratio: {
                x: 0,
                y: 0
            }
        }
    },
    mounted: function () {
        this.ratio = this.screenRatio(16, 9, window.innerWidth);
        this.wsavc = new WSAvcPlayer(document.getElementById('raspi-stream'), "webgl", 1, 3)
        this.wsavc.connect(this.uri);

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

        // Calculate ratio by given width.
        screenRatio: function ( ratioX, ratioY, x) {
            return {
                x,
                y: x / ratioX * ratioY, 
            }
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
