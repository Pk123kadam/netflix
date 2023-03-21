import mongoose from "mongoose";
const Schema = mongoose.Schema
const castSchema = new Schema({
    name:{type:String,requried:true},
    about:{type:String,requried:true},
    image:{type:String,default:'image.png'},
   
})

export default mongoose.model("casts",castSchema)