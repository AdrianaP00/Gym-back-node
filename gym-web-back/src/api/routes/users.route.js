const express = require('express');
const usersRouter = express.Router();
const {isAuth, isCoach} = require("../../middlewares/auth")
const {getUsers,register,login, userProfile, checkSession ,getOneUser,postUser,putUser, deleteUser} = require("../controllers/users.constroller")

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Users name
 *         age:
 *           type: number
 *           description: Users age
 *         email:
 *           type: string
 *           description: Users email
 *         password:
 *           type: string
 *           description: Users password
 *         courses:
 *           type: array
 *           items:
 *             type: string
 *           uniqueItems: true
 *           description: Users classes
 *         role:
 *           type: string
 *           description: Users roles
 *       required:
 *         - name
 *         - age
 *         - email
 *         - password
 *         - courses
 *         - role
 *       example:
 *         name: Jose
 *         age: 50
 *         email: Jose@diseñador.com
 *         password: Jose123
 *         courses: ["64df8cadb94ecb4dc11c4ba7","64df8cadb94ecb4dc11c4ba6"]
 *         role: coach
 *     UsersLogIn:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Users email
 *         password:
 *           type: string
 *           description: Users password
 *       required:
 *         - email
 *         - password
 *     UsersLogInRes:
 *       type: object
 *       properties:
 *         user:
 *           type: object
 *           $ref: '#/components/schemas/Users'
 *           description: Users object
 *         token:
 *           type: string
 *           description: Valid Bearer token
 *       required:
 *         - user
 *         - token
 *       example:
 *         user: 
 *           name: Jose
 *           age: 50
 *           email: Jose@diseñador.com
 *           password: Jose123
 *           courses: ["64df8cadb94ecb4dc11c4ba7","64df8cadb94ecb4dc11c4ba6"]
 *           role: coach
 *         token: Jose123
 */
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all Users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal server error
 */
usersRouter.get('/', [isCoach],getUsers);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtain information about a specific users by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Obtain information about a specific User by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal server error
 */
usersRouter.get('/:id',[isAuth], getOneUser);
/**
 * @swagger
 * /users/newuser:
 *   post:
 *     summary: Create a new Users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: Created Users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal server error
 */
usersRouter.post("/newuser", postUser);
/**
 * @swagger
 * /users/modifyuser/{id}:
 *   put:
 *     summary: Modify a specific User 
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Users'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Modified Users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal server error
 */
usersRouter.put("/modifyuser/:id",[isAuth], putUser);
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new Users
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Users'
 *           examples:
 *             Autorized:
 *               value:
 *                 name: Abel
 *                 age: 30
 *                 email: autorized@disenador.com
 *                 password: Autorized19!
 *                 courses: ["64df8cadb94ecb4dc11c4ba6","64df8cadb94ecb4dc11c4ba7"]
 *                 role: user
 *             Coach:
 *               value:
 *                 name: kain
 *                 age: 30
 *                 email: coach@disenador.com
 *                 password: Coach19!
 *                 courses: ["64df8cadb94ecb4dc11c4ba6","64df8cadb94ecb4dc11c4ba7"]
 *                 role: coach
 *     responses:
 *       200:
 *         description: Created Users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal server error
 */
usersRouter.post("/register", register);
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a specific Users by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Users ID
 *     responses:
 *       200:
 *         description: Users deleted
 *       404:
 *         description: Id not found
 *       500:
 *         description: Internal server error
 */
usersRouter.delete("/:id",[isCoach] ,deleteUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/UsersLogIn'
 *           examples:
 *             Autorized:
 *               value:
 *                 email: autorized@disenador.com
 *                 password: Autorized19!
 *             Coach:
 *               value:
 *                 email: coach@disenador.com
 *                 password: Coach19!
 *     responses:
 *       200:
 *         description: User logged
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/UsersLogInRes'
 *       500:
 *         description: Internal server error
 */
usersRouter.post("/login", login);
usersRouter.post('/profile', [isAuth], userProfile);
usersRouter.get("/checksession", checkSession);



module.exports = usersRouter;