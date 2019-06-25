const express = require('express');
const cartController = require('../controllers/cartController');

const cartRouter = express.Router();

cartRouter.get('/cart', cartController.getAllCartItems);
cartRouter.post('/cart', cartController.createCartItem);

module.exports = cartRouter;
