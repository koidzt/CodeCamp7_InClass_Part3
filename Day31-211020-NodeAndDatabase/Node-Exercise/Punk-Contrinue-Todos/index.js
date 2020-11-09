const express = require('express');
const app = express();
const studentRoute = require('./routes/students');
const todoRoute = require('./routes/todos');
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/students', studentRoute);
app.use('/todos', todoRoute);

app.listen(5555, () => {
  console.log("Server is running st PORT 5555");
});