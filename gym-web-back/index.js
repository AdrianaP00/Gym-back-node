const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const path=require("path")
const classRouter = require("./src/api/routes/class.route")
const coachsRouter = require("./src/api/routes/coachs.route")
const usersRouter = require("./src/api/routes/users.route")

const {connect} = require("./src/utils/db")
connect()

const PORT = process.env.PORT;
const app = express();

const swaggerUI=require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Gym Api Documentation",
      version: "1.0.0"
    },
    server: [
      {
        url:"http://localhost:" + PORT
      }
    ]
  },
  apis: [`${path.join(__dirname, "./src/api/routes/*.js")}`]
}

app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use("/class", classRouter)
app.use("/coachs", coachsRouter)
app.use("/users", usersRouter)

app.use("/api-doc", express.static('node_modules/swagger-ui-dist/', {index: false}), swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerOptions)))

app.listen(PORT,() => console.log(`escuchando en el puerto http://localhost:${PORT}`))

module.exports = app