import express from "express";
const router=express.Router();
// import {register,login,logout} from "../api/controllers/auth.controller.js"
import { deleteUser, getUser, getUsers, updateUser,savePost , profilePosts, getNotificationNumber} from "../api/controllers/user.controller.js";
import {verifToken} from '../../backend/api/middleware/verifyToken.js'
router.get("/",getUsers);   
// router.get("/:id",verifToken,getUser); 
router.put("/:id",verifToken,updateUser);
router.delete("/:id",verifToken,deleteUser);
router.post("/save",verifToken,savePost)
router.get("/profilePosts/:id",verifToken,profilePosts);
router.get("/notification",verifToken,getNotificationNumber);
export default router;