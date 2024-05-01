DROP DATABASE IF EXISTS books_db;

-- TODO: What is the SQL code below doing?
-- Creates the "books_db" database
CREATE DATABASE books_db;

-- TODO: What is the SQL code below doing?
-- Connects to the "books_db" database
\c books_db;

-- TODO: What is the SQL code below doing?
-- Creates the "biographies" table
CREATE TABLE biographies (

  -- TODO: What is the SQL code below doing?
  -- Creates an "id" column that auto-increments
  id INTEGER NOT NULL,

  -- TODO: What is the SQL code below doing?
  -- Creates a "name" column that must be provided
  name VARCHAR(100) NOT NULL
);

