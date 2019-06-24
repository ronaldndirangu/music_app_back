const express = require('express');
const songController = require('../controllers/songController')

const songRouter = express.Router();

songRouter.post('/songs', songController.createSong);
songRouter.get('/songs', songController.getAllSongs);
songRouter.get('/songs/:id', songController.getSong);

module.exports = songRouter;
