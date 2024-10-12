import User from "../model/user.model.js"

export const getUser=async(req,res)=>{
    try{
         const {firstName,LastName,mobile,photo,coverPhoto,email,password}=req.body;
         const createdUser=new User({
            firstName,LastName,mobile,photo,coverPhoto,email,password
         })
         createdUser.save()
         res.status(201).json({message:"user created successfully"})
    }catch(error){
        console.log("error",error)
        res.status(500).json(error)
    }
}