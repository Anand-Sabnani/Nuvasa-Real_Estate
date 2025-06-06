import prisma from '../lib/prisma.js'
export const getPosts=async(req,res)=>{
    try{
        const query=req.query;
        const posts =await prisma.post.findMany({
            where:{
                city:query.city||undefined,
                type:query.type||undefined,
                property:query.property||undefined,
                bedroom:parseInt(query.bedroom)||undefined,
                price:{
                    gte:parseInt(query.minPrice)||0,
                    lte:parseInt(query.maxPrice)||10000000,
                
            }},
        })
        // setTimeout(()=>{
            res.status(200).json(posts)
        // },1500);
        
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to get posts"})
    }
}
export const getPost=async(req,res)=>{
    const id=req.params.id
    try{
        const post=await prisma.post.findUnique({
            where:{id} ,
            include:{
                postDetail:true,
                user:{
                    select:{
                        username:true,
                        avatar:true
                    }
                }
            }
        })
        res.status(200).json(post)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to get post"})
    }
}
export const addPosts=async(req,res)=>{
    const body=req.body
    const tokenUserId=req.userId;
      console.log("🔍 postData", body.postData);
  console.log("🔍 postDetail", body.postDetail);
  console.log("🔐 userId", tokenUserId);
    try{
    const newPost=await prisma.post.create({
        data:{
            ...body.postData,
            userId:tokenUserId,
            postDetail:{
             create:body.postDetail,
            }
        }
    })
   res.status(200).json({ id: newPost.id });
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to create post"})
    }
}
export const updatePost=async(req,res)=>{
    try{

    }catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to update post"})
    }
}
export const deletePost=async(req,res)=>{
    const id=req.params.id
    const tokenUserId=req.userId
    try{
        const post =await prisma.post.findUnique({
            where:{id}
        })
        if(post.userId!=tokenUserId)
        {
            return res.status(403).json({message:"Not Authorized"})
        }
        await prisma.post.delete({
            where:{id}
        })
     res.status(200).json({message:"Post Deleted"})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to delete post"})
    }
}