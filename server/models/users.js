var db = require('../db/index.js');

module.exports = {
  getAll: function () {},
  create: function (user) {
    console.log(user);
    db.query("insert into users (name) values ('" + user.username + "');")
  }
};
