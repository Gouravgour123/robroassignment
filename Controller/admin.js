const { hashPass, comparePassword } =require ('../helper/bcrypt');
const { User } = require('../model/models');
const jwt = require('jsonwebtoken');
require('dotenv').config()


const createAdmin = async () => {
    try {
      const adminExists = await User.findOne({ role: 'Admin' });
      if (!adminExists) {
        const username = 'admin';
        const password = 'admin123';
        let hashPassword= await hashPass(password)
        await User.create({ username, password: hashPassword, role: 'Admin' });
      }
    } catch (error) {
      console.error('Error creating admin:', error);
    }
  };



const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username});
    // console.log(user)
        if (!user) {
            return res.status(401).send({ message: "admin not found"});
        }

        const matchedPassword = await comparePassword(password, user.password);

            if (!matchedPassword) {
              return res.status(409).send({ success: false, message: "wrong password" });
            }
          let token = jwt.sign({user:user},process.env.JWTKEY)
          await res.setHeader("token",token)
            res.status(200).send({ success: true, message: "Login Successfully", data: user, token:token })
          }

module.exports = {createAdmin,login}