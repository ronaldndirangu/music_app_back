const Album = require('../database/models').Album;
const Song = require('../database/models').Song;

module.exports = {
  createAlbum: async(req, res) => {
    try {
      const { title, genreId, artistId } = req.body;
      const album = await Album.create({
        title,
        genreId,
        artistId
      });
      return res.status(201).json({
        message: 'Album created successfully',
        album
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        error: 'An error occured when trying to create the album!'
      });
    }
  },
  getAllAlbums: async(req, res) => {
    try {
      const albums = await Album.findAll();
      if (albums.length < 1) {
        return res.status(200).json({
          message: 'There are no albums currently'
        });
      }
      return res.status(200).json({
        message: 'Albums retrieved successfully!',
        albums
      });
    } catch (error) {
      return res.status(500).json({
        error: 'An error occured when trying to get the albums!'
      });
    }
  },
  getAlbum: async(req, res) => {
    try {
      const { id } = req.params;
      const album = await Album.findOne({ where: { id }, include: [{
        model: Song,
        as: 'songs',
      }]});
      if (!album) return res.status(404).json({
        error: 'Album not found!'
      });
      return res.status(200).json({
        message: 'Album retrieved successfully!',
        album
      });
    } catch (error) {
      return res.status(500).json({
        error: 'An error occured when trying to get the album!'
      });
    }
  }
}