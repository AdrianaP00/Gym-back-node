const express = require('express');
const classRouter = express.Router();

const {isAuth, isCoach} = require("../../middlewares/auth")

const {getClass, getOneClass, getOneClassByName, getOneClassByType,putClass,postClass ,deleteClass} = require("../controllers/class.controller")
/**
 * @swagger
 * tags:
 *   name: Classes
 *   description: Endpoints to manage classes
 */

/**
 * @swagger
 * /class:
 *   get:
 *     summary: get all classes
 *     responses:
 *       200:
 *         description: all classes
 */
classRouter.get("/",[isAuth], getClass);

/**
 * @swagger
 * /class/{id}:
 *   get:
 *     summary: Obtain information about a specific class by ID
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
 *       404:
 *         description: Class not found
 */
classRouter.get("/:id",[isAuth], getOneClass)
/**
 * @swagger
 * /class/{name}:
 *   get:
 *     summary: Obtain information about a specific class by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: name
 *     responses:
 *       200:
 *         description: Obtain information about a specific class by name
 *       404:
 *         description: Class not found
 */
classRouter.get("/findByName/:name",[isAuth], getOneClassByName)
classRouter.get("/findByType/:Type",[isAuth], getOneClassByType)
classRouter.put("/modifyClass/:id",[isCoach], putClass)
classRouter.post("/newClass/",[isCoach], postClass)
classRouter.delete("/deleted/:id",[isCoach], deleteClass)

module.exports = classRouter;