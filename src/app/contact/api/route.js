import { client } from "@/lib/connectDB"

export const POST = async(request) =>{
    try{
    await client.connect()
    const newMessage = await request.json()
    console.log("user in the request",newMessage)
    const userCollection= client.db("My_Clients").collection("users");
    const resp = await userCollection.insertOne(newMessage)
    return Response.json({message: "user created"})
    }
    catch(error){
        return Response.json({message:"something went wrong"})
    }
}