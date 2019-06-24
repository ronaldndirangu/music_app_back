const express = require('express');
const artistController = require('../controllers/artistController')

const artistRouter = express.Router();

artistRouter.post('/artists', artistController.createArtist);
artistRouter.get('/artists', artistController.getAllArtists);
artistRouter.get('/artists/:id', artistController.getArtist);

module.exports = artistRouter;
