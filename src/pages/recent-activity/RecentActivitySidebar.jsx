import React from 'react'

import { GoTag } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";

import RecentActivitySidebarButton from "./RecentActivitySidebarButton"

import "./recentactivity.css";
import NameInput from './NameInput';
export default function RecentActivitySidebar() {
 
  return (
    <>
     <div id='recentmainsidebar' className="p-3 md:p-5  flex flex-col gap-2">
        <NameInput/>
         <div className="flex gap-1 items-center">
            <GoTag className="text-sm text-[#B7B7B7]" />
            <h3 className="text-[#B7B7B7] text-[15px] font-normal font-poppins">Manage tags</h3>
         </div>
         <div className="flex gap-1 justify-between items-center">
            <div className="flex gap-5 mt-2 items-center">
            <h2 className="text-[#030621] text-[16px] font-medium font-poppins">List:</h2>
            <h2 className="text-[#56F444] text-[16px] font-medium font-poppins">Test 2</h2>
            <TiSocialLinkedin className="border rounded-full text-[#030621] p-[2px] text-[25px]"/>
            </div>
            <IoMdSettings className="text-[18px] text-[#B7B7B7]" />
         </div>
         {/* <div className="bg-[#F5F5F5] mt-2 rounded-[10px] w-full">
          <div  className='pb-0 whitespace-nowrap overflow-x-scroll hide-scrollbar'>
           <button className="text-[13px] active font-medium font-poppins px-3 p-2 bg-[#030621] text-[#fff]">Details</button>
            <button className="text-[13px] font-medium font-poppins px-3 p-2">Deals</button>
            <button className="text-[13px] font-medium font-poppins px-3 p-2">Related Companies</button>
            <button className="text-[13px] font-medium font-poppins px-3 p-2">Signals</button>
          </div>
         </div> */}
         {/* <div className="bg-[#F5F5F5] p-3 rounded-md">
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
         </div> */}
         {/* <div className="flex items-center gap-1 text-[#B7B7B7] text-[14px] xl:text-[16px]">
            <BiBuildings/><h2>Employement</h2>
         </div> */}
         {/* <div className="bg-[#F5F5F5] p-3 rounded-md">
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
         </div> */}
         {/* <div className="bg-[#F5F5F5] rounded-md p-3 flex gap-1 items-center mr-auto text-[#B7B7B7] text-[14px] xl:text-[16px]">
         <LuPlusCircle /> <h2>Add Company</h2>
         </div> */}
         <RecentActivitySidebarButton/>
        </div>
    </>
  )
}
