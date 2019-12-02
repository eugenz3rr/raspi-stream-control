"use strict";

const util      = require('util');
const spawn     = require('child_process').spawn;
const merge     = require('mout/object/merge');

const Server    = require('./_server');
let childs = [];

class RpiServer extends Server {

  constructor(server, opts) {
    super(server, merge({
      fps : 12,
    }, opts));
  }

  get_feed() {
    this.killChildren();
    var msk = "raspivid -t 0 -o - -w %d -h %d -fps %d";
    var cmd = util.format(msk, this.options.width, this.options.height, this.options.fps);
    console.log(cmd);
    var streamer = spawn('raspivid', ['-t', '0', '-o', '-', '-w', this.options.width, '-h', this.options.height, '-fps', this.options.fps, '-pf', 'baseline']);
    streamer.on("exit", function(code) {
      console.log("Failure", code);
      streamer
    });
    streamer.on("error", function(err) {
      console.log('Oh noez, teh errurz: ' + err);
    });
    childs.push(streamer);

    return streamer.stdout;
  }

  killChildren() {
    for(let i = 0; i < childs.length; i++){
       childs[childs.length -1].kill();
       childs.pop();
    }
 }

};



module.exports = RpiServer;
