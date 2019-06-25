# music_app_back
Basic music CRUD app.

## How to run the app
- Clone the repo `$git@github.com:ronaldndirangu/music_app_back.git`
- Cd into the root directory.
- Install the dependancies using `$yarn install`
- Add the env variable using a `.env` file in the root dir. They are only two with the keys `DATABASE_URL=` where you provide the URL for your database and the `PORT=` to set the desired port you wish to run the app on.
- Run `$yarn db:rollmigrate` to rollback and migrate the database.
- Start the server by running `$yarn start`

## Endpoints
Method | Endpoint | Task | Requires Auth
------- | ------------ | ------------- | -----------
GET | `/api/v1/genres` | View a list of all genres | No
GET | `/api/v1/albums` | View a list of all albums | No
GET | `/api/v1/artists` | View a list of all artists | No
GET | `/api/v1/songs` | View a list of all songs | No
GET | `/api/v1/cart` | View a list of all cart items | No
POST | `/api/v1/cart` | Post an item to the cart | No

## Notes
- I have other endpoints working but these are the main ones required and the ones working with the frontend app.
