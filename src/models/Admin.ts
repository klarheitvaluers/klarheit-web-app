import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    password:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        unique:true,
        required:true,
        validate:{
            validator:function(v:string){
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
            }
        }
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:true
    }
})

export default mongoose.models.Admin ||
  mongoose.model("Admin", AdminSchema);