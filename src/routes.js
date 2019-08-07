const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.send(req.query.name);
});

routes.post('/devs', (req, res) => {
  return res.json({message: "Ok"})
})

module.exports = routes;