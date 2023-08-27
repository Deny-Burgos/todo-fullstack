const todosRouter = require('express').Router();
const User = require('../models/user');
const Todo = require('../models/todo');

todosRouter.get('/', async (request, response) => {
  const user = request.user;
  const todos = await Todo.find({ user: user.id });
  return response.status(200).json(todos);
});

todosRouter.post('/', async (request, response) => {
  const user = request.user;
  const { text } = request.body;
  console.log(text);

  return response.status(200).json(todos);
});

module.exports = todosRouter;