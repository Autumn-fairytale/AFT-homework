import { addUser } from "./controllers/users/createUser/index.js";
import { getAll } from "./controllers/users/getAllUsers/index.js";
import { getById } from "./controllers/users/getById/index.js";

const invokeAction = async ({ action, id, name, login, password, status }) => {
  switch (action) {
    case "read":
      const allUsers = await getAll();
      return console.log("allUsers:", allUsers);
    case "getById":
      const user = await getById(id);
      return console.log("user:", user);
    case "createUser":
      const newUser = await addUser({ name, login, password, status });
      return console.log(newUser);
  }
};

invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "9" });
// invokeAction({
//   action: "createUser",
//   name: "Mykola",
//   login: "MK",
//   password: "123",
//   status: "active",
// });
