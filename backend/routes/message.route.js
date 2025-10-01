import express from "express";
const router=express.Router();
// import {register,login,logout} from "../api/controllers/auth.controller.js"
import {addMessage} from "../api/controllers/message.controller.js";
import {verifToken} from '../../backend/api/middleware/verifyToken.js'
router.post("/:chatId",verifToken,addMessage);   
// router.get);   
export default router;