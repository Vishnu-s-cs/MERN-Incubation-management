const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        isRegistered:{type:Boolean,default:false},
        isBlocked:{type:Boolean,default:false}
    },{timestamps:true}
);
module.exports=mongoose.model("User",UserSchema);