import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import professional from "../../../assets/images/professional.jpg"



const About = (props) => {
    return (
            
        <div className=' flex gap-4 ml-4 mt-4 w-screen h-full lg:container w-screen h-full'>
            <Image className='rounded' src={professional} width={300} height={300}/>      
                <section className='py-8'>
                <div>
                <h1 className='text-3xl'>About Me</h1>
                <p className='mt-2'>Hi! I&apos;m Rayhan Patwary. A <span className='font-bold'>MERN stack</span> developer.I&apos;m expert in JS. Also I know basic NEXT.js.<span className='font-bold'>This website is created with Next.js</span>.I also got a good communication skill.I also love to solve problems. Currently Im pursuing a BBA in Marketing Major in Dhaka University. </p>
                </div>
                <div className='flex justify-between mt-4 w-3/4'>
                    <div>
                    <h1>Find Me:</h1>
                    </div>
                    <div>
                    <ul className='flex gap-4'>
                    <Link href={"https://www.facebook.com/sakib.alhassan.965/"}><li><FaFacebook /></li></Link>
                    <li><FaTwitter /></li>
                    <Link href={"https://www.linkedin.com/in/rayhan-patwary-7982ab183/"}><li><FaLinkedin /></li></Link>
                    <Link href={"https://github.com/Rayhan72-max"}><li><FaGithub /></li></Link>
                    </ul>
                    </div>
                </div>
                </section>
        </div>
    );
};

export default About;