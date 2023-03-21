import express from "express"
import { addsubCategory, getsubCategories, updatesubCategories, deletesubCategories } from "../controller/subCategory.controller"
const subCatRoute = express.Router()


subCatRoute.post("/categories/subCategories/add", addsubCategory)

subCatRoute.get("/categories/subCategories", getsubCategories)
subCatRoute.patch("/categories/subCategories/update/:ids", updatesubCategories)
subCatRoute.delete("/categories/subCategories/delete/:ids", deletesubCategories)
// catRoute.delete("/categories/del/:ids",delCategory)
// catRoute.get("/categories",getCategory)

export default subCatRoute