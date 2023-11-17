/**
 * @swagger
 * /api/reviews/by-dish/{dishId}:
 *   get:
 *     summary: Get reviews by dish ID
 *     tags: [Reviews]
 *     security:
 *       - BearerAuth: []  # Use the BearerAuth security scheme for authentication
 *     parameters:
 *       - in: path
 *         name: dishId
 *         required: true
 *         schema:
 *           type: string
 *         description: Dish ID to get reviews for
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: Bearer token for authentication
 *     responses:
 *       200:
 *         description: A list of reviews for the specified dish
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
