import express from "express"
import { addProduct, getProduct, updateProduct, delProduct } from "../controller/product.controller"
const proRoute = express.Router()


proRoute.post("/product/add", addProduct)
proRoute.delete("/product/delete/:ids", delProduct)

proRoute.get("/product", getProduct)


proRoute.patch("/product/update/:ids", updateProduct)

export default proRoute