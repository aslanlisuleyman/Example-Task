const express=require("express")
require ("dotenv").config()
const mongoose=require("mongoose")
const cors=require("cors")
const ExamRouter=require("./routes/Exam.routes")
const app=express()
const PORT=process.env.PORT || 3006
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Suleyman:suleyman123@suleyman.vyltqxp.mongodb.net/start").then(res=>{
    console.log("connected DB")
})

app.use("/exams",ExamRouter)
app.listen(PORT,()=>{
    console.log("app running")
})