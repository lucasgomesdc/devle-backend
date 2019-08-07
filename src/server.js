const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect("mongodb+srv://lucas:77562@devle-database-f8sfa.mongodb.net/devle?retryWrites=true&w=majority", {
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
