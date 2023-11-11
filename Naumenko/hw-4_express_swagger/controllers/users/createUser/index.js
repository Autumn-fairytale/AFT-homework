import fs from "fs/promises";
import { nanoid } from "nanoid";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { getAll } from "../getAllUsers/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const parentDir = dirname(__dirname);
const usersPath = join(parentDir, "users.json");

export const addUser = async (data) => {
  const users = await getAll();
  const newUser = { id: nanoid(), ...data };
  users.push(newUser);
  await fs.writeFile(usersPath, JSON.stringify(users));
  return newUser;
};
