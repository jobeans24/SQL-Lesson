const express = require('express');
// Import and require mysql2
const mysql = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
// initialize the PoolClient
const pool = new Pool(
  {
    host: 'localhost',
    // MySQL username,
    user: 'postgres',
    // MySQL password
    password: 'shvb7!',
    database: 'inventory_db',
    port: 5432 // Default port for Postgres
  }
);

// connect to the Postgres database\
pool.connect((err, client, done) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Query database
pool.query('Select * from produce', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
