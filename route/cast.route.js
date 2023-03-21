import express from "express"
import {addCast,getCast,delCast,updateCast} from "../controller/cast.controll"
const castRoute = express.Router()


castRoute.post("/cast/add",addCast)
castRoute.get("/cast",getCast)

castRoute.delete("/cast/delete/:ids",delCast)
castRoute.patch("/cast/update/:ids",updateCast)
// catRoute.delete("/categories/del/:ids",delCategory)
// catRoute.get("/categories",getCategory)

export default castRoute