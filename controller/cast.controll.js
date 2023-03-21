
import { cast_storage } from "../multer/multer"
import Cast from "../model/cast.model"
import multer from "multer"
import fs from "fs"
import path from "path"
export const addCast = (req, res) => {
    try {
        const upload = multer({ storage: cast_storage })
        const uploadData = upload.single("image")
        uploadData(req, res, async function (err) {
            if (err) {
                res.status(400).json({
                    message: err.message
                })
            }
            const { name, about } = req.body
            let data;

            if (req.file) {
                const image = req.file.filename
                data = new Cast(
                    { name, about, image: image }

                )
            }
            else {
                data = new Cast({ name, about })
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
export const getCast = async (req, res) => {
    try {

        const data = await Cast.find()
        if (data) {
            res.status(200).json({
                data: data,
                message: 'successfully fetched'
            })
        }
        else {
            res.status(400).json({
                message: "something went wrong"
            })
        }

    } catch (err) {
        if (err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}

export const delCast = async (req, res) => {

    try {


        const fin = await Cast.findOne({ _id: req.params.ids })
        let img = fin.image

        fs.unlink("uploads/" + "cast.image/" + img, function (err) {
            if (err) {
                res.status(400).json({

                    message: "something went wrong"
                })
            }
        })


        const del = await Cast.deleteOne({ _id: req.params.ids })
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

export const updateCast = async (req, res) => {
    try {
        const upload = multer({ storage: cast_storage })
        const uploadData = upload.single("image")
        uploadData(req, res, async function (err) {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }


            const fin = await Cast.findOne({ _id: req.params.ids })
            let img = fin.image
            if (req.file) {
                fs.unlink("uploads/" + "cast.image/" + img, function (err) {
                    if (err) {
                        res.status(400).json({

                            message: "something went wrong"
                        })
                    }
                })

                img = req.file.filename
                console.log(img)


            }
            const { name, about } = req.body

            const updatee = await Cast.updateOne({ _id: req.params.ids }, { $set: { name, about, image: img } })
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