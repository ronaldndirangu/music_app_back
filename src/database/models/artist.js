'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Artist.associate = function(models) {
    // associations can be defined here
    Artist.hasMany(models.Album, {
      foreignKey: 'artistId',
      as: 'albums',
    });
  };
  return Artist;
};
