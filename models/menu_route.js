const express = require("express");
const router = express.Router();
const menuLIst  = require("./menu");

router.post("/", async(req, res)=>{
try{
    const food_Data = req.body;
    const new_menu = new menuLIst(food_Data);
    const response = await new_menu.save();
    console.log("food data saved");
    res.status(200).json(response);
}catch(err){
    console.log(err);
    res.status(500).json({err: "internal server error"});
}
});

router.get("/", async(req, res)=>{
    try{
        const food_Data = await menuLIst.find();
        console.log("data get normally");
        res.status(200).json(food_Data);
    }catch(err){
        console.log(err);
        res.status(500).json({err: "internal server error"});
    }
})

router.get("/:testType", async(req, res)=>{
  try{
    const testType = req.params.testType;
    if(testType == "sweet" || testType == "spicy" || testType == "tocxic"){
        const response = await menuLIst.find({test: testType});
        res.status(200).json(response);
    }else{
        res.status(404).json({404: "invalid testType"});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({err: "internal server error"});
  }
})
module.exports = router;