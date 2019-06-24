const Artist = require('../database/models').Artist;

module.exports = {
  createArtist: async(req, res) => {
    try {
      const { name } = req.body;
      const artist = await Artist.create({
        name
      });
      return res.status(201).json({
        message: 'Artist created successfully',
        artist
      })
    } catch (error) {
      return res.status(500).json({
        error: 'An error occured when trying to create the artist!'
      });
    }
  },
  getArtist: async (req, res) => {
    try {
      const { id } = req.params;
      const artist = await Artist.findOne({ where: { id }});
      if (!artist) return res.status(404).json({
        error: 'Artist not found!'
      });
      return res.status(200).json({
        message: 'Artist retrieved successfully!',
        artist
      });
    } catch (error) {
      return res.status(500).json({
        error: 'An error occured when trying to retrieved the artist!'
      });
    }
  },
  getAllArtists: async (req, res) => {
    try {
      const artists = await Artist.findAll();
      if (artists.length < 1) {
        return res.status(200).json({
          message: 'There are no artists currently'
        });
      }
      return res.status(200).json({
        message: 'Artists retrieved successfully!',
        artists
      });
    } catch(error) {
      return res.status(500).json({
        error: 'An error occured when trying to get your artists!'
      });
    }
  }
}