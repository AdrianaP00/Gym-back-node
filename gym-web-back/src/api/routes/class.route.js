const express = require('express');
const classRouter = express.Router();

const {isAuth, isCoach} = require("../../middlewares/auth")

const {getClass, getOneClass, getOneClassByName, getOneClassByType,putClass,postClass ,deleteClass} = require("../controllers/class.controller")

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Class:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Class name
 *         duration:
 *           type: string
 *           description: Class duration
 *         class:
 *           type: number
 *           description: Class ID
 *         type:
 *           type: string
 *           description: Class type
 *         img:
 *           type: string
 *           description: Class image url
 *       required:
 *         - name
 *         - duration
 *         - class
 *         - type
 *         - img
 *       example:
 *          name: Pilates
 *          duration: 120 min
 *          class:  33
 *          type: strength training
 *          img: https://i.pinimg.com/originals/1e/7a/1a/1e7a1ab2a02490e9923ea6a3c5c73646.jpg
 */

/**
 * @swagger
 * /class:
 *   get:
 *     summary: Get all classes
 *     tags: [Class]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All classes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Class'
 *       500:
 *         description: Internal server error
 */
classRouter.get("/",[isAuth], getClass);

/**
 * @swagger
 * /class/{id}:
 *   get:
 *     summary: Obtain information about a specific class by ID
 *     tags: [Class]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Class ID
 *     responses:
 *       200:
 *         description: Obtain information about a specific class by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Class'
 *       500:
 *         description: Internal server error
 */
classRouter.get("/:id",[isAuth], getOneClass)

/**
 * @swagger
 * /class/findByName/{name}:
 *   get:
 *     summary: Obtain information about a specific class by name
 *     tags: [Class]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name
 *     responses:
 *       200:
 *         description: Obtain information about a specific class by name
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Class'
 *       500:
 *         description: Internal server error
 */
classRouter.get("/findByName/:name",[isAuth], getOneClassByName)

/**
 * @swagger
 * /class/findByType/{type}:
 *   get:
 *     summary: Obtain information about a specific class by type
 *     tags: [Class]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *         description: Class type
 *     responses:
 *       200:
 *         description: Obtain information about a specific class by type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Class'
 *       500:
 *         description: Internal server error
 */
classRouter.get("/findByType/:Type",[isAuth], getOneClassByType)

/**
 * @swagger
 * /class/newClass:
 *   post:
 *     summary: Create a new class
 *     tags: [Class]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: Created class
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Class'
 *       500:
 *         description: Internal server error
 */
classRouter.post("/newClass/",[isCoach], postClass)

/**
 * @swagger
 * /class/modifyClass/{id}:
 *   put:
 *     summary: Modify a specific class by ID
 *     tags: [Class]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Class'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Class id
 *     responses:
 *       200:
 *         description: Modified class
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Class'
 *       500:
 *         description: Internal server error
 */
classRouter.put("/modifyClass/:id",[isCoach], putClass)

/**
 * @swagger
 * /class/deleted/{id}:
 *   delete:
 *     summary: Delete a specific class by ID
 *     tags: [Class]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Class id
 *     responses:
 *       200:
 *         description: Class deleted
 *       404:
 *         description: Id not found
 *       500:
 *         description: Internal server error
 */
classRouter.delete("/deleted/:id",[isCoach], deleteClass)

module.exports = classRouter;