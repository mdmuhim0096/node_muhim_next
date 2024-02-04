const express = require("express");
const app = express();
const db = require("./db");
const router_1 = require("./models/P_Route");
const router_2 = require("./models/menu_route");
const bodyPaser = require("body-parser");
app.use(bodyPaser.json());

app.use("/person", router_1);
app.use("/food", router_2);

app.get("/", (req, res)=>{
    res.send("hello world");
})
const port = 4000;
app.listen(port, ()=>{
    console.log("This Server is Running");
})

