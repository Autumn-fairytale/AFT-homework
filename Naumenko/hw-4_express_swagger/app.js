import getAll from "./controllers/users/getAllUsers/index.js";
import { getById } from "./controllers/users/getById/index.js";

const invokeAction = async ({ action, id, name, login, password, status }) => {
  console.log(action);
  switch (action) {
    case "read":
      const allUsers = await getAll();
      return console.log("allUsers:", allUsers);
    case "getById":
      const user = await getById(id);
      console.log("user:", user);
  }
};

// invokeAction({ action: "read" });
invokeAction({ action: "getById", id: 9 });
