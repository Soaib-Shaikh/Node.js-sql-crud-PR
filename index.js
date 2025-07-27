const express = require('express');
const app = express();
const port = process.env.port || 6969;
const db = require('./config/db');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/add', (req, res) => {
  const { email, password } = req.body;
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(sql, [email, password], (err) => {
    if (err) console.log(err);
    res.redirect('/');
  });
});

// VIEW DATA
app.get('/viewdata', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) throw err;
    res.render('viewdata', { users: result });
  });
});

// DELETE USER
app.get('/user/delete/:id', (req, res) => {
  db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.redirect('/viewdata');
  });
});

// EDIT USER
app.get('/user/edit/:id', (req, res) => {
  db.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, result) => {
    if (err) throw err;
    res.render('edit', { user: result[0] });
  });
});

app.post('/user/edit/:id', (req, res) => {
  const { email, password } = req.body;
  const sql = 'UPDATE users SET email = ?, password = ? WHERE id = ?';
  db.query(sql, [email, password, req.params.id], (err) => {
    if (err) throw err;
    res.redirect('/viewdata');
  });
});

// SEARCH BY EMAIL
app.post('/search', (req, res) => {
  const query = req.body.query; 
  const sql = 'SELECT * FROM users WHERE email LIKE ?';
  db.query(sql, [`%${query}%`], (err, result) => {
    if (err) throw err;
    res.render('viewdata', { users: result });
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
