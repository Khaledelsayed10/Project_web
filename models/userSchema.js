const mongoose=require("mongoose")
const Schema=mongoose.Schema

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"this email is exist"]
    },
    age:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"]
    },
});



const user=mongoose.model("user",userSchema);



module.exports=user;
