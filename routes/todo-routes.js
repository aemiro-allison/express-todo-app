const express = require('express');
const todoController = require('../controllers/todo-controller');

const todoRoutes = express.Router();

todoRoutes.get('/', todoController.index);

module.exports = todoRoutes;
