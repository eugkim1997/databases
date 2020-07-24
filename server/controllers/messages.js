var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {},

  // a function which handles posting a message to the database
  post: function (req, res) {
    console.log('req:', req.body);
    models.messages.create(req.body);
    res.sendStatus(200);
  }
};
