/**
 * @swagger
 * /api/reviews/{:reviewId}:
 *   put:
 *     summary: Update a review by review ID
 *     tags: [Reviews]
 *     security:
 *       - BearerAuth: []  # Use the BearerAuth security scheme for authentication
 *     parameters:
 *       - in: path
 *         name: :reviewId
 *         required: true
 *         schema:
 *           type: string
 *         description: Dish ID to update the review for
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: Bearer token for authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: integer
 *                 format: int32
 *                 description: The updated rating for the dish
 *               review:
 *                 type: string
 *                 description: The updated review text
 *             required:
 *               - rating
 *               - review
 *     responses:
 *       200:
 *         description: The updated review
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: The status of the response
 *                 code:
 *                   type: integer
 *                   description: The HTTP status code
 *                 data:
 *                   $ref: '#/components/schemas/Review'
 *       400:
 *         description: Bad Request - Invalid input data
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       404:
 *         description: Not Found - Review or dish not found
 *       500:
 *         description: Internal Server Error
 */
