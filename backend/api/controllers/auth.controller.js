import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken" 
export const register=async(req,res)=>{
    const {username,email,password}=req.body
    try{

        //hash the password
        const hashedPassword= await bcrypt.hash(password,10);
        console.log(hashedPassword);
        //create a new user and save it into the database
        const newUser=await prisma.user.create({
            data:{
                username,
                email,
                password:hashedPassword,
            },
        });
        console.log(newUser);
        res.status(201).json({message:"User created successfully"});
    }catch(error)
    {   
        console.log(error)
       if (error.code === "P2002") {
      const duplicatedField = error.meta.target.join(", ");
      return res
        .status(409)
        .json({ message: `The following field(s) already exist: ${duplicatedField}` });
    }

    res.status(500).json({ message: "Failed to create user" });
  }
};
export const login=async(req,res)=>{
    const {username,password}=req.body;
  try{

      //check if user exists or not
      const user=await prisma.user.findUnique({
        where:{username}
      })
      if(!user)
        return res.status(401).json({message:"Invalid Credentials!"})
      //check for user password 
      const isPasswordValid=await bcrypt.compare(password,user.password);
      if(!isPasswordValid)
         return res.status(401).json({message:"Invalid Credentials!"})
      //IF PASSWORD IS CORRECT
      //GENERTAE A COOKIE TOKEN AND SEND TO THE USER
    //   res.setHeader("Set-Cookie","test="+"myValue").json("success") manually sending the  cookie
    const age=1000*60*60*24*7;  
   const token=jwt.sign({
    id:user.id,
    isAdmin:true
   },process.env.JWT_SECRET_KEY,
{expiresIn:age});
  
  const{password:userPassword,...userInfo}=user 

    res.cookie("token",token,{
        httpOnly:true,
        // secure:true;
      }).status(200).json(userInfo)

    }catch(err){
        console.log(first)
        res.status(500).json({message:"failed to login!"})
    }
};
export const logout=(req,res)=>{
   res.clearCookie("token").status(200).json({message:"Logout Successful"});
}