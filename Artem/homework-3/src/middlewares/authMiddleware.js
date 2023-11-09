import jwt from 'jsonwebtoken';
import {secret} from "../configs/config.js";

export const authMiddleware = (roles) => {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next()
    }

    try {
      let token
      if (typeof (req.headers.authorization) === 'string') {
        token = req.headers.authorization.split(' ')[1]
      }
      if (!token) {
        return res.status(401).json({message: 'The user is not authorised.'})
      }
      const {roles: userRoles} = jwt.verify(token, secret)
      let hasAccess = false
      userRoles.forEach(role => {
        if (roles.includes(role)) {
          hasAccess = true
        }
      })

      if(!hasAccess) {
        return res.status(401).json({message: `You don't have access for this action.`})
      }
      next()
    } catch (e) {
      console.log(e.message)
      return res.status(401).json({message: 'The user is not authorised.'})
    }
  }
}