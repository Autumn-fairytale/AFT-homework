import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Отримати поточну директорію в ES6 модулі:

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("Поточна директорія:", __dirname);

const getAll = async () => {
  const data = await fs.readFile(`${__dirname}/users.json`, "utf-8");
  return JSON.parse(data, null, 2);
};

export default getAll;
