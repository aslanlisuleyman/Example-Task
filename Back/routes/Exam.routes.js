const express=require("express")
const router=express.Router()
const {ExamController}=require("../controller/Exam.controller")

router.get("/",ExamController.getAll)
router.get("/:id",ExamController.getById)
router.delete("/:id",ExamController.delete)
router.post("/",ExamController.add)
router.put("/:id",ExamController.edit)

module.exports=router