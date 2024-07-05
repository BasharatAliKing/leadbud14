import React, { useState } from 'react'
import { BiBuildings } from "react-icons/bi";
import { LuPlusCircle } from "react-icons/lu";
export default function Details() {
   const [showmoretext,setShowMoreText]=useState('Show More');
   const [showmore,setShowMore]=useState(false);
   const [email, setEmail] = useState('tina.z@snov-cctv.com');
   const [industry, setIndustry] = useState('Electric & Electronic');
   const [country, setCountry] = useState('China');
   const [location, setLocation] = useState('China');
   const [work, setWork] = useState('---');
   const [personal, setPersonal] = useState('---');
  const showmoredata = ()=>{
    if(showmoretext=='Show More'){
      setShowMore(true);
       setShowMoreText('Show Less');
    }else {
      setShowMore(false);
      setShowMoreText('Show More');
    }
  }
   return (
      <>
         <div className='flex flex-col gap-4'>
            <div className="bg-[#F5F5F5] p-3 rounded-md">
               <div className="p-2 flex gap-2 md:gap-0 items-center ">
                  <h2 className="text-[13px] md:w-[130px] font-normal font-poppins">Email:</h2>
                  <input type="text" value={email}  onChange={(e) => { setEmail() }} className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
               </div>
               <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#fff] rounded-md">
                  <h2 className="text-[13px] md:w-[130px] font-normal font-poppins">Industry:</h2>
                  <input type="text" value={industry} onChange={(e) => { setIndustry() }} className='bg-[#fff] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
               </div>
               <div className="p-2 flex gap-2 md:gap-0 items-center  ">
                  <h2 className="text-[13px] md:w-[130px] font-normal font-poppins">Country:</h2>
                  <input type="text" value={country} onChange={(e) => { setCountry() }} className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
               </div>
              {
               showmore ? 
               <>
                 <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#fff] rounded-md">
                  <h2 className="text-[13px] md:w-[130px] font-normal font-poppins">Location:</h2>
                  <input type="text" value={location} onChange={(e) => { setLocation() }} className='bg-[#fff] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
               </div>
               <div className="p-2 flex gap-2 md:gap-0 items-center  ">
                  <h2 className="text-[13px] md:w-[130px] font-normal font-poppins">Work:</h2>
                  <input type="text" value={work} onChange={(e) => { setWork() }} className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
               </div>
               <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#fff] rounded-md">
                  <h2 className="text-[13px] md:w-[130px] font-normal font-poppins">Personal:</h2>
                  <input type="text" value={personal} onChange={(e) => { setPersonal() }} className='bg-[#fff] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
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
