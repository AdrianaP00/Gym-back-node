const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const serverless = require("serverless-http")

const classRouter = require("./src/api/routes/class.route")
const coachsRouter = require("./src/api/routes/coachs.route")
const usersRouter = require("./src/api/routes/users.route")

const {connect} = require("./src/utils/db")
connect()

const PORT = process.env.PORT;
const app = express();
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
app.use(`/.netlify/functions/api`, router)


app.listen(PORT,() => console.log(`escuchando en el puerto http://localhost:${PORT}`))
module.exports.handler = serverless(app)