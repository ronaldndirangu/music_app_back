'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.Genre, {
      foreignKey: 'genreId',
      onDelete: 'CASCADE'
    });
    Album.belongsTo(models.Artist, {
      foreignKey: 'artistId',
      onDelete: 'CASCADE'
    });
    Album.hasMany(models.Song, {
      foreignKey: 'albumId',
      as: 'songs'
    })
  };
  return Album;
};
