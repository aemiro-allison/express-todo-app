const express = require('express');
const errorHandler = require('../utility/error-handler');
const todoController = require('../controllers/todo-controller');
const Todo = require('../models/todo');

const todoRoutes = express.Router();

todoRoutes.get('/', todoController.index);

todoRoutes.get('/add', (req, res) => res.render('todos/todos-add'));

todoRoutes.get('/edit/:id', (req, res) => {
  Todo.findOne(req.params.id)
    .then((todo) => {
      res.render('todos/todos-edit', {
        data: todo,
      });
    }).catch(errorHandler(req, res));
});

todoRoutes.get('/:id', todoController.show);


todoRoutes.post('/', todoController.create);
todoRoutes.put('/:id', todoController.update);
module.exports = todoRoutes;
