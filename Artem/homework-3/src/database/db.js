import {v4 as uuid} from 'uuid'

export const db = {
  users: [
    {
      _id: uuid(),
      userName: "User 1",
      password: "$2a$07$syoIWBdqzBWnxpVdZ6gAieQB84FOzcbyjOQ4AW4qaY4QDVUIakzT6",
      roles: ["USER"]
    },
    {
      _id: uuid(),
      userName: "Admin",
      password: "$2a$07$syoIWBdqzBWnxpVdZ6gAieQB84FOzcbyjOQ4AW4qaY4QDVUIakzT6",
      roles: ["USER", "ADMIN"]
    }
  ]
}