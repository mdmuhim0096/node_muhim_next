
const  mongoose = require("mongoose");
const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    work:{
        type: String,
        required: true,
        wtype: ["manager", "worker", "chep"]
    },
    age:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    }
});

const person_model = mongoose.model("Muhim", User);
module.exports = person_model;