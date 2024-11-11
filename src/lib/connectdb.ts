import mongoose from "mongoose";

export async function connectdb(){
    const url:string = process.env.MONGO_DB_CONNECTION_STRING as string
    try{
        await mongoose.connect(url)
    }catch(error){
        throw new Error("Couldn't connect to database")
    }
}