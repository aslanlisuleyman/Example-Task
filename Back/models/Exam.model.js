const mongoose=require("mongoose")

const Exam=mongoose.model("Exam", new mongoose.Schema({
    title:String,
    desc:String,
    price:Number
}))
module.exports={Exam}