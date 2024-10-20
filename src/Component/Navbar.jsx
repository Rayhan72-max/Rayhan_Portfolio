'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import logo from "../../assets/images/R.png"

const Navbar = (props) => {
    const pathname = usePathname();
    return (
            <nav className='bg-black text-white flex justify-around w-full py-4 lg:w-screen'>
                <Image height={100} width={100} alt='Rayhan' src={logo}></Image>
                <ul className='flex gap-2 lg:gap-6 mr-8'>
                <Link className={`hover:safelist link ${pathname === '/' ? 'text-green-500' : ''}`} href={'/'}><li>Home</li></Link>
                <Link className={`hover:uppercase link ${pathname === '/about' ? 'text-green-500' : ''}`} href='/about'><li>About</li></Link>
                <Link className={`hover:uppercase link ${pathname === '/portfolio' ? 'text-green-500' : ''}`} href={'/portfolio'}><li>Portfolio</li></Link>
                <Link className={`hover:uppercase link ${pathname === '/contact' ? 'text-green-500' : ''}`} href={'/contact'}><li>Contact</li></Link>
                
                </ul>
            </nav>
    
    );
};

export default Navbar;