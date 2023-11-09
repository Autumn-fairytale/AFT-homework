import {db} from "../../database/db.js";

export const getUser = (userName) => {
  let result = false
  db.users.forEach(user => {
    if (user.userName === userName) {
      result = {
        _id: user._id,
        userName: user.userName,
        password: user.password,
        roles: user.roles
      }
    }
  })
  return result
}