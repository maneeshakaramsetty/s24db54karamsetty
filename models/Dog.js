const mongoose = require("mongoose");

const DogSchema = mongoose.Schema({
    Dog_Type: String,
    Name: String,
    Age: { type: Number, min: 1, max: 10 },
    Color: { type: String, minlength: 10, maxlength: 1234 }
});

module.exports = mongoose.model("Dog", DogSchema);
