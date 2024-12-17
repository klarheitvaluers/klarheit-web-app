import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from "jose"
 
export function middleware(request: NextRequest) {
   const authheader = request.headers.get("Authorization")
   console.log(authheader)
   if(!authheader || !authheader.startsWith("Bearer ")){
    return NextResponse.json({
      "message": "Token error"
    },{status:403})
   }
   
   const token = authheader.split(" ")[1]
   
   try{
    // verify token success
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    jwtVerify(token,secret)
    return NextResponse.next()
   }catch(error){
    
    return NextResponse.json({
      "message": "Token error"
    },{status:403})
   }
  }
 
export const config = {
  matcher: ["/api/validate"]
}