-- Created the burders DB
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "burgers" 
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(100) NOT NULL,
  devoured boolean,
  date TIMESTAMP,
  PRIMARY KEY(id)
);
