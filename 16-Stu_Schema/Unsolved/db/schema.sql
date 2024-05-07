-- Write your schema here --
DROP DATABASE IF EXISTS amazon_db;
CREATE DATABASE amazon_db;

\c amazon_db;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
   
    FOREIGN KEY (product_id) REFERENCES products(id)
    ON DELETE SET NULL
);

