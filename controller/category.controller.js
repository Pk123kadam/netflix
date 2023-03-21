
import Category from "../model/category.model"


export const addCategory = async(req,res)=>{
    try{
        const{name,description} = req.body
        const data = new Category({
            name,
            description

        })
        const saveData = await data.save()
        if(saveData){
            return res.status(201).json({
                message:"inserted",
                data:data

            })
        }else{
            return res.status(400).json({
                message:"something went wrong"
            })
        }

    }catch(err){
        if(err){
            return res.status(500).json({
                message:err.message
            })
        }
    }
}

export const delCategory = async(req,res)=>{
    try{
      const  del = await Category.deleteOne({_id:req.params.ids})
        if(del){
            return res.status(200).json({
                message:"deleted",
                data:del

            })
        }else{
            return res.status(400).json({
                message:"something went wrong"
            })
        }

    }catch(err){
        if(err){
            return res.status(500).json({
                message:err.message
            })
        }
    }
}

export const getCategory = async(req,res)=>{
    try{
      const  get = await Category.find()
        if(get){
            return res.status(200).json({
                message:"fetched",
                data:get

            })
        }else{
            return res.status(400).json({
                message:"something went wrong"
            })
        }

    }catch(err){
        if(err){
            return res.status(500).json({
                message:err.message
            })
        }
    }
}

export const updateCategory = async(req,res)=>{
    try{

        const {name,description} = req.body


        const upd = await Category.updateOne({_id:req.params.ids},{$set:{name,description}})
        console.log(upd)
        if(upd){
            res.status(200).json({
                data:upd,
                message:"successfully updated"
            })
        }else{
            res.status(400).json({
                message:"soomehting went wrong"
            })
        }





    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }

}