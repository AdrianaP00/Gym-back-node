const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Coachs = require("../api/models/coachs.models");

const coachsArray = [
    {
        name: "Alvaro",
        age: 32,
        yearsOfExperiencie: 5,
        courses: ["64df8cadb94ecb4dc11c4ba6","64df8cadb94ecb4dc11c4ba7"],
        img:"https://i.pinimg.com/originals/5e/62/eb/5e62eb5b39173c9ffca948c473792391.jpg"
    },
    {
        name: "Adriana",
        age: 22,
        yearsOfExperiencie: 9,
        courses: ["64df8cadb94ecb4dc11c4ba7","64df8cadb94ecb4dc11c4ba5"],
        img:"https://i.pinimg.com/originals/73/4f/3f/734f3f480ca4f149d1bbf40abd80263d.jpg"
    },
    {
        name: "Antonio",
        age: 42,
        yearsOfExperiencie: 1,
        courses: ["64df8cadb94ecb4dc11c4ba7","64df8cadb94ecb4dc11c4ba6"],
        img:"https://i.pinimg.com/originals/63/d8/be/63d8be25b6b6fa73eb96d702a8e15e9b.jpg"

    },
  ];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allCoachs = await Coachs.find();
    if (allCoachs.length > 0) {
        await Coachs.collection.drop();
        console.log("collection delete");
    }
})
.catch((error)=> console.log("Retry",error))

.then(async ()=> {
    const coachsMap = coachsArray.map((course) => new Coachs(course));
    await Coachs.insertMany(coachsMap);
    console.log("ok 2");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())