import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(v:string){
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
            }
        }
    },
    pdfUrl:{
        type:String,
        required:true
    },
    jobID:{
        type:String,
        required:true
    },
    mongoJobID:{
        ref:"Job",
        type:mongoose.Schema.Types.ObjectId
    }
})

export default mongoose.models.Applicant ||
    mongoose.model("Applicant",applicantSchema)