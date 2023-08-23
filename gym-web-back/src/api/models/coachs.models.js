const mongoose = require("mongoose")

const Schema = mongoose.Schema
const coachSchema = new Schema({
    name: { type: String, requires: true},
    age: { type: Number, requires: true},
    yearsOfExperiencie: { type: Number, requires: true},
    courses: [{ type: Schema.ObjectId, required: true , ref: 'class'}],
    img: { type: String, required: true }
},{
    collection: "coachs"
}
)

const coach = mongoose.model("coachs", coachSchema)
module.exports = coach

