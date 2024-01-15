const {Exam} =require("../models/Exam.model")

const ExamController={
    getAll:async(req,res)=>{
        try{
            const exams=await Exam.find()
            res.status(200).send(exams)

        }
        catch(error){
            res.status(404).send("errorrr")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const target=await Exam.findById(id)
            res.status(200).send(target)
        }
        catch(error){
            res.status(404).send("errorrr")
        }
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await Exam.findByIdAndDelete(id)
            const Exams=await Exam.find({})
            res.send(Exams)
        }
        catch(error){
            res.status(404).send("errorrr")
        }
    },
    add:async(req,res)=>{
        try{
            const {title,price,desc}=req.body
            const newExam=new Exam({title,price,desc})
            await newExam.save()
            res.status(201).send("addd")
        }
        catch(error){
            res.status(404).send("errorrr")
        }
    },
    edit:async(req,res)=>{
        try{
            const {id}=req.params
            const {title,price,desc}=req.body
            await Exam.findByIdAndUpdate(id,{title,price,desc})
            res.status(201).send("addd edit")
        }
        catch(error){
            res.status(404).send("errorrr")
        }
    }
}
module.exports={ExamController}