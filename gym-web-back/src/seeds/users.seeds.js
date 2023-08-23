const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Users = require("../api/models/users.models");

const usersArray = [
    {
        name: "Jose",
        age: 50,
        email: "Jose@diseñador.com",
        password: "Jose123",
        courses: ["64df8cadb94ecb4dc11c4ba7","64df8cadb94ecb4dc11c4ba6"],
        role: "coach"
    },
    {
        name: "Abel",
        age: 30,
        email: "Abel@huelva.com",
        password: "Abelino123",
        courses: ["64df8cadb94ecb4dc11c4ba6","64df8cadb94ecb4dc11c4ba7"],
        role: "user",
    },{
        name: "Dayana",
        age: 29,
        email: "Dayana@teacher.com",
        password: "Dayana123",
        courses: ["64df8cadb94ecb4dc11c4ba7","64df8cadb94ecb4dc11c4ba5"],
        role: "coach"
    },
  ];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allUsers = await Users.find();
    if (allUsers.length > 0) {
        await Users.collection.drop();
        console.log("collection delete");
    }
})
.catch((error)=> console.log("Retry",error))

.then(async ()=> {
    const usersMap = usersArray.map((user) => new Users(user));
    await Users.insertMany(usersMap);
    console.log("ok 2");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())