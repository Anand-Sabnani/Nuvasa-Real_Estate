import express from "express";
import postRoute from "../routes/post.route.js"
import authRoute from "../routes/auth.route.js"
import testRoute from "../routes/test.route.js"
import userRoute from '../routes/user.route.js'
import cookieParser from "cookie-parser"
import cors from 'cors'
const app=express();
app.use(cookieParser())
app.use(express.json());
app.use(cors({origin: process.env.CLIENT_URL,credentials:true}))
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/test",testRoute)

app.listen(8800,()=>{
    console.log("server is running");
});
