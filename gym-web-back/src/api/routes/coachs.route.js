const express = require('express');
const coachsRouter = express.Router();
const {isAuth, isCoach} = require("../../middlewares/auth")

const {getCoachs,getOneCoach,getCoachByClass, postCoach, putCoach, deleteCoach} = require("../controllers/coachs.constroller")

coachsRouter.get("/",[isAuth], getCoachs);
coachsRouter.get("/class/:id",[isAuth], getCoachByClass);
coachsRouter.get("/:id",[isAuth], getOneCoach);
coachsRouter.post("/",[isCoach], postCoach)
coachsRouter.put("/:id",[isCoach], putCoach)
coachsRouter.delete("/:id",[isCoach], deleteCoach)

module.exports = coachsRouter;