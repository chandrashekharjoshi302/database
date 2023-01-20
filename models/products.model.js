const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    title:String,
    image1:String,
    image2:String,
    image3:String,
    image4:String,
    oprice:String,
    gender:String,
    Category:String,
    dprice:String,
    code:String
   
})

const  ProductModel=mongoose.model("product",productSchema)

module.exports={
    ProductModel
}



