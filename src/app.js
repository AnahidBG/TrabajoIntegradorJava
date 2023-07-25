const express = require('express');
const app = express();
const products = require('./routes/products');

app.use =('/products', products);

app.listen(3000, () => console.log('Server corriendo en puerto 3000'));

