import express from "express";
const router =express.Router()
router.get("/test",(req,res)=>{
    console.log("Router works!")
    res.send("yES I WORK")
})
router.post("/test",(req,res)=>{
    console.log("Router works!")
    res.send("yES I WORK")
})
router.put("/test",(req,res)=>{
    console.log("Router works!")
    res.send("yES I WORK")
})
router.delete("/test",(req,res)=>{
    console.log("Router works!")
    res.send("yES I WORK")
})
export default router