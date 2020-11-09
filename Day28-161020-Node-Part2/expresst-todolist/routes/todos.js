const express = require('express');
const fs = require('fs');

const router = express.Router();

const todoLists = JSON.parse(fs.readFileSync('./mocks/todo.json'));

const validateId = (req, res, next) => {
  const id = +req.params.id;
  const idx = todoLists.findIndex(el => el.id === id);

  if (idx === -1) {
    return res.status(404).send({ message: 'Invalid Id' });
  };

  req.idx = idx;
  next();
}

const getTodos = (req, res) => {
  const searchTask = req.query.search;

  if (searchTask) {
    const filteredTodoLists = todoLists.filter(el =>
      el.task.includes(searchTask));
    return res.status(200).send(filteredTodoLists);
  }

  res.status(200).send(todoLists);

};

const getTodo = (req, res) => {
  const id = +req.params.id;

  const todo = todoLists.filter(el => el.id === id);
  res.status(200).send({ todo: todo[0] });
}

const createTodo = (req, res) => {
  const newId = todoLists.length > 0 ? todoLists[todoLists.length - 1].id + 1 : 0;
  const newTodoLists = { id: newId, task: req.body.task };
  todoLists.push(newTodoLists);
  fs.writeFileSync('./mocks/todo.json', JSON.stringify(todoLists));
  res.status(201).send({ todo: newTodoLists });
}

const updateTodo = (req, res) => {
  const id = +req.params.id;

  todoLists[+req.idx] = { id: id, task: req.body.task };

  fs.writeFileSync('./mocks/todo.json', JSON.stringify(todoLists));
  res.status(200).send({ todo: todoLists });
}

const deleteTodo = (req, res) => {
  const id = +req.params.id;

  const newTodoLists = todoLists.filter(el => el.id !== id);
  fs.writeFileSync('./mocks/todo.json', JSON.stringify(newTodoLists));
  res.status(204).send();
}

router.get('/', getTodos);
router.get('/:id', validateId, getTodo);
router.post('/', createTodo);
router.patch('/:id', validateId, updateTodo);
router.delete('/:id', validateId, deleteTodo);

module.exports = router;