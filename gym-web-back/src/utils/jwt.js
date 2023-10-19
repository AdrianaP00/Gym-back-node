const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const generateSign = (id) => {
    return jwt.sign({id},process.env.JWT_KEY,{expiresIn:"336h"});
}

const verifySign=(token) => {
    return jwt.verify(token, process.env.JWT_KEY)
}


module.exports= {generateSign,verifySign}