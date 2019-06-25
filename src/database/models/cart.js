'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itemId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
  };
  return Cart;
};