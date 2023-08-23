const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Class = require("../api/models/class.models");

const courseArray = [
    {
      name: "Pilates",
      duration: "120 min",
      class:  33,
      type: "strength training",
      img:"https://i.pinimg.com/originals/1e/7a/1a/1e7a1ab2a02490e9923ea6a3c5c73646.jpg"
    },
    {
      name: "Box",
      duration: "45 min",
      class:  22,
      type: "power training",
      img:"https://i.pinimg.com/564x/65/22/55/652255221dcccdb2e7476d7288775523.jpg"
    },
    {
      name: "natacion",
      duration: "90 min",
      class:  18,
      type: "all-oaround activity",
      img:"https://i.pinimg.com/originals/51/2b/0a/512b0ac1c5acc1f2f1e7a95851226de7.jpg"
    }
  ];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allClass = await Class.find();
    if (allClass.length > 0) {
        await Class.collection.drop();
        console.log("collection erase");
    }
})
.catch((error)=> console.log("Retry",error))

.then(async ()=> {
    const courseMap = courseArray.map((course) => new Class(course));
    await Class.insertMany(courseMap);
    console.log("ok 2");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())