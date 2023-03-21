import mongoose from "mongoose";
const Schema = mongoose.Schema
const subCategorySchema = new Schema({
    name: { type: String, requried: true },
    description: { type: String, requried: true },
    images: [{ type: String, default: 'default.png' }]

})

export default mongoose.model("subCategories", subCategorySchema)