const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imgUrl:{
        type:String,
        required:[true,"Image url is required to create an post"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
},{timestamps:true})

const postModel = mongoose.model("posts",postSchema)

module.exports = postModel