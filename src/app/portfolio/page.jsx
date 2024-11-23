import React from 'react';

const Portfolio = (props) => {
    return (
        <div className='mt-[50px] ml-2'>
            
            <h1 className='text-3xl my-4 text-yellow-500'>My Projects</h1>
            <h2 className='font-bold'>CRUD Operation With Aladin:</h2>
            <p><span className='font-bold'> Live Link: </span><a href='https://aladin-c96ff.web.app/' className='underline hover:text-green-600' target='_blank'>https://aladin-c96ff.web.app/</a></p>
            <p><span className='font-bold'>Github Link: </span><a href='https://github.com/Rayhan72-max/Aladin' className='underline hover:text-green-600' target='_blank'>https://github.com/Rayhan72-max/Aladin</a></p>
            
            
        </div>
    );
};

export default Portfolio;