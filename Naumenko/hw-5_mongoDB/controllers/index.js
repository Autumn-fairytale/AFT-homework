import { login } from "./auth/login/index.js";
import { register } from "./auth/register/createUser.js";
import { getAllChefs } from "./chefs/getAllChefs.js";
import { getAllDishes } from "./dishes/getAllDishes.js";
import { addReview } from "./reviews/addReview/addReview.js";
import { deleteReviewById } from "./reviews/deleteReview/deleteReviewById.js";
import { getAllReviews } from "./reviews/getAllReviews/getAllReviews.js";
import { getReviewById } from "./reviews/getReviewById/getReviewById.js";
import { getReviewsByChefId } from "./reviews/getReviewsByChefId/getReviewsByChefId.js";
import { getReviewsByDishId } from "./reviews/getReviewsByDishId/getReviewsByDishId.js";
import { updateReviewById } from "./reviews/updateReviewById/updateReviewById.js";

import { addTask } from "./tasks/addTask/index.js";
// import { addUser } from "./users/createUser/index.js";
import { getUsers } from "./users/getAllUsers/index.js";
// import { getUserById } from "./users/getById/index.js";

export const controllers = (app) => {
  getUsers(app);
  // Мої контролери які треба вставити в проект
  getAllReviews(app);
  addReview(app);
  getReviewsByDishId(app);
  getReviewsByChefId(app);
  getReviewById(app);
  deleteReviewById(app);
  updateReviewById(app);
  // =============

  getAllDishes(app);
  getAllChefs(app);

  // addUser(app);
  // getUserById(app);

  register(app);
  login(app);
  addTask(app);
};
