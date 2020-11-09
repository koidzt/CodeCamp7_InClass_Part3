const express = require('express');
const fs = require('fs');

const router = express.Router();
const products = JSON.parse(fs.readFileSync('./products.json'));

const getProducts = (req, res) => {
  const searchName = req.query.search;

  if (searchName) {
    const filteredProducts = products.filter(el =>
      el.name.includes(searchName));
    return res.status(200).send(filteredProducts);
  }

  res.status(200).send(products);
  //send(products) คือการ response กลับไปตามค่าตัวแปรนั้นๆใช่ในที่นี้คือ array ของ object(array ที่เก็บ object ไว้)
  //send({ product: products }) คือการ response กลับไปตามค่าตัวแปรในรูปแบบของ object ทำให้ response ได้ทีละหลายตัว
  //เหมือน object ครอบไฟล์ produccts.json อีกที
};

const getProduct = (req, res) => {
  const id = +req.params.id;

  const product = products.filter(el => el.id === id);
  res.status(200).send({ product: product[0] });
};

const createProduct = (req, res) => {
  const newId = products[products.length - 1].id + 1;

  const newProduct = {
    id: newId,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
    totalSale: req.body.totalSale
  };
  products.push(newProduct);
  fs.writeFileSync('./products.json', JSON.stringify(products));
  res.status(201).send(products);
};

const updateProduct = (req, res) => {
  const id = +req.params.id;
  const idx = products.findIndex(el => el.id === id);

  if (idx === -1) {
    return res.status(404).send({ message: 'Invalid Id' });
  };

  products[idx] = {
    id: id,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
    totalSale: req.body.totalSale
  };
  fs.writeFileSync('./products.json', JSON.stringify(products));

  res.status(200).send({ product: products })
};

const deleteProduct = (req, res) => {
  const id = +req.params.id;
  const idx = products.findIndex(el => el.id === id);

  if (idx === -1) {
    return res.status(404).send({ message: 'Invalid Id' });
  };

  const newProducts = products.filter(el => el.id !== id);
  fs.writeFileSync('./products.json', JSON.stringify(newProducts));
  res.status(204).send();
};

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;