CREATE DATABASE IF NOT EXISTS eldorado;

CREATE TABLE IF NOT EXISTS Category(
    id PRIMARY KEY,
    name VARCHAR(128) NOT NULL
    
);

CREATE TABLE IF NOT EXISTS Device(
   id PRIMARY KEY,
   color VARCHAR(16) NOT NULL,
   partNumber INTEGER VARCHAR NOT NULL,
   category_id INTEGER NOT NULL,
   category FOREIGN KEY(category_id) REFERENCES category(id)
);
