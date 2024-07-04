import React from 'react'
import { FaChevronDown } from "react-icons/fa";
export default function Technologies() {
    return (
        <>
            <div>
                <div className='flex  items-center my-4'> 
                <h2 className="text-[15px] text-[#030621] font-normal font-poppins">Technology Insights Settings</h2>
                <FaChevronDown className='text-[#030621] ml-3 text-[12px]' />
                </div>
                <div className="p-2 text-[13px] md:-2 flex flex-col bg-[rgb(245,245,245)] rounded-md ">
                    <p className="text-[14px] md:text-[16px] font-normal font-poppins text-[#030621]">AI</p>
                    <h2 className="text-[15px] text-[#7B7B7B] md:w-[120px] font-normal font-poppins">Other</h2>
                </div>
              
                <div className="p-2 flex flex-col">
                    <p className="text-[13px] md:text-[15px]  font-normal font-poppins text-[#030621]">AddThis</p>
                    <h2 className="text-[14px] md:text-[16px] text-[#7B7B7B] font-normal font-poppins">Social Sharing</h2>
                </div>
                <div className="p-2 text-[13px] md:-2 flex flex-col bg-[rgb(245,245,245)] rounded-md ">
                    <p className="text-[14px] md:text-[16px] font-normal font-poppins text-[#030621]">Amadeza</p>
                    <h2 className="text-[15px] text-[#7B7B7B] md:w-[120px] font-normal font-poppins">Personalization</h2>
                </div>
              
                <div className="p-2 flex flex-col">
                    <p className="text-[13px] md:text-[15px]  font-normal font-poppins text-[#030621]">Amazon AWS</p>
                    <h2 className="text-[14px] md:text-[16px] text-[#7B7B7B] font-normal font-poppins">Hosting</h2>
                </div>
                
            </div>
        </>
    )
}
