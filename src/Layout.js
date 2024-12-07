import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function Layout() {
  const [isMobMenu, setIsMobMenu] = useState(false);

  const toggleMenu = () => {
    setIsMobMenu(!isMobMenu);
  };



  return (
    <div>
      <div className=' flex bg-blue-500 '>
        {/* <div className=' sm:w-1/3 bg-[#6948F8] h-12 text-white'></div> */}
        <div className='  relative '>
          <nav className=' sm:flex h-10 justify-around text-black fixed  top-0 right-0 pr-20 m-2 z-50 '>
            <div className='hidden sm:flex justify-center self-center font-sans'>
              <Link to="/" className='hover:bg-purple-600 rounded-md p-2'>Home</Link>
              <Link to="/projects" className='hover:bg-purple-600 rounded-md p-2'>Projects</Link>
              <Link to="/about" className='hover:bg-purple-600 rounded-md p-2'>About Us</Link>
              <Link to="/contact" className='bg-[#6948F8] rounded-sm p-2 text-white hover:bg-orange-500'>Contact Me</Link>
            </div>
            <button className='sm:hidden absolute right-5    ' onClick={toggleMenu}>
              ☰
            </button>
          </nav>
          </div>
      
      </div>
      {/* Mobile menu */}
      {isMobMenu ? (
        
        <div className='flex flex-col items-center bg-[#6948F8] w-full fixed top-10 left-0 z-50 sm:hidden'>
          <Link to="/" className=' hover:bg-orange-500 rounded-md p-2 text-white' onClick={toggleMenu}>Home</Link>
          <Link to="/projects" className=' hover:bg-orange-500 rounded-md p-2 text-white' onClick={toggleMenu}>Projects</Link>
          <Link to="/about" className=' hover:bg-orange-500 rounded-md p-2 text-white' onClick={toggleMenu}>About Us</Link>
          <Link to="/contact" className='bg-red-500 rounded-sm p-2 mb-2 mt-2 text-white hover:bg-orange-500 ' onClick={toggleMenu}>Contact Me</Link>
        </div>
      ) : null}
      <div style={{ marginTop: isMobMenu ? '150px' : '0' }}></div>
      

      
      <Outlet />
      
      <Footer />
     
    </div>
  );
}

export default Layout;
