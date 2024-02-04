const mongoose  = require("mongoose");
const mongoDB_URL = "mongodb://localhost:27017/NEW_JS_DATABAS";

mongoose.connect(mongoDB_URL);
const db = mongoose.connection;
module.exports = db;

db.on("connected", ()=>{
    console.log("DATABAS is Connected with Express Server");
})