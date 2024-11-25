import cloudinary from "@/lib/cloudinaryConfig";
import { connectdb } from "@/lib/connectdb";
import Applicant from "@/models/Applicant";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const body = await request.json()
    const applicantData = await body.data
    console.log(applicantData)
    
    // input validation zod
    // pdf file size and format check

    // upload to cloudinary -- fix first click empty fileUrl bug
    // query in the url -- bug fix
    const result = await cloudinary.uploader.upload(applicantData.fileUrl,{
        resource_type:"raw"
    })
    console.log(result)

    // upload to database
    await connectdb()
    const newApplicant = new Applicant({
        name:applicantData.name,
        email:applicantData.email,
        pdfUrl:result.secure_url,
        jobID:applicantData.jobID
    })
    await newApplicant.save()
    // ref the applicant to the job applied
    // error handle - try catch
    
    return NextResponse.json({msg:"success"})
}

export async function GET(){
    try{
        await connectdb()
        const applicants = await Applicant.find({})
        return NextResponse.json(applicants)
      }
      catch{
        return NextResponse.json({msg:"Couldn't fetch the applicants, try again later."},{status:500})
      }
}