const express = require("express");
const app = express.json();
const jsonServer = require("son-server");
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = 8000;
server.use(middleware);
server.use(router);
server.listen(port);
