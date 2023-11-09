import { db } from '../database/db.js'
import {getUser} from "./helpers/getUser.js";


class UserController {
  async getAllUsers(req, res) {
    try {
      const {users} = db
      res.json(users)
    } catch (e) {
      console.log(e.message)
    }
  }

  async deleteUser(req, res) {
    try {
      const {userName} = req.body

      if (!getUser(userName)) {
        return res.status(404).json({message: `The user '${userName}' has been not found.`})
      } else {
        db.users = db.users.filter((user) => {
          if (user.userName !== userName) {
            return user
          }
        })

        console.log(`result: ${JSON.stringify(db)}`)
        res.status(204).json()
      }
    } catch (e) {
      console.log(e.message)
    }
  }

}

export const userController = new UserController()