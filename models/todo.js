const db = require('../db/config');

const Todo = {};
const tableName = 'todos';

Todo.findAll = () => db.query(`SELECT * FROM ${tableName}`);

module.exports = Todo;
