const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = async (req, res, next) => {
    try {
      let token = req.header("Authorization");
      if (!token) {
        return res
          .status(400)
          .send({ success: false, message: "token not found" });
      }
      let tokenV = token.split(" ")[1];
      var decoded = jwt.verify(tokenV, process.env.JWTKEY);
      req.user = decoded;
      next();
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Crashed", message: error.message });
    }
  };
  
  module.exports = { verifyToken };