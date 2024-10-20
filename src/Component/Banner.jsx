import React from 'react';
import Image from 'next/image';
import rayhan from "../../assets/images/rayhan.png"
import styles from "./main.module.css"

const Banner = (props) => {
    return (
        <div className="relative bg-black h-[600px] flex justify-between w-screen lg:h-screen overflow-hidden">
            {/* bg-[url('../../assets/images/bgportfolio.jpg')] */}
            <div className='text-white mt-[150px] ml-[50px] lg:ml-[150px]'>
                <h1 className='text-3xl'>I'M RAYHAN PATWARY</h1>
                <h1 className='font-serif'>WEBDEVELOPER</h1>
            </div>
            <div className='overflow-hidden	'>
                <Image className='rounded-full -mt-4 mr-[250px]' src={rayhan}
                    width={350} height={350} />
            </div>
            <div className="custom-shape-divider-bottom-1729236209">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>            
            </div>
        </div>
    );
};

export default Banner;