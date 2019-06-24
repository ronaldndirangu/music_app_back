const express = require('express');
const albumController = require('../controllers/albumController')

const albumRouter = express.Router();

albumRouter.post('/albums', albumController.createAlbum);
albumRouter.get('/albums', albumController.getAllAlbums);
albumRouter.get('/albums/:id', albumController.getAlbum);

module.exports = albumRouter;
