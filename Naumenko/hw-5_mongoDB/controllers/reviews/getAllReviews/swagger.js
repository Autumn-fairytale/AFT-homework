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
 */
