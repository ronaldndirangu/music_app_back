const Cart = require('../database/models').Cart;

module.exports = {
  createCartItem: async(req, res) => {
    try {
      const { item, type, itemId } = req.body;
      const cart = await Cart.create({
        item,
        type,
        itemId
      });
      return res.status(201).json({
        message: 'Cart item created successfully',
        cart
      })
    } catch (error) {
      return res.status(500).json({
        error: 'An error occured when trying to create the cart item!'
      });
    }
  },
  getAllCartItems: async(req, res) => {
    try {
      const cart = await Cart.findAll();
      if (cart.length < 1) {
        return res.status(200).json({
          message: 'There are no cart items currently'
        });
      }
      return res.status(200).json({
        message: 'Cart items retrieved successfully!',
        cart
      });
    } catch (error) {
      return res.status(500).json({
        error: 'An error occured when trying to get the cart items!'
      });
    }
  }
}