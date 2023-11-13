/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - login
 *         - password
 *         - status
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The user's name
 *         login:
 *           type: string
 *           description: The user's login
 *         password:
 *           type: string
 *           description: The user's password
 *         status:
 *           type: string
 *           description: The user's status (e.g., active, inactive)
 *       example:
 *         id: уNvoW9QKeOp2P7lEhdfT
 *         name: Irina
 *         login: Ira
 *         password: 456
 *         status: active
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Returns the list of all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
