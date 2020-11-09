const express = require('express');
const todoController = require('./routes/todo');
const db = require('./models/index'); //'./models/index' ==='./models'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todoController);

app.listen(8000, () => {
  console.log("Server is running at 8000");
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database connected.");
}).catch(err => {
  console.log(err);
})