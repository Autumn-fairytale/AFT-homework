import {db} from '../database/db.js'
import {v4 as uuid} from 'uuid'
import bcrypt from 'bcryptjs'
import {validationResult} from "express-validator";
import {generateAccessToken} from "./helpers/generateAccessToken.js";
import {getUser} from "./helpers/getUser.js";

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({message: 'Registration error', errors})
      }
      const {userName, password} = req.body

      if (getUser(userName)) {
        return res.status(400).json({message: 'User with such userName is already existing.'})
      } else {
        const hashPassword = bcrypt.hashSync(password, 7)

        const newUser = {
          _id: uuid(),
          userName,
          password: hashPassword,
          roles: ['USER']
        }

        db.users.push(newUser)
        return res.status(201).json({message: `User '${newUser.userName}' was created successfully.`})
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  async login(req, res) {
    try {
      const {userName, password} = req.body
const user = getUser(userName)
      if (!user) {
        return res.status(404).json({message: `The user '${userName}' has been not found.`})
      }
      const validPassword = bcrypt.compareSync(password, user.password)
      if (!validPassword) {
        return res.status(400).json({message: `The entered password is wrong.`})
      }
      const token = generateAccessToken(user._id, user.roles)
      return res.json({token})
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const authController = new AuthController()