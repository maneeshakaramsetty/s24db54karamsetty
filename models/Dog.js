const mongoose = require("mongoose")
const DogSchema = mongoose.Schema({
Dog_Type: String,
Name: String,
Age: Number,
Color: String
})
module.exports = mongoose.model("Dog",
DogSchema)