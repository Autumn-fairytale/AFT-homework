import jwt from 'jsonwebtoken'
import {secret} from "../../configs/config.js";

export const generateAccessToken = (id, roles) => {
  const payload = {id, roles}
  return jwt.sign(payload, secret, {expiresIn: '24h'})
}