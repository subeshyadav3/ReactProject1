import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white text-center p-4   w-full flex justify-center gap-10">
            
            <div className='flex justify-center flex-col '>
            <Link to='/projects' className=" hover:text-orange-600">Projects</Link>
            <Link to='/contact' className=" hover:text-orange-600">Contact</Link>
                
            </div>
            <div className='flex justify-center flex-col '>
            <Link to='/projects' className=" hover:text-orange-600">Projects</Link>
            <Link to='/contact' className=" hover:text-orange-600">Contact</Link>
            </div>
        </footer>
    ); 
}

export default Footer;
