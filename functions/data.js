const jsonServer = require('json-server');
const serverless = require('serverless-http');

const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3500;

server.use(middlewares);
server.use('/.netlify/functions/server', router);
server.use('/', router);
server.listen(port);

module.exports = server;
module.exports.handler = serverless(server);
