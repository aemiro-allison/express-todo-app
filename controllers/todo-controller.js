const Todo = require('../models/todo');
const errorHandler = require('../utility/error-handler');

const todoController = {};

todoController.index = (req, res) => {
  Todo.findAll()
    .then((todos) => {
      res.render('todos/todos-index', {
        message: 'got all todos',
        data: todos,
      });
    }).catch(errorHandler(req, res));
};

todoController.show = (req, res) => {
  Todo.findOne(req.params.id)
    .then((todo) => {
      res.render('todos/todos-single', {
        message: 'got the single todo',
        data: todo,
      });
    }).catch(errorHandler(req, res));
};

module.exports = todoController;
