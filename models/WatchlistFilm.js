import { Schema, model } from "mongoose";

const watchlistFilm = new Schema({
  filmId: {
    type: Number,
    required: true,
    unique: true,
  },
})

export default model('WatchlistFilm', watchlistFilm)