import { Schema, model } from "mongoose";

const User = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  viewedFilms: [
    {
      type: {
        id: {
          type: Number,
        },
        rate: {
          type: Number,
        },
        date: {
          type: String,
        },
        description: {
          type: String,
        },
      },
      ref: "ViewedFilms",
    },
  ],
  roles: [{ type: String, ref: "Role" }],
});

export default model("User", User);
