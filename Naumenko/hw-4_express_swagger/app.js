import getAll from "./users/index.js";

const invokeAction = async ({ action, id, name, login, password, status }) => {
  console.log(action);
  switch (action) {
    case "read":
      const allUsers = await getAll();
      return console.log("allUsers:", allUsers);
  }
};

invokeAction({ action: "read" });
