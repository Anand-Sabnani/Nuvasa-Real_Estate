import express from "express";
import {verifToken} from '../api/middleware/verifyToken.js'
import { addPosts, deletePost, getPost, getPosts, updatePost } from "../api/controllers/post.controller.js";
const router =express.Router()
router.get("/",getPosts)
router.get("/:id",getPost)
router.post("/",verifToken,addPosts)
router.put("/:id",verifToken,updatePost)
router.delete("/:id",verifToken,deletePost)

export default router