const express = require('express');
const todoController = require('../controllers/todo-controller');

const todoRoutes = express.Router();

todoRoutes.get('/', todoController.index);
todoRoutes.get('/add', (req, res) => res.render('todos/todos-add'));
todoRoutes.get('/:id', todoController.show);

todoRoutes.post('/', todoController.create);
module.exports = todoRoutes;
