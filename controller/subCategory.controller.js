import { subCategory_storage } from "../multer/multer.js"
import SubCategory from "../model/subCategory.model."
import multer from "multer"
import fs from "fs"
import path from "path"
import subCatRoute from "../route/subCategory.route.js"


export const addsubCategory = async (req, res) => {
    try {
        const upload = multer({ storage: subCategory_storage })
        const uploadData = upload.array("images")

        uploadData(req, res, async function (err) {
            if (err) {
                return res.status(400).json({
                    message: err.message
                })
            }

            const { name, description } = req.body
            let data;

            if (req.files.length !== 0) {
                let image = []
                req.files.forEach((i) => {
                    image.push(i.filename)
                })



                data = new SubCategory({
                    name, description, images: image

                })
            }
            else {
                data = new SubCategory({
                    name, description

                })

            }
            const saveData = await data.save()
            if (saveData) {
                return res.status(201).json({
                    message: "inserted",
                    data: data

                })
            } else {
                return res.status(400).json({
                    message: "something went wrong"
                })
            }
        })






    } catch (err) {
        if (err) {
            return res.status(500).json({
                message: err.message
            })
        }
    }
}



export const getsubCategories = async (req, res) => {

    try {
        const data = await SubCategory.find()
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

// export const updatesubCategories = (req, res) => {
//     try {
//         let img = []
//         const upload = multer({ storage: subCategory_storage })
//         const uploadData = upload.array("images")
//         uploadData(req, res, async function (err) {
//             if (err) {
//                 return res.status(400).json({
//                     message: err
//                 })
//             }
//             console.log(req.files)


//             const fin = await SubCategory.findOne({ _id: req.params.ids })
//             fin.images.forEach((v) => {

//                 fs.unlink(path.join("uploads/subcategory.image", v), function (err) {
//                     if (err) {
//                         res.status(400).json({

//                             message: "something went wrong"
//                         })
//                     }
//                 })





//                 req.files.filename.forEach((v) => {
//                     img.push(v)
//                 })
//                 console.log(img)

//             })

//             const { _id, name, description } = req.body

//             const updatee = await SubCategory.updateOne({ _id: req.params.ids }, { $set: { name, description, images: img } })
//             if (updatee) {
//                 res.status(200).json({
//                     message: "successfully updated"
//                 })
//             }


//         })

//     } catch (err) {
//         res.status(500).json({
//             message: err.message
//         })
//     }

// }

export const updatesubCategories = async (req, res) => {
    try {
        let upd;

        const upload = multer({ storage: subCategory_storage })
        const uploadData = upload.array("images")
        uploadData(req, res, async function (err) {
            if (err) {
                return res.status(400).json({
                    message: err.message
                })
            }
            console.log(req.files.filename)
            const { name, description } = req.body
            if (req.files.length !== 0) {
                let img = []
                const data = await SubCategory.findOne({ _id: req.params.ids })
                data.images.forEach((v) => {
                    fs.unlink("uploads/" + "subcategory.image/" + v, function (err) {
                        if (err) {
                            res.status(400).json({
                                message: "something went wrong"
                            })
                        }
                    })
                })
                req.files.forEach((v) => {
                    img.push(v.filename)
                })



                upd = await SubCategory.updateOne({ _id: req.params.ids }, { $set: { name, description, images: img } })
            } else {

                upd = await SubCategory.updateOne({ _id: req.params.ids }, { $set: { name, description } })

            }

            if (upd) {
                res.status(200).json({
                    data: upd,
                    message: "successfully updated"
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

export const deletesubCategories = async (req, res) => {

    try {





        const fin = await SubCategory.findOne({ _id: req.params.ids })
        fin.images.forEach((v) => {

            fs.unlink("uploads/" + "subcategory.image/" + v, function (err) {
                if (err) {
                    res.status(400).json({

                        message: "something went wrong"
                    })
                }
            })
        })




        const del = await SubCategory.deleteOne({ _id: req.params.ids })
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