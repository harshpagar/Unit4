const express=require('express');

const galleryModel=require('../models/gallery.model')
const upload=require('../utils/file-upload')
const router=express.Router()
const fs=require('fs')
router.get("/",async(req,res)=>{
    try{
        const gallery_pics=await galleryModel.find({}).lean().exec()
        return res.status(201).json({data:gallery_pics})
    }catch(err){
        res.status(400).send(err)
    }
})

router.post("/",upload.array("pictures",3),async(req,res)=>{
    const photos = req.files.map((file) => file.path)
    try{
        const pics=await galleryModel.create(
            {
                user:req.body.user,
                pictures:photos
            })
        return res.status(201).json(pics)
    }catch(err){
        res.status(400).send(err)
    }
})


router.delete("/:id", async (req, res) => {
    try {
      var imgs = await galleryModel.findById(req.params.id);
  
      imgs.pictures.forEach((img, i) => {
        fs.unlink(img, () => {
            console.log("deleted")
          });
      });
      res.status(200).json({data:"Image Deleted Successfully"});
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  })

  module.exports=router;