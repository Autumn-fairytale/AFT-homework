import Joi from "joi";

const addReviewSchema = Joi.object({
  rating: Joi.number().min(0).max(5).required(),
  review: Joi.string().max(400).required(),
});

export default addReviewSchema;

// /************/ REVIEW ENDPOINTS
// Accessible by: @user, @chef - Users and chefs can post and update their reviews. Admins can delete reviews.

// **Option with separate collection for reviews.

// GET: /reviews/by-chef/:chefId - get all reviews related to a particular chef's dishes
// GET: /reviews/by-dish/:dishId - get all reviews of the dishes

// POST: /reviews - create a new review for a dish or a chef
// PATCH: /reviews/own/:reviewId - update user's own review
// DELETE: /reviews/own/:reviewId - d

// ADMIN

// GET: /reviews/ get all reviews
// GET: /reviews/:reviewId  get particular review
// DELETE: /reviews/:reviewId - delete comment
