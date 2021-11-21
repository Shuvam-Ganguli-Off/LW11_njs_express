const express = require("express")
const app = express()
const mongoose = require("mongoose")
const stdschema = require("./schema")
const tempschema = require("./schema")
const url = "mongodb+srv://ShuvamG:Y47wrxQ5VT2ptGaF@cluster0.cdacp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>console.log("Connected to database in MongoDB Atlas"))
app.use(express.json())
app.post("/add-new-info",async(req,res)=>{
    const stdname = req.body.name;
    const stdreg = req.body.regno;
    const stdmarks = req.body.marks;

    try{
        const newobj = new stdschema(
            {
                name:stdname,
                regno:stdreg,
                marks:stdmarks
            }
        )
        const savedinfo = await newobj.save();
        res.json(
            {"message":"Student data saved","data":savedinfo}
        )
    }catch(err){
        res.json(err);
    }
})
app.use("/",(req,res)=>{
    res.json(
        {"message":"LW-11"}
    )
})

app.listen(3000,()=>console.log("Express Server Started"))