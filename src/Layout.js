import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function Layout() {
  return (
    <div>
      <nav className='bg-purple-300 flex h-10 justify-around text-black fixed w-full'>
      <div className='flex justify-center self-center '>
  



        <Link to="/" className=' hover:bg-purple-600 rounded-md p-2 '>Home</Link>
        <Link to="/contact" className=' hover:bg-purple-600 rounded-md p-2 '>Contact</Link>
        <Link to="/projects" className=' hover:bg-purple-600 rounded-md p-2 '>Projects</Link>
        </div>
        <div className=' self-center'>
          <input type="text" placeholder="Search.." name="search" className='rounded-md'/>
         
      </div>
      </nav>
      
      <Outlet />
      <Footer />
      
    </div>
  );
}

export default Layout;
