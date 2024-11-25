import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    position:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    jobID:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})

export default mongoose.models.Job || 
mongoose.model("Job",JobSchema)
