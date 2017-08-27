const Todo = require('../models/todo');
const errorHandler = require('../utility/error-handler');

const todoController = {};

todoController.index = (req, res) => {
  Todo.findAll()
    .then((todos) => {
      res.render('todos/todos-index.ejs', {
        message: 'got all todos',
        data: todos,
      });
    }).catch(errorHandler(req, res));
};

module.exports = todoController;
