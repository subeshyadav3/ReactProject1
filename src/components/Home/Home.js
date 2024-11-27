import React from 'react';
import subesh from './subesh.jpg';
import insta from './insta.png';
import github from './github.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';

function Home() {
    return (
        <div className='flex flex-wrap sm:flex-row min-h-screen relative'>
            <div className='hidden sm:flex justify-center items-center  sm:bg-[#6948F8] sm:w-1/3 relative '>
                <div className='w-[200px] h-[200px] bg-[#6948F8] rounded-full absolute right-[-25%] flex items-center justify-center'>
                    <div className='bg-white w-[180px] h-[180px] rounded-full flex justify-center items-center'>
                        <img src={subesh} alt="Example" className='  rounded-full w-[150px] h-[150px]' />
                    </div> 
                </div>
                
                
                
            </div>
            <div className='flex justify-center w-full h-10 mt-5 sm:hidden' >
                <div className='w-[180px] h-[180px] bg-[#6948F8] rounded-full absolute  flex  justify-center sm:hidden'>
                    <div className='bg-[#6948F8] w-[180px] h-[180px] rounded-full flex justify-center items-center'>
                        <img src={subesh} alt="Example" className='  rounded-full w-[150px] h-[150px]' />
                    </div> 
                </div>
            </div>
            

            <div className='flex justify-center  w-full  sm:w-2/3 font-serif sm:items-center'>
                <div>
                    <p className='text-2xl md:text-4xl'>Subesh Yadav</p>                
                    <p className='text-1xl md:text-2xl'>I am Into Web Development !!!</p>      
                    <button className='rounded-md bg-[#6948F8] p-2 text-white hover:bg-orange-500 mt-3'>Download CV</button>
                </div>         
                <div className='mt-0 sm:h-7 w-7 ml-5 sm:mt-[-70px]'>   
                    <a href="https://www.instagram.com/subeshyadav3/"><img src={insta} alt="Instagram"/></a>
                    <a href="https://www.linkedin.com/in/subeshyadav3/"><img src={linkedin} alt="LinkedIn"/></a>
                    <a href="https://x.com/subeshyadav3"><img src={twitter} alt="Twitter"/></a>
                    <a href="https://github.com/subeshyadav3"><img src={github} alt="GitHub"/></a>
                </div>         
            </div>
        </div>
    );
}

export default Home;
