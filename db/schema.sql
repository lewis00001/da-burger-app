DROP DATABASE IF EXISTS burgers_db;
create database burgers_db;
USE burgers_db;
CREATE TABLE burgers (
	id int auto_increment NOT NULL,
    burger_name VARCHAR(63) NOT NULL,
    devoured BOOL,
    primary key(id)
); 