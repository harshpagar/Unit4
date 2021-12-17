
const mongoose=require('mongoose')
const userModel = require('./user.model')

const gallerySchema=new mongoose.Schema({
    
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:userModel
    },
    pictures:[{
            type:String
        }]
},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("gallery",gallerySchema)