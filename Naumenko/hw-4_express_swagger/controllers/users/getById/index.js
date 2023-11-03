import getAll from "../getAllUsers/index.js";

export const getById = async (id) => {
  const users = await getAll();
  const result = users.find((user) => user.id === id);
  return result;
};
