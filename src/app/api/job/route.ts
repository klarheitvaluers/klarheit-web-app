import { connectdb } from "@/lib/connectdb";
import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request:NextRequest){
    const body = await request.json()
    const newjob = await body.newjob
    // zod validation 
    // add to database
    try{
        await connectdb()
        const jobAdded = new Job(newjob)
        await jobAdded.save()
        return NextResponse.json({message:"successfully job saved",status:200})
    }catch(error){
        console.log(error)
        return NextResponse.error()
    }
    // return response
    // error handle using try-catch
}

export async function GET (){
    console.log("inside")
    try{
        await connectdb()
        const jobs = await Job.find({})
        return NextResponse.json(jobs)
      }
      catch(error){
        console.log(error)
        return NextResponse.json({msg:"Couldn't fetch the jobs, try again later."},{status:500})
      }
}