import Router from "express";
import controller from "./authController.js"
import { check } from "express-validator"
import authMiddleware from "./middlewares/authMiddleware.js";
import roleMiddleware from "./middlewares/roleMiddleware.js";

const router = new Router()

router.post('/registration', [
  check('username', "Username must not be empty").notEmpty(),
  check('password', "Password must be at least 4 characters and no more than 15 characters").isLength({ min: 4, max: 15 }),
  check('email', "enter a correct email").isEmail()
], controller.registration)
router.post('/login', controller.login)
router.get('/user', authMiddleware, controller.getUsers)

export default router
