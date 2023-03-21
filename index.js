import mongoose from "mongoose";
import express from "express"
import bodyParser from "body-parser";
import catRoute from "./route/category.route"
import subCatRoute from "./route/subCategory.route"
import proRoute from "./route/product.route"
import castRoute from "./route/cast.route"


mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/netflix').then(() => console.log('Connected!'));


const app = express()
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(catRoute)
app.use(subCatRoute)
app.use(proRoute)

app.use(castRoute)
app.listen(6020, () => {
    console.log("connected to port 6080")
})  