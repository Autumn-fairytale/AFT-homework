/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - _id
 *         - owner
 *         - dish
 *         - rating
 *         - review
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the review
 *         owner:
 *           type: string
 *           description: The id of the review owner
 *         dish:
 *           type: string
 *           description: The id of the reviewed dish
 *         rating:
 *           type: integer
 *           format: int32
 *           description: The rating given to the dish (integer value)
 *         review:
 *           type: string
 *           description: The review text
 *       example:
 *         _id: "655751742149531565aa9ec8"
 *         owner: "6555c5df8104558256584cb7"
 *         dish: "654fe4de18f1f5f14f2e1cc1"
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
 * /api/reviews:
 *   get:
 *     summary: Returns the list of all reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: The list of reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       201:
 *         description: The created review
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 */
