import users_list from "../db/users_list";

const login = (req, res, next) => {
  console.log(req.body);
  next();
};
export default login;
