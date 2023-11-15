import { login } from "./auth/login/index.js";
import { register } from "./auth/register/createUser.js";
import { addReview } from "./reviews/addReview/addReview.js";
import { getAllReviews } from "./reviews/getAllReviews/getAllReviews.js";
import { getReviewsByDishId } from "./reviews/getAllReviews/getReviewsById.js";

import { addTask } from "./tasks/addTask/index.js";
// import { addUser } from "./users/createUser/index.js";
import { getUsers } from "./users/getAllUsers/index.js";
// import { getUserById } from "./users/getById/index.js";

export const controllers = (app) => {
  getUsers(app);
  getAllReviews(app);
  addReview(app);
  getReviewsByDishId(app);
  // addUser(app);
  // getUserById(app);

  register(app);
  login(app);
  addTask(app);
};
