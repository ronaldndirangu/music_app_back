const genreRouter = require('./genreRouter');
const artistRouter = require('./artistRouter');
const albumRouter = require('./albumRouter');
const songRouter = require('./songRouter');
const cartRouter = require('./cartRouter');

const apiPrefix = '/api/v1';

module.exports = (app) => {
  app.use(apiPrefix, genreRouter);
  app.use(apiPrefix, artistRouter);
  app.use(apiPrefix, albumRouter);
  app.use(apiPrefix, songRouter);
  app.use(apiPrefix, cartRouter);
}