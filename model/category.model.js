import mongoose from "mongoose";
const Schema = mongoose.Schema
const categorySchema = new Schema({
    name:{type:String,requried:true},
    description:{type:String,requried:true},
   
})

export default mongoose.model("categories",categorySchema)