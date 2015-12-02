'use strict';
let Hapi = require('hapi');
let Good = require('good');

let server = new Hapi.Server();
server.connection({ port: process.env.npm_package_config_port });

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('Hello, world!');
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: (request, reply) => {
    reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
  }
});

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, (err) => {
  if (err) {
    throw err; // something bad happened loading the plugin
  }

  server.start(() => {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});
