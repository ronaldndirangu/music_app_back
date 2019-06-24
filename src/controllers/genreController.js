const Genre = require('../database/models').Genre;

module.exports = {
  createGenre: async(req, res) => {
    try {
      const { name } = req.body;
      const genre = await Genre.create({
        name
      });
      return res.status(201).json({
        message: 'Genre created successfully',
        genre
      })
    } catch (error) {
      return res.status(500).json({
        error: 'An error occured when trying to create the genre!'
      });
    }
  },
  updateGenre: async(req, res) => {
    try {
      const { id } = req.params;
      const updatedGenre = await Genre.update(
        {...req.body},
        { 
          returning: true,
          where: { id }
        }
      );
      if (updatedGenre[0] === 0) return res.status(404).json({
        error: 'Genre not found!'
      });
      return res.status(201).json({
        message: 'Genre updated successfully!',
        genre: updatedGenre
      })
    } catch (error) {
      return res.status(500).json({
        error: 'An error occured when trying to update the genre!'
      });
    }
  },
  getGenre: async (req, res) => {
    try {
      const { id } = req.params;
      const genre = await Genre.findOne({ where: { id }});
      if (!genre) return res.status(404).json({
        error: 'Genre not found!'
      });
      return res.status(200).json({
        message: 'Genre retrieved successfully!',
        genre
      });
    } catch (error) {
      return res.status(500).json({
        error: 'An error occured when trying to retrieved the genre!'
      });
    }
  },
  deleteGenre: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedGenre = await Genre.destroy({ returning: true, where: { id }})
      if (!deletedGenre) return res.status(404).json({
        error: 'Genre not found!'
      });
      return res.status(200).json({
        message: 'Genre delete successfully!',
        deletedGenre
      });
    } catch (error) {
      return res.status(500).json({
        error: 'An error occured when trying to delete the genre!'
      });
    }
  },
  getAllGenres: async (req, res) => {
    try {
      const genres = await Genre.findAll();
      if (genres.length < 1) {
        return res.status(200).json({
          message: 'There are no genres currently'
        });
      }
      return res.status(200).json({
        message: 'Genres retrieved successfully!',
        genres
      });
    } catch(error) {
      console.log(error)
      return res.status(500).json({
        error: 'An error occured when trying to get your genres!'
      });
    }
  }
}