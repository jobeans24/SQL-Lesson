DROP DATABASE IF EXISTS classlist_db;
CREATE DATABASE classlist_db;

\c classlist_db;

CREATE TABLE students (
  id SERIAL PRIMARY KEY, 
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  enrolled BOOLEAN NOT NULL
);
