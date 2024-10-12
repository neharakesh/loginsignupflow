import mongoose, { model } from 'mongoose'
const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    about:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String
    },
    coverPhoto:{
        type:String
    }

  })

  const User=mongoose.model("User",userSchema)

  export default User;




 
