const express = require('express');
const classRouter = express.Router();

const {isAuth, isCoach} = require("../../middlewares/auth")

const {getClass, getOneClass, getOneClassByName, getOneClassByType,putClass,postClass ,deleteClass} = require("../controllers/class.controller")

classRouter.get("/",[isAuth], getClass);
classRouter.get("/:id",[isAuth], getOneClass)
classRouter.get("/findByName/:name",[isAuth], getOneClassByName)
classRouter.get("/findByType/:Type",[isAuth], getOneClassByType)
classRouter.put("/modifyClass/:id",[isCoach], putClass)
classRouter.post("/newClass/",[isCoach], postClass)
classRouter.delete("/deleted/:id",[isCoach], deleteClass)

module.exports = classRouter;