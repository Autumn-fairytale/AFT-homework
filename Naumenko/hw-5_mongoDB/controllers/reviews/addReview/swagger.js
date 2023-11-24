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
 *         id: "655751742149531565aa9ec8"
 *         owner: "6555c5df8104558256584cb7"
 *         dish: "654fe4de18f1f5f14f2e1cc1"
 *         rating: 3
 *         review: "Can be better"
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       description: Bearer token for authentication
 * tags:
 *   name: Reviews
 *   description: The reviews managing API
 * paths:
 *   /api/reviews:
 *     post:
 *       summary: Create a new review
 *       tags: [Reviews]
 *       security:
 *         - BearerAuth: []  # Use the BearerAuth security scheme for authentication
 *       parameters:
 *         - in: header
 *           name: Authorization
 *           required: true
 *           schema:
 *              type: string
 *           description: Bearer token for authentication
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *           description: Bearer token for authentication
 *       responses:
 *         201:
 *           description: The created review
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Review'
 */
