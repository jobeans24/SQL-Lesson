const express = require('express');
const {Pool} = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = new Pool(
  {
    host: 'localhost',
    user: 'postgres',
    password: 'CaptainCrunch89!',
    database: 'classlist_db',
    port: 5432
  } 
);

pool.connect((err, client, done) => {
  if (err) throw err;
  console.log('Connected to database');
}
);

pool.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
