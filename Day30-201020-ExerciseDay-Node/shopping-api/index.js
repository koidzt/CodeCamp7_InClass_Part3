const express = require('express');
const productRouter = require('./routes/products')

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use('/products', productRouter);

const port = 7000;
app.listen(port, () => {
  console.log(`server starting on port ${port}`);
});