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

Todo.update = (todo, id) =>
  db.one(`UPDATE ${tableName}
    SET
    title = $1,
    completion = $2,
    category = $3,
    description = $4
    WHERE id = $5
    RETURNING *`, [
      todo.title, todo.completion, todo.category, todo.description, id,
    ]);

module.exports = Todo;
