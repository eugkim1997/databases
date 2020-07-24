var db = require('../db/index.js');

module.exports = {
  // accepts get request, respond to it...
  // get all existing messages in the database
  getAll: function () {}, // a function which produces all the messages
  // store those nessages that we gor from getAll into database
  create: function (message) { // a function which can be used to insert a message into the database
    db.query("INSERT INTO messages (Text, UserName, Room) VALUES ('" + message.message + "', '" + message.username + "', '" + message.roomname +"');");
    // db.query(`INSERT INTO messages (Text, UserName, Room) VALUES ('${message.message}', '1', '1');`);
  }
};


// keep track of state,
// insert...
// valus(_) (_)