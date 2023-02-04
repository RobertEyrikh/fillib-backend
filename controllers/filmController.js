import { validationResult } from "express-validator";
import ViewedFilms from "../models/ViewedFilms.js";
import User from "../models/User.js";

class filmController {
  async addFilmToViewed(req, res) {
    try {
      // User.on("index", function (err) {
      //   if (err) {
      //     console.error(err);
      //   }
      // });
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Movie adding error", errors });
      }
      const { filmId, rate, date, description } = req.body;
      const filmToAdd = new ViewedFilms({
        filmId,
        rate,
        date,
        description,
      });
      let user = await User.findOneAndUpdate(
        { _id: req.userId },
        { $push: { viewedFilms: filmToAdd } },
        { new: true }
      );
      return res.json(user);
    } catch (e) {
      res.status(400).json({ message: "Movie adding error" });
    }
  }
  async deleteFilmFromViewed(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Movie deleting error", errors });
      }
      const { filmId } = req.body;
      let user = await User.findOneAndUpdate(
        { _id: req.userId },
        { $pull: { viewedFilms: { filmId } } },
        { new: true }
      );
      return res.json(user);
    } catch (e) {
      res.status(400).json({ message: "Movie adding error" });
    }
  }
}

export default new filmController();
