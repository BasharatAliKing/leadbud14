import React, { useState } from 'react'
import { BiBuildings } from "react-icons/bi";
import { LuPlusCircle } from "react-icons/lu";
import { PiPencilLight } from "react-icons/pi";
export default function Details() {
   const [showmoretext,setShowMoreText]=useState('Show More');
   const [showmore,setShowMore]=useState(false);
   const [email, setEmail] = useState('tina.z@snov-cctv.com');
   const [industry, setIndustry] = useState('Electric & Electronic');
   const [country, setCountry] = useState('China');
   const [location, setLocation] = useState('China');
   const [work, setWork] = useState('---');
   const [personal, setPersonal] = useState('---');
   const [hover,setHover]=useState(false);
   const [hoverindustry,setHoverindustry]=useState(false);
   const [hovercountry,setHovercountry]=useState(false);
   const [hoverlocation,setHoverlocation]=useState(false);
   const [hoverwork,setHoverwork]=useState(false);
   const [hoverpersonal,setHoverpersonal]=useState(false);
   const [isEditableemail,setIsEditableemail]=useState(false);
   const [isEditableindustry,setIsEditableindustry]=useState(false);
   const [isEditablecountry,setIsEditablecountry]=useState(false);
   const [isEditabelocation,setIsEditabelocation]=useState(false);
   const [isEditablework,setIsEditabework]=useState(false);
   const [isEditablepersonal,setIsEditabepersonal]=useState(false);
  const showmoredata = ()=>{
    if(showmoretext=='Show More'){
      setShowMore(true);
       setShowMoreText('Show Less');
    }else {
      setShowMore(false);
      setShowMoreText('Show More');
    }
  }
  const handleemailinputchange =(e)=>{
   if(isEditable){
      setEmail(e.target.value)
   }
  }

  const emailicon=()=>{
   setIsEditable(true);
  }
   return (
      <>
         <div className='flex flex-col gap-4'>
            <div className="bg-[#F5F5F5] p-3 rounded-md">
               <div className="p-2 flex gap-2 md:gap-0 items-center ">
                  <h2 className="text-[13px] md:w-[130px] font-normal font-poppins">Email:</h2>
               <div className='flex items-center w-full' onMouseEnter={()=>{setHover(true)}}  onMouseLeave={()=>{setHover(false);setIsEditableemail(false) }}>
               <input type="text" disabled={!isEditableemail}  value={email} onChange={()=>{setEmail()}} className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
              {hover? <PiPencilLight onClick={()=>{setIsEditableemail(true)}} className=' top-[8px] text-[14px] -right-2' />:null}
               </div>
              </div>
               <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#fff] rounded-md">
                  <h2 className="text-[13px] md:w-[130px] font-normal font-poppins">Industry:</h2>
                  <div className='flex items-center w-full' onMouseEnter={()=>{setHoverindustry(true)}} onMouseLeave={ ()=> {setHoverindustry(false); setIsEditableindustry(false)}}>
                  <input type="text" disabled={!isEditableindustry}  value={industry} onChange={(e) => { setIndustry() }} className='bg-[#fff] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                {hoverindustry ?  <PiPencilLight onClick={()=>{setIsEditableindustry(true)}} className=' top-[8px] text-[14px] -right-2' />:null}
                  </div>
               </div>
               <div className="p-2 flex gap-2 md:gap-0 items-center  ">
                  <h2 className="text-[13px] md:w-[130px] font-normal font-poppins">Country:</h2>
                  <div className='flex items-center w-full' onMouseEnter={()=>{setHovercountry(true)}} onMouseLeave={ ()=>{setHovercountry(false); setIsEditablecountry(false)}}>
                  <input type="text" disabled={!isEditablecountry}  value={country} onChange={(e) => { setCountry() }} className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                  {hovercountry? <PiPencilLight onClick={()=>{setIsEditablecountry(true)}} className=' top-[8px] text-[14px] -right-2' />:null}
                  </div>
               </div>
              {
               showmore ? 
               <>
                 <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#fff] rounded-md">
                  <h2 className="text-[13px] md:w-[130px] font-normal font-poppins">Location:</h2>
                  <div className='flex items-center w-full' onMouseEnter={()=>{setHoverlocation(true)}} onMouseLeave={ ()=>{setHoverlocation(false); setIsEditabelocation(false)}}>
                  <input type="text" disabled={!isEditabelocation} value={location} onChange={(e) => { setLocation() }} className='bg-[#fff] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                  {hoverlocation? <PiPencilLight onClick={()=>{setIsEditabelocation(true)}} className=' top-[8px] text-[14px] -right-2' />:null}
                  </div>
               </div>
               <div className="p-2 flex gap-2 md:gap-0 items-center  ">
                  <h2 className="text-[13px] md:w-[130px] font-normal font-poppins">Work:</h2>
                  <div className='flex items-center w-full' onMouseEnter={()=>{setHoverwork(true)}} onMouseLeave={ ()=>{setHoverwork(false); setIsEditabework(false)}}>
                  <input type="text" disabled={!isEditablework} value={work} onChange={(e) => { setWork() }} className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                  {hoverwork? <PiPencilLight onClick={()=>{setIsEditabework(true)}} className=' top-[8px] text-[14px] -right-2' />:null}
                  </div>
               </div>
               <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#fff] rounded-md">
                  <h2 className="text-[13px] md:w-[130px] font-normal font-poppins">Personal:</h2>
                  <div className='flex items-center w-full' onMouseEnter={()=>{setHoverpersonal(true)}} onMouseLeave={ ()=>{setHoverpersonal(false); setIsEditabepersonal(false)}}>
                  <input type="text" disabled={!isEditablepersonal} value={personal} onChange={(e) => { setPersonal() }} className='bg-[#fff] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                  {hoverpersonal? <PiPencilLight onClick={()=>{setIsEditabepersonal(true)}} className=' top-[8px] text-[14px] -right-2' />:null}
                  </div>
               </div>
               </>  : ''
              }
               <p onClick={showmoredata} className='text-center text-[14px] font-normal cursor-pointer mt-2 text-[#56f444]'>{showmoretext}</p>
             
            </div>
            <div className="flex items-center gap-1 text-[#B7B7B7] text-[14px] xl:text-[16px]">
               <BiBuildings /><h2>Employement</h2>
            </div>
            <div className="bg-[#F5F5F5] p-3 rounded-md">
               <div className="p-2 flex  gap-3 md:gap-0 ">
                  <h2 className="text-[13px] md:w-[100px] font-normal font-poppins">Company:</h2>
                  <p className="text-[13px] font-normal font-poppins text-[#030621]">Leadbud.io</p>
               </div>
               <div className="p-2 flex gap-3 md:gap-0 bg-[#fff] rounded-md">
                  <h2 className="text-[13px] md:w-[100px] font-normal font-poppins">Job Position:</h2>
                  <p className="text-[13px] font-normal font-poppins text-[#030621]">Sales</p>
               </div>
               <div className="p-2 flex  gap-3 md:gap-0 ">
                  <h2 className="text-[13px] md:w-[100px] font-normal font-poppins">Website:</h2>
                  <p className="text-[13px] font-normal font-poppins text-[#030621]">https://www.leadbud.io</p>
               </div>
               <div className="p-2 flex gap-3 md:gap-0 bg-[#fff] rounded-md">
                  <h2 className="text-[13px] md:w-[100px] font-normal font-poppins">HQ Phone:</h2>
                  <p className="text-[13px] font-normal font-poppins text-[#030621]">---</p>
               </div>
            </div>
            <div className="bg-[#F5F5F5] rounded-md p-3 flex gap-1 items-center mr-auto text-[#B7B7B7] text-[14px] xl:text-[16px]">
               <LuPlusCircle /> <h2>Add Company</h2>
            </div>
         </div>
      </>
   )
}
