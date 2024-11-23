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

        <div className='flex flex-col gap-[50px] mt-4 items-center h-full lg:flex-row justify-center'>
    
            { <div>
                <Image className='rounded' src={professional} width={250} height={350} />
            </div> }
{         <section className='w-1/2 lg:w-1/3' >
                <div>
                    <h1 className='text-3xl'>About Me</h1>
                    <p className='mt-2'>Hi! I&apos;m Rayhan Patwary, a passionate <span className='font-bold'>MERN stack developer</span> with expertise in <span className='font-bold'>Javascript</span> and a solid foundation in <span className='font-bold'>Next.js</span>.This website is built using Next.js to showcase my skills. Alongside development, I'm skilled in communication and love tackling complex problems. Currently, I'm pursuing a BBA with a Marketing major at <span className='font-bold'>Dhaka University</span>, blending my technical knowledge with business insights promising the best service.</p>
                </div>
                <div className='flex justify-between mt-4 w-full'>
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
            </section> }
        </div>
    );
};

export default About;