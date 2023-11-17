/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - id
 *         - owner
 *         - dish
 *         - rating
 *         - review
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the review
 *         owner:
 *           type: string
 *           description: The id of the review owner
 *         dish:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: The name of the reviewed dish
 *             chef:
 *               type: string
 *               description: The id of the chef of the reviewed dish
 *           description: The reviewed dish details
 *         rating:
 *           type: integer
 *           format: int32
 *           description: The rating given to the dish (integer value)
 *         review:
 *           type: string
 *           description: The review text
 *       example:
 *         id: "655751742149531565aa9ec8"
 *         owner: "6555c5df8104558256584cb7"
 *         dish:
 *           name: "borsh"
 *           chef: "6555cdd6ba8d3fa1a8f11f99"
 *         rating: 3
 *         review: "Can be better"
 */

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: The reviews managing API
 */

/**
 * @swagger
 * /api/reviews/by-chef/{chefId}:
 *   get:
 *     summary: Get reviews by chef ID
 *     tags: [Reviews]
 *     security:
 *       - BearerAuth: []  # Use the BearerAuth security scheme for authentication
 *     parameters:
 *       - in: path
 *         name: chefId
 *         required: true
 *         schema:
 *           type: string
 *         description: Chef ID to get reviews for
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: Bearer token for authentication
 *     responses:
 *       200:
 *         description: A list of reviews for the specified chef
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       500:
 *         description: Internal Server Error
 */
