import { Schema, model } from "mongoose";

const ViewedFilms = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  }
})

export default model('ViewedFilms', ViewedFilms)