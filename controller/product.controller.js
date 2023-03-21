import { pro_storage } from "../multer/multer.js"
import Products from "../model/product.model"
import multer from "multer"
import fs from "fs"
import path from "path"

export const addProduct = (req, res) => {
    try {
        const upload = multer({ storage: pro_storage })
        const uploadData = upload.single("image")
        uploadData(req, res, async function (err) {
            if (err) {
                res.status(400).json({
                    message: err.message
                })
            }
            const { category, subCategory, name, description, releaseDate, duration, rating, cast } = req.body
            let data;

            if (req.file) {
                const image = req.file.filename
                data = new Products(
                    { category, subCategory, name, description, releaseDate, duration, rating, cast, image: image }
                )
            }
            else {
                data = new Products({ category, subCategory, name, description, releaseDate, duration, rating, cast })
            }
            const saveData = await data.save()
            if (saveData) {
                res.status(201).json({
                    data: saveData,
                    message: "successfully inserted"
                })
            } else {
                res.status(400).json({
                    message: "something went wrong"
                })
            }


        })

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}


export const getProduct = async (req, res) => {
    const { key, value } = req.query
    let str;

    console.log(key, typeof (value))
    try {
        const data = await Products.find().populate("category subCategory cast")






        if (data) {
            res.status(200).json({
                message: "fetched",
                data: data
            })
        } else {
            res.status(400).json({
                message: "something went wrong"
            })
        }

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        let img;
        const upload = multer({ storage: pro_storage })
        const uploadData = upload.single("image")
        uploadData(req, res, async function (err) {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            console.log(req.file)


            if (req.file) {
                const fin = await Products.findOne({ _id: req.params.ids })
                img = req.file.filename

                fs.unlink("uploads/" + "product.image/" + fin.image, function (err) {
                    if (err) {
                        res.status(400).json({

                            message: "something went wrong"
                        })
                    }
                })
            }





            const { _id, category, subCategory, name, description, releaseDate, duration, rating, cast } = req.body

            const updatee = await Products.updateOne({ _id: req.params.ids }, { $set: { category, subCategory, name, description, releaseDate, duration, rating, cast, image: img } })
            if (updatee) {
                res.status(200).json({
                    message: "successfully updated"
                })
            }


        })

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }



}





export const delProduct = async (req, res) => {
    try {





        const fin = await Products.findOne({ _id: req.params.ids })
        let img = fin.image

        fs.unlink("uploads/" + "product.image/" + img, function (err) {
            if (err) {
                res.status(400).json({

                    message: "something went wrong"
                })
            }
        })


        const del = await Products.deleteOne({ _id: req.params.ids })
        if (del) {
            res.status(200).json({
                message: "successfully deleted"
            })
        }

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }



}