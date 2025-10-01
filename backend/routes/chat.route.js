import express from "express";
const router=express.Router();
// import {register,login,logout} from "../api/controllers/auth.controller.js"
import { getChats,getChat,addChat,readChat} from "../api/controllers/chat.controller.js";
import {verifToken} from '../../backend/api/middleware/verifyToken.js'
router.get("/",verifToken,getChats);   
router.get("/:id",verifToken,getChat);   
// router.get("/:id",verifToken,getUser); 
router.post("/",verifToken,addChat)
router.put("/read/:id",verifToken,readChat)

export default router;