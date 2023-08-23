const mongoose = require("mongoose")

const Schema = mongoose.Schema

const classSchema = new Schema({
    name: { type: String, requires: true},
    duration: { type: String, requires: true},
    class: { type: Number, requires: true},
    type: { type: String, requires: true},
    img:{ type: String, requires: true}
},{
    collection: "class"
}
)

const Class = mongoose.model("class", classSchema)
module.exports = Class