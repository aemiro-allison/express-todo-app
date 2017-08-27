const db = require('../db/config');

const Todo = {};
const tableName = 'todos';

Todo.findAll = () =>
  db.query(`SELECT * FROM ${tableName}`);

Todo.findOne = id =>
  db.oneOrNone(`SELECT * FROM ${tableName} WHERE id = $1`, [id]);

module.exports = Todo;
