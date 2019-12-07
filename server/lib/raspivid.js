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

    // Kill all children before (currently only one client at the time supported.).
    this.killChildren();
    
    // Define command mask.
    var msk = "raspivid -t 0 -o - -w %d -h %d -fps %d";
    
    // Apply data to mask.
    var cmd = util.format(msk, this.options.width, this.options.height, this.options.fps);
    
    // Display command.
    console.log(cmd);

    // Spawn/execute command.
    var streamer = spawn('raspivid', ['-t', '0', '-o', '-', '-w', this.options.width, '-h', this.options.height, '-fps', this.options.fps, '-pf', 'baseline']);
    
    // Listen to unexpected fails. 
    streamer.on("exit", function(code) {
      console.log("Failure", code);
      streamer
    });
    streamer.on("error", function(err) {
      console.log('Oh noez, teh errurz: ' + err);
    });

    // Update childs.
    childs.push(streamer);

    // Return stream
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
