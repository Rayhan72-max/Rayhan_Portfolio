import { client } from "@/lib/connectDB"
import { NextResponse } from "next/server"


export const POST = async(request) =>{
    try{
    await client.connect()
    const newMessage = await request.json()
    console.log("user in the request",newMessage)
    const userCollection= client.db("My_Clients").collection("users");
    const resp = await userCollection.insertOne(newMessage)
    return NextResponse.json({message: "user created"})
    }
    catch(error){
        return NextResponse.json({message:"something went wrong"})
    }
}

export const GET = async(req,res)=>{
    try{
        await client.connect()
        
        
        const userCollection= client.db("My_Clients").collection("users");
        const resp = await userCollection.find().toArray()
        console.log("ALl IS well")
        return Response.json({resp})
        
        }
        catch(error){
            return NextResponse.json({message:"something went wrong here"})
        }
}