var models = require('../models');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    //console.log('req: ', req.body);
    models.users.create(req.body);
    res.sendStatus(200);
  }
};
