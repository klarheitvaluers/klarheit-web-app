import { connectdb } from "@/lib/connectdb"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import User from "@/models/User"
import mailjet from 'node-mailjet'

const UserSchema = z.object({
    name:z.string(),
    email:z.string().email(),
    phone:z.number(),
    address:z.string()
}).required()

export async function POST (request:NextRequest){
    const body = await request.json()
    const user = await body.user 
    // zod validation
    const result = UserSchema.safeParse(user)
    if(!result.success){
        return NextResponse.json({message:"Invalid user inputs", status:400})
    }
    // put in database
    try{
        await connectdb();       
        const newuser = new User({...user,isattended:false})
        await newuser.save();
        // send mail via mailjet to location based email
        const mailjetInstance = mailjet.apiConnect(
            process.env.MJ_APIKEY_PUBLIC as string,
            process.env.MJ_APIKEY_PRIVATE as string
          );
        
        const result = await mailjetInstance.post('send', { version: 'v3.1' }).request({
            Messages: [
              {
                From: {
                  Email: "klarheitvaluers24@gmail.com",
                  Name: "Enquiry",
                },
                To: [
                  {
                    // location based office email has to given as 'to' address
                    Email: "rakshithapatel0807@gmail.com",
                    Name: "Klarheit Team",
                  },
                ],
                Subject: 'Contacting for property valuation',
                TextPart: 'Received a query from a customer',
                HTMLPart:
                  `<h3>Dear Klarheit Valuers team, a new enquiry has come from a customer with details as follows:<br></br>Name:${user.name},<br></br> Phone:${user.phone}, <br></br> Address:${user.address}, <br></br>Email:${user.email}<br></br><br></br>Thank you.</h3>`,
              },
            ],
          })
        console.log(result.body)
        return NextResponse.json({message:"successfully data saved",status:200})
    }catch(error){
        console.log(error)
        return NextResponse.error()
    }    
}