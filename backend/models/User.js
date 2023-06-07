const mongoose= require("mongoose")

const UserSchema = new  mongoose.Schema({
    username: {
    type:String,
    required:true,
    unique:true,
    },

    email:{
    type:String,
    required:true,
    unique:true,
    //match:here u can add regex later on  urself 
     },

    password:{
    type:String,
    required:true,
    min:6,      
    },
},  {timestamps:true} )// this  timestamp gives us updatedAt and createdAt) 

module.exports = mongoose.model("User", UserSchema )