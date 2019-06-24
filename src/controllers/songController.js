const Song = require('../database/models').Song;

module.exports = {
  createSong: async(req, res) => {
    try {
      const { title, albumId } = req.body;
      const song = await Song.create({
        title,
        albumId
      });
      return res.status(201).json({
        message: 'Song created successfully',
        song
      })
    } catch (error) {
      return res.status(500).json({
        error: 'An error occured when trying to create the song!'
      });
    }
  },
  getSong: async (req, res) => {
    try {
      const { id } = req.params;
      const song = await Song.findOne({ where: { id }});
      if (!song) return res.status(404).json({
        error: 'Song not found!'
      });
      return res.status(200).json({
        message: 'Song retrieved successfully!',
        song
      });
    } catch (error) {
      return res.status(500).json({
        error: 'An error occured when trying to retrieved the song!'
      });
    }
  },
  getAllSongs: async (req, res) => {
    try {
      const songs = await Song.findAll();
      if (songs.length < 1) {
        return res.status(200).json({
          message: 'There are no songs currently'
        });
      }
      return res.status(200).json({
        message: 'Songs retrieved successfully!',
        songs
      });
    } catch(error) {
      return res.status(500).json({
        error: 'An error occured when trying to get your songs!'
      });
    }
  }
}