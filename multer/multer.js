import multer from "multer"
import fs from "fs"


export const subCategory_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("uploads/" + "subcategory.image")) {
      console.log("ko")

      fs.mkdirSync("uploads/" + "subcategory.image")
    }


    cb(null, "uploads/" + "subcategory.image")
  },
  filename: function (req, file, cb) {
    const name = file.originalname

    const arr = name.split(".")
    const ext = arr[arr.length - 1]
    arr.pop()

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, arr.join(".") + '-' + uniqueSuffix + "." + ext)

  }
})
export const singleSubCategory_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("uploads/" + "singleSubcategory.image")) {
      console.log("ko")

      fs.mkdirSync("uploads/" + "singleSubcategory.image")
    }


    cb(null, "uploads/" + "singleSubcategory.image")
  },
  filename: function (req, file, cb) {
    const name = file.originalname

    const arr = name.split(".")
    const ext = arr[arr.length - 1]
    arr.pop()

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, arr.join(".") + '-' + uniqueSuffix + "." + ext)

  }
})


export const pro_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (fs.existsSync("uploads/" + "product.image") == false) {

      fs.mkdirSync("uploads/" + "product.image")
    }


    cb(null, "uploads/" + "product.image")
  },
  filename: function (req, file, cb) {
    const name = file.originalname

    const arr = name.split(".")
    const ext = arr[arr.length - 1]
    arr.pop()

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, arr.join(".") + '-' + uniqueSuffix + "." + ext)

  }
})


export const cast_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (fs.existsSync("uploads/" + "cast.image") == false) {

      fs.mkdirSync("uploads/" + "cast.image")
    }


    cb(null, "uploads/" + "cast.image")
  },
  filename: function (req, file, cb) {
    const name = file.originalname

    const arr = name.split(".")
    const ext = arr[arr.length - 1]
    arr.pop()

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, arr.join(".") + '-' + uniqueSuffix + "." + ext)

  }
})