import jwt from "jsonwebtoken"
import { secret } from "../config.js"

export default function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1]   
    if (!token) {
      return res.status(403).json({ message: "User is not authorized" })
    }
    const decodedData = jwt.verify(token, secret)
    req.userId = decodedData.id
    next()
  } catch (e) {
    console.log(e)
    return res.status(403).json({ message: "User is not authorized" })
  }
}