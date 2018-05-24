CREATE DATABASE burger_db;

USE DATABASE burger_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);