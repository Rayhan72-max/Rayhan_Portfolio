"use client"
import React from 'react';

const Contact = (props) => {
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const newUser={
        name:e.target.name.value,
        email:e.target.email.value,
        message:e.target.message.value 
        }
        
        const resp=await fetch("http://localhost:3000/contact/api",{
            method:"POST",
            body:JSON.stringify(newUser),
            headers:{"content-type":"application/json"}
        })
        console.log(resp)
    }

    return (      
         <div className='ml-4 mt-8'>
            <h1 className='text-3xl border-b-4 border-slate-950 w-60'>Get in touch</h1> 
        <div className='flex justify-between gap-4 h-full w-screen lg:container'>
            <div className='mt-4'>
            <h1>S.S. Zahurul Haque Hall,Dhaka University</h1>
            <h1>Bangladesh</h1> 
            <h1>rayhanpatwary71@gmail.com</h1>
            <h1>01823728416</h1>
            </div>
            <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4 w-1/2 h-full overflow-hidden'>
                
                <input type="text" name='name' placeholder='Name' className='border-b-2 border-slate-950' />
                <input type="text" name='email' placeholder='Email' className='border-b-2 border-slate-950' />
                <textarea name='message' placeholder='Message Here' type="text" className='col-span-2 border-b-2 border-slate-950'/>
                
                <input className='col-span-2 bg-zinc-950 text-white p-4' type="submit" value={"Send Message"}></input>
            </form>
         </div>         
         </div>
    );
};

export default Contact;