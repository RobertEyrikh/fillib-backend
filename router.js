import Router from "express";
import authController from "./controllers/authController.js"
import { check } from "express-validator"
import authMiddleware from "./middlewares/authMiddleware.js";
import roleMiddleware from "./middlewares/roleMiddleware.js";
import filmController from "./controllers/filmController.js"

const router = new Router()

router.post('/registration', [
  check('username', "Username must not be empty").notEmpty(),
  check('password', "Password must be at least 4 characters and no more than 15 characters").isLength({ min: 4, max: 15 }),
  check('email', "enter a correct email").isEmail()
], authController.registration)
router.post('/login', authController.login)
router.get('/user', authMiddleware, authController.getUsers)
router.post('/addFilmToViewed', authMiddleware, [
  check('filmId', 'Empty id').notEmpty().isNumeric(),
  check('rate', 'You must rate the movie').isFloat({ min: 1, max: 10 }),
  check('date', 'You must enter the viewing date').isDate(),
  check('description', 'Minimum 4 characters maximum 100').optional().isLength({ min: 4, max: 100 }),
], filmController.addFilmToViewed)

export default router
