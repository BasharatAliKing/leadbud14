import React from 'react'
import { BiBuildings } from "react-icons/bi";
import { LuPlusCircle } from "react-icons/lu";
export default function Details() {
  return (
    <><div className='flex flex-col gap-4'>
      
      <div className="bg-[#F5F5F5] p-3 rounded-md">
          <div className="p-2 flex gap-2 md:gap-0 items-center ">
             <h2 className="text-[13px] md:w-[100px] font-normal font-poppins">Email:</h2>
             <p className="text-[13px] font-normal font-poppins text-[#030621]">tina.z@snov-cctv.com</p>
          </div>
          <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#fff] rounded-md">
             <h2 className="text-[13px] md:w-[100px] font-normal font-poppins">Industry:</h2>
             <p className="text-[13px] font-normal font-poppins text-[#030621]">Electric & Electronic</p>
          </div>
          <div className="p-2 flex gap-2 md:gap-0 items-center  ">
             <h2 className="text-[13px] md:w-[100px] font-normal font-poppins">Country:</h2>
             <p className="text-[13px] font-normal font-poppins text-[#030621]">Chine</p>
          </div>
          <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#fff] rounded-md">
             <h2 className="text-[13px] md:w-[100px] font-normal font-poppins">Location:</h2>
             <p className="text-[13px] font-normal font-poppins text-[#030621]">China</p>
          </div>
          <div className="p-2 flex gap-2 md:gap-0 items-center  ">
             <h2 className="text-[13px] md:w-[100px] font-normal font-poppins">Work:</h2>
             <p className="text-[13px] font-normal font-poppins text-[#030621]">---</p>
          </div>
          <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#fff] rounded-md">
             <h2 className="text-[13px] md:w-[100px] font-normal font-poppins">Personal:</h2>
             <p className="text-[13px] font-normal font-poppins text-[#030621]">---</p>
          </div>
         </div>
         <div className="flex items-center gap-1 text-[#B7B7B7] text-[14px] xl:text-[16px]">
            <BiBuildings/><h2>Employement</h2>
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
