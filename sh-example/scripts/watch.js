'use strict';
let chokidar = require('chokidar');
let child = require('child_process');
let path = require('path');

let projDirs = [
  path.resolve('./src')
];

let projectChild;
let compileChild;

function onData(data) {
  console.log(data);
}

function onError(err) {
  console.error(err.stack);
}

function build() {
  projectChild = child.spawn('npm', ['run', 'build'], {
    stdio: 'inherit'
  });
  projectChild.on('data', onData);
  projectChild.on('error', onError);
}

chokidar.watch(projDirs)
  .on('ready', build)
  .on('change', build);
