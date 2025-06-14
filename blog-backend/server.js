const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tonystark@1',
    database: 'blog'
});

db.connect(err => {
    if (err) throw err;
    console.log('connected to mysql');
});

app.get('/posts', (req, res) => {
  db.query('SELECT * FROM posts', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  db.query('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, title, content });
  });
});

app.delete('/posts/:id', (req, res) => {
  db.query('DELETE FROM posts WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true });
  });
});

app.put('/posts/:id', (req, res) => {
  const { title, content } = req.body;
  db.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true });
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));