import  sqlite3  from "sqlite3";
import { wordsArray } from "./data";


const db = new sqlite3.Database('./db/hangman.db');
const placeholders = wordsArray.map(() => '(?,?,?)').join(',');
const sql = `INSERT INTO words(id, word, hasGuessed) VALUES ${placeholders}`;
const data = wordsArray.flatMap(obj => [obj.id, obj.word, obj.hasGuessed ? 1 : 0]);

db.run(sql, data, function (this: sqlite3.RunResult, err: Error | null) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Rows inserted ${this.changes}`);
})

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
});
