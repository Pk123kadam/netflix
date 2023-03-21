
import mongoose from "mongoose";
import category from "../model/category.model"
import subCategory from "../model/subCategory.model."
import casts from "../model/cast.model"

const Schema = mongoose.Schema
const productSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId, ref: category
    },
    subCategory: {
        type: Schema.Types.ObjectId, ref: subCategory
    },
    name: { type: String, requried: true },
    image: { type: String, default: "image.png" },
    description: { type: String, requried: true },
    releaseDate: { type: Number, requried: true },
    duration: { type: Number, requried: true },
    rating: { type: Number, requried: true },
    cast: [{ type: Schema.Types.ObjectId, ref: casts }]






})

export default mongoose.model("products", productSchema)