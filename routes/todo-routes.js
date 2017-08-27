const express = require('express');
const errorHandler = require('../utility/error-handler');
const todoController = require('../controllers/todo-controller');
const Todo = require('../models/todo');

const todoRoutes = express.Router();

todoRoutes.get('/', todoController.index);

// render the add page
todoRoutes.get('/add', (req, res) => res.render('todos/todos-add'));
// render the edit page with the todo content.
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
todoRoutes.delete('/:id', todoController.delete);

module.exports = todoRoutes;
