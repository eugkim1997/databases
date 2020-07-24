DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  ID INT primary key auto_increment,
  Name varchar(100)
);

CREATE TABLE users (
  ID INT primary key auto_increment,
  Name varchar(100)
);

CREATE TABLE messages (
    ID INT primary key auto_increment,
    Text varchar(255),
    UserName INT,
    TimePosted varchar(100),
    Room INT,
    FOREIGN KEY (UserName) REFERENCES users(ID),
    FOREIGN KEY (Room) REFERENCES rooms(ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

