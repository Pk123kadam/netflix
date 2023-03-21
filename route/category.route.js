import express from "express"
import {addCategory,delCategory,getCategory,updateCategory} from "../controller/category.controller"
const catRoute = express.Router()


catRoute.post("/categories/add",addCategory)
catRoute.delete("/categories/del/:ids",delCategory)
catRoute.patch("/categories/update/:ids",updateCategory)
catRoute.get("/categories",getCategory)

export default catRoute