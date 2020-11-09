const express = require('express');
const todoRouter = require('./routes/todos')

const app = express();

app.use(express.json());  //ทำการแปลง Request Body
app.use(express.urlencoded({ extended: false }));

app.use(express.static('./public/')); //static ใช้เพื่อกรณีที่เราต้องการอ้างชื่อไฟล์ คอมจะวิ่งไปหาไฟล์นี้ที่โฟล์เดอร์ที่ระบุไว้

app.use((req, res, next) => {
  // res.status(404).send({ message: `path not found on this server ` })
  // next(new Error('part not found'));
  throw new Error('Invalid Id');
})

app.use((req, res, next) => {
  console.log('Test Middleware');
  next();
})

app.use('/todos', todoRouter);

app.use((err, req, res, next) => {
  console.log(err.message);
})

const port = 8000;
app.listen(port, () => {
  console.log(`server starting on port ${port}`);
});