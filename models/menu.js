const  mongoose = require("mongoose");
const newList = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    test:{
        type: String,
        test: ["sweet", "spicy", "tocxic"],
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    sel:{
        type: String,
        required: true,
    }

})

const menuList = mongoose.model("food_menue", newList);
module.exports = menuList;