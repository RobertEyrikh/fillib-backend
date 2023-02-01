import { validationResult } from "express-validator";
import ViewedFilms from "../models/ViewedFilms.js";
import User from "../models/User.js";

class filmController {
  async addFilmToViewed(req, res) {
    try {
      User.on('index', function(err) {
        if (err) {
          console.error(err)
        }
      })
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Movie adding error", errors });
      }
      const { id, rate, date, description } = req.body;
      const filmToAdd = new ViewedFilms({
        id,
        rate,
        date,
        description,
      });
      let user = await User.findOneAndUpdate(
        { _id: req.userId },
        { $push: { viewedFilms: filmToAdd } }
      );
      return res.json(user);
    } catch (e) {
      res.status(400).json({ message: "Movie adding error" });
    }
  }
}

export default new filmController();