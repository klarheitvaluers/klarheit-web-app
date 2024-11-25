import { connectdb } from "@/lib/connectdb";
import Admin from "@/models/Admin";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(request:NextRequest){
    // get the username and password from req.body
    const body = await request.json()
    const { username,password } =  await body.admin
    
    // zod validation for inputs

    // get the hashed password from database
    await connectdb()
    const admin = await Admin.find({})
    
    // password validation using bcrypt
    const result = await bcrypt.compare(password,admin[0].password)
    if(!result){
        return NextResponse.json({error:"Invalid username or password"},{status:403})
    }
    
    // successful login return token to admin dashboard
    const secret = process.env.JWT_SECRET as string
    const token = jwt.sign({username},secret)
    
    // return response -try-catch
    return NextResponse.json({token},{status:200})
}