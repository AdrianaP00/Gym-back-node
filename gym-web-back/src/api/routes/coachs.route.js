const express = require('express');
const coachsRouter = express.Router();
const {isAuth, isCoach} = require("../../middlewares/auth")

const {getCoachs,getOneCoach,getCoachByClass, postCoach, putCoach, deleteCoach} = require("../controllers/coachs.constroller")

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Coachs:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Coach name
 *         age:
 *           type: number
 *           description: Coach age
 *         yearsOfExperiencie:
 *           type: number
 *           description: Coach years of experiencie
 *         courses:
 *           type: array
 *           items:
 *             type: string
 *           uniqueItems: true
 *           description: Coach classes
 *         img:
 *           type: string
 *           description: Coach image url
 *       required:
 *         - name
 *         - age
 *         - yearsOfExperiencie
 *         - courses
 *         - img
 *       example:
 *          name: Alvaro
 *          age: 32
 *          yearsOfExperiencie: 5
 *          courses: ["64df8cadb94ecb4dc11c4ba6","64df8cadb94ecb4dc11c4ba7"]
 *          img: https://i.pinimg.com/originals/5e/62/eb/5e62eb5b39173c9ffca948c473792391.jpg
 */

/**
 * @swagger
 * /coachs:
 *   get:
 *     summary: Get all Coachs
 *     tags: [Coachs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All Coachs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Coachs'
 *       500:
 *         description: Internal server error
 */
coachsRouter.get("/",[isAuth], getCoachs);

/**
 * @swagger
 * /coachs/{id}:
 *   get:
 *     summary: Obtain information about a specific coach by ID
 *     tags: [Coachs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Coach ID
 *     responses:
 *       200:
 *         description: Obtain information about a specific coach by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Coachs'
 *       500:
 *         description: Internal server error
 */
coachsRouter.get("/:id",[isAuth], getOneCoach);
/**
 * @swagger
 * /coachs:
 *   post:
 *     summary: Create a new Coach
 *     tags: [Coachs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Coachs'
 *     responses:
 *       200:
 *         description: Created Coach
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Coachs'
 *       500:
 *         description: Internal server error
 */
coachsRouter.post("/",[isCoach], postCoach)
/**
 * @swagger
 * /coachs/{id}:
 *   put:
 *     summary: Modify a specific coach by ID
 *     tags: [Coachs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Coachs'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Coach ID
 *     responses:
 *       200:
 *         description: Modified Coach
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Coachs'
 *       500:
 *         description: Internal server error
 */
coachsRouter.put("/:id",[isCoach], putCoach)
/**
 * @swagger
 * /coachs/{id}:
 *   delete:
 *     summary: Delete a specific Coach by ID
 *     tags: [Coachs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Coach ID
 *     responses:
 *       200:
 *         description: Coach deleted
 *       404:
 *         description: Id not found
 *       500:
 *         description: Internal server error
 */
coachsRouter.delete("/:id",[isCoach], deleteCoach)

module.exports = coachsRouter;


