const express = require("express");
const router = express.Router();
const USER = require("./Person");

router.post("/", async(req, res)=>{
    try{
        const user_Data = req.body;
        const new_Data = new USER(user_Data);
        const response = await new_Data.save();
        console.log("data save successfully");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({err: "internal server error"});
    }
});

router.get("/", async(req, res)=>{
    try{
        const get_Data = await USER.find();
        console.log("over all normaly");
        res.status(200).json(get_Data);
    }catch(err){
        console.log(err);
        res.status(500).json({err: "internal server error"});
    }
});

router.put("/:Pid", async(req, res)=>{
        try{
            const Pid = req.params.Pid;
            const upPdata = req.body;
            const response = await USER.findByIdAndUpdate(Pid, upPdata, {
                new: true,
                runValidators: true,
            })

            console.log("data updated");
            res.status(200).json(response);
        }catch(err){
            console.log(err);
            res.status(500).json({err: "internal server error"});
        }
})

router.delete("/:Did", async(req, res)=>{
    try{
        const Did = req.params.Did;

        const respons = await USER.findByIdAndDelete(Did);
        if(!respons){
            res.status(404).json({404: "Person not found"});
        }

        console.log("data delete successfully");
        res.status(200).json({message: "data delete successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({err: "internal server error"});
    }
})

router.get("/:workType", async(req, res)=>{
    try{
        const workType = req.params.workType;
        if(workType == "manager" || workType == "worker" || workType == "chep"){
            const response = await USER.find({work: workType});
            res.status(200).json(response);
        }else{
            res.status(404).json({err: "invalid work type"});
        }
    }catch(err){
        console.log(err);                                     
        res.status(500).json({err: "internal server error"});
    }
})

// comment added
module.exports = router;
