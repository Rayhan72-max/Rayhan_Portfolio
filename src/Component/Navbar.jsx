'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import logo from "../../assets/images/R.png"
import "./main.module.css"

const Navbar = (props) => {
    const pathname = usePathname();
    return (
            <nav  className="sticky top-0 z-10 bg-black text-white flex justify-around w-full py-2 lg:w-screen">
                <Image className='fade' height={100} width={100} alt='Rayhan' src={logo}></Image>
                <ul className='flex gap-2 lg:gap-6 mr-8'>
                <Link className={`${pathname === '/' ? 'text-green-500' : ''}`} href={'/'}><li className='textup'>Home</li></Link>
                <Link className={`${pathname === '/about' ? 'text-green-500' : ''}`} href='/about'><li className='textup'>About</li></Link>
                <Link className={`${pathname === '/portfolio' ? 'text-green-500' : ''}`} href={'/portfolio'}><li className='textup'>Portfolio</li></Link>
                <Link className={`${pathname === '/contact' ? 'text-green-500' : ''}`} href={'/contact'}><li className='textup'>Contact</li></Link>
                
                </ul>
            </nav>
    
    );
};

export default Navbar;