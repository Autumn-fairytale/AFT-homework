import { users } from "../users.js";

export const set = (app) => {
  app.get("/api/users", (req, res) => {
    res.json(users);
  });
};

// ==============================

// import fs from "fs/promises";
// import { fileURLToPath } from "url";
// import { dirname, join } from "path";

// Робота з файлами

// Отримати поточну директорію в ES6 модулі:
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const parentDir = dirname(__dirname);

// ============================================

// const usersPath = join(parentDir, "users.json");
// console.log("Поточна директорія:", __dirname);

// export const getAll = async () => {
//   const data = await fs.readFile(usersPath);

//   return JSON.parse(data);
// };
