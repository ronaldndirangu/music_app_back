const express = require('express');
const genreController = require('../controllers/genreController')

const genreRouter = express.Router();

genreRouter.post('/genres', genreController.createGenre);
genreRouter.get('/genres', genreController.getAllGenres);
genreRouter.patch('/genres/:id', genreController.updateGenre);
genreRouter.get('/genres/:id', genreController.getGenre);
genreRouter.delete('/genres/:id', genreController.deleteGenre);

module.exports = genreRouter;
