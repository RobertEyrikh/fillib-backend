import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = (req.headers.autorization || "").split(' ')[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, "secret")

      req.userId = decoded._id;
      next();
    } catch (e) {
      return res.status(403).json ({
        message: "Access denied"
      })
    }
  } else {
    return res.status(403).json({
      message: "Access denied"
    })
  }
}