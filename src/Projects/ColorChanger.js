import { useState } from "react";

function ColorChanger(){
  const [color,setColor]=useState("white");
  
 
  return(
   <div className="w-full h-screen flex justify-center text-2xl" style={{backgroundColor:color}} >
        <div className="  px-3 py-5 flex flex-wrap justify-center gap-5 ">
          <button className="rounded-full  w-40 h-20 bg-black text-white px-5 py-3" onClick={()=> setColor("red")}>Red</button>
          <button className="rounded-full w-40 h-20 bg-black text-white px-5 py-3" onClick={()=> setColor("yellow")}>Yellow</button> 
          <button className="rounded-full w-40 h-20 bg-black text-white px-5 py-3" onClick={()=> setColor("green")}>Green</button>
          <button className="rounded-full w-40 h-20 bg-black text-white px-5 py-3" onClick={()=> setColor("blue")}>Blue</button>
          <button className="rounded-full w-40 h-20 bg-black text-white px-5 py-3" onClick={()=> setColor("orange")}>Orange</button>
        </div>

   </div>
  )
}
export default ColorChanger;
