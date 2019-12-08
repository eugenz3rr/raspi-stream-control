const SerialPort = require('serialport');
const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimiter: '\r\n',
});
let port;

SerialPort.list().then(( value) => {
    console.log(value[0])
    port = new SerialPort(value[0].path, {
        baudRate: 9600,
      });
    parser.on('data', console.log)

    port.pipe(parser)
    port.on('open', () => console.log('Port open'))
    port.on('error', (error) => {
        console.log(error)
    })
});

let Listener = null;

class SocketListener {
    constructor(io) {
        Listener = this;
        this.sockets = {};
        this.io = io;
        this.io.on('connection', (socket) => {
            new Client(socket);
        });
    }

    getSockets() {
        return this.sockets;
    }
}

class Client {
    constructor(socket) {
        this.socket = socket;
        this.id = this.clone(this.socket.id);

        Listener.sockets[socket.id] = this; 

        console.log('Client connected.');

        // If client disconnects.
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('control', this.control);
    }

    disconnect() {
        try {
            this.socket.disconnect();
        } catch (error) {}

        // Remove old socket from public array.
        if (this.id in Listener.sockets) {
            delete Listener.sockets[this.id];
            console.log('Client disconnected.');
        }
    }

    control(data) {
        // Data shall always be the button (cammand) pressed.
        if (port) {
            port.write(data[0] + "#");
        }
    }

    clone(data) {
        return JSON.parse(JSON.stringify(data));
    }
}

module.exports = SocketListener;