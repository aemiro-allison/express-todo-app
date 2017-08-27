const db = require('../db/config');

const Todo = {};
const tableName = 'todos';

Todo.findAll = () =>
  db.query(`SELECT * FROM ${tableName}`);

Todo.findOne = id =>
  db.oneOrNone(`SELECT * FROM ${tableName} WHERE id = $1`, [id]);

Todo.create = todo =>
  db.one(`INSERT INTO ${tableName}
    (title, category, description)
    VALUES
    ($1, $2, $3)
    RETURNING *`, [todo.title, todo.category, todo.description]);

module.exports = Todo;
