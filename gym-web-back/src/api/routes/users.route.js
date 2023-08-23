const express = require('express');
const usersRouter = express.Router();
const {isAuth, isCoach} = require("../../middlewares/auth")
const {getUsers,register,login, userProfile, checkSession ,getOneUser,postUser,putUser, deleteUser} = require("../controllers/users.constroller")

usersRouter.get('/', [isCoach],getUsers);
usersRouter.get('/:id',[isAuth], getOneUser);
usersRouter.post("/newuser", postUser);
usersRouter.put("/modifyuser",[isAuth], putUser);
usersRouter.post("/register", register);
usersRouter.delete("/:id",[isCoach] ,deleteUser);
usersRouter.post("/login", login);
usersRouter.post('/profile', [isAuth], userProfile);
usersRouter.get("/checksession", checkSession);



module.exports = usersRouter;