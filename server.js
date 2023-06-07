const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Tietokannan luonti jos sitä ei ole olemassa
let db = new sqlite3.Database('./words.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the words database.');
});


// Taulukon luonti jos sitä ei ole olemassa
db.run(`CREATE TABLE words {
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    word TEXT NOT NULL
    hasGuessed BOOLEAN NOT NULL DEFAULT 0
}`, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Created table words');
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
}

// GET /words
// Hae kaikki sanat tietokannasta
app.get('/words', (req, res) => {
  db.all('SELECT * FROM words', [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(rows);
  });
});

// Päivitä sana tietokannassa
app.put('/words/:id', (req, res) => {
  const id = req.params.id;
  const hasGuessed = req.body.hasGuessed;
    db.run('UPDATE words SET hasGuessed = ? WHERE id = ?', [hasGuessed, id], (err) => {
        if (err) {
            throw err;
        }
        res.send('Updated word');
    });
});


