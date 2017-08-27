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

todoController.create = (req, res) => {
  const { title, category, description } = req.body;

  Todo.create({
    title,
    category,
    description,
  })
    .then(() => {
      res.status(200).redirect('/todos');
    }).catch(errorHandler(req, res));
};

todoController.update = (req, res) => {
  const { title, completion, category, description } = req.body;

  Todo.update({
    title,
    completion,
    category,
    description,
  }, req.params.id)
    .then(() => {
      res.status(200).redirect('/todos');
    }).catch(errorHandler(req, res));
};

module.exports = todoController;
