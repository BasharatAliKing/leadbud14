import React from 'react'
import { FaChevronDown } from "react-icons/fa";
export default function JobPostings() {
    return (
        <>
            <div>
                <div className='flex  items-center my-4'> 
                <h2 className="text-[15px] text-[#030621] font-normal font-poppins">Job Postings</h2>
                <FaChevronDown className='text-[#030621] ml-3 text-[12px]' />
                </div>
                <div className="p-2 text-[13px] md:-2 flex flex-col bg-[rgb(245,245,245)] rounded-md ">
                    <p className="text-[14px] md:text-[16px] font-normal font-poppins text-[#030621]">Pricing Analyst</p>
                    <h2 className="text-[15px] text-[#7B7B7B] font-normal font-poppins">New York, New York / May 21st 2024</h2>
                </div>
              
                <div className="p-2 flex flex-col">
                    <p className="text-[13px] md:text-[15px]  font-normal font-poppins text-[#030621]">Inbound Business Development Representative</p>
                    <h2 className="text-[14px] md:text-[16px] text-[#7B7B7B] font-normal font-poppins">May 16th 2024</h2>
                </div>
                <div className="p-2 text-[13px] md:-2 flex flex-col bg-[rgb(245,245,245)] rounded-md ">
                    <p className="text-[14px] md:text-[16px] font-normal font-poppins text-[#030621]">Head of GTM Operations</p>
                    <h2 className="text-[15px] text-[#7B7B7B] font-normal font-poppins">May 9th 2024</h2>
                </div>
              
            </div>
        </>
    )
}
