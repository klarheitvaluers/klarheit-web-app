"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { User } from '@/types/user'
import { z }from "zod"
import axios from 'axios'

const ContactButton = ({user}:{user:User}) => {
    const UserSchema = z.object({
        name:z.string(),
        email:z.string().email(),
        phone:z.number(),
        address:z.string(),
        location:z.string()
    }).required()

    const sendEmail = async ()=>{
        //zod validation
        const result = UserSchema.safeParse(user)
        if(result.success){
            // send email with data to klarheit            
            //try-catch
            try{
                 // post request to backend /contact route
                await axios.post("/api/contact",{user:result.data})
                // console.log(data)
                toast.success("Email sent successfully.")
            }catch (error){
                console.log(error)
                toast.error("Email cannot be sent, try again later.")
            }
        }
        else{
            toast.error("Invalid User Inputs")
        }
        // select email based on location for now only one email
        // mailjet
    }

  return (
    <>
    <button className='bg-white text-black center p-3 mt-10 ml-8 mr-8 rounded-[36px]' onClick={sendEmail}>Contact Now!</button>
    <Toaster/>
    </>
  )
}

export default ContactButton