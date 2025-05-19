 import express from "express";
import { shouldBeAdmin, shouldBeLoggedIn } from "../api/controllers/test.controller.js";
import { verifToken } from "../api/middleware/verifyToken.js";
 const router =express.Router()
 router.get("/should-be-logged-in",verifToken,shouldBeLoggedIn);
 router.get("/should-be-admin",shouldBeAdmin)

 export default router