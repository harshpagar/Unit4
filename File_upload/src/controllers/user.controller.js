const  express=require("express")
const userModel=require("../models/user.model")
const router=express.Router()
const upload=require('../utils/file-upload')
router.get("/",async(req,res)=>{
    try{
        const userdata=await userModel.find({}).lean().exec();
        return res.status(200).json({data:userdata})
    }catch(err){
        res.status(400).send(err)
    }
})

router.post("/",upload.single("profile_url"),async(req,res)=>{
    console.log("pots")
    console.log(req.body)
    try{
        
        const user=await userModel.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            profile_url:req.file.path
        })
        return res.status(201).json({data:user})

    }catch(err){
        res.status(400).send(err)
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const userdata=await userModel.findByIdAndDelete(id===req.params.id).lean().exec();
        return res.status(201).send({msg:"Data Deleted Successfully",userdata:userdata})
    }catch(err){
        res.status(400).send(err)
    }
})


module.exports=router;