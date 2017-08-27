const express = require('express');
const todoController = require('../controllers/todo-controller');

const todoRoutes = express.Router();

todoRoutes.get('/', todoController.index);
todoRoutes.get('/:id', todoController.show);

module.exports = todoRoutes;
