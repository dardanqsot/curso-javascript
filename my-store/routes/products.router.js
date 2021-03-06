const express = require('express');
const app = express();

const router = express.Router();

router.get('/nueva-ruta', (req, res) => {
  res.json([
    {
    name: "Product 1",
    price: 1000
    },
    {
      name: "Product 2",
      price: 1000
      }
  ]);
})

app.get('/products/:id', (req, res) => {
  const {id}= req.params.id;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {id}= req.params.id;
  res.json({
    categoryId,
    productId,
  });
})

module.exports = router;
