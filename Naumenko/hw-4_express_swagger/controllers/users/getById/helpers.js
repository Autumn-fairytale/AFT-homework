import { users } from "../../../db/users.js";

export const getById = (id) => {
  const result = users.find((user) => user.id === id);
  return result || null;
};
