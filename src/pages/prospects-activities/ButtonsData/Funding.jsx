import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
export default function Funding() {
    return (
        <>
            <div>
                <div className='flex  items-center my-4'> 
                <h2 className="text-[15px] text-[#030621] font-normal font-poppins">Funding Rounds Insights Settings</h2>
                <FaChevronDown className='text-[#030621] ml-3 text-[12px]' />
                </div>
                <div className="p-2 text-[13px] md:-2 flex flex-col bg-[rgb(245,245,245)] rounded-md ">
                    <p className="text-[14px] md:text-[16px] font-normal font-poppins text-[#030621]">$200M</p>
                    <h2 className="text-[15px] text-[#7B7B7B]  font-normal font-poppins">Series D - May 2022</h2>
                </div>
              
                <div className="p-2 flex flex-col">
                    <p className="text-[13px] md:text-[15px]  font-normal font-poppins text-[#030621]">$68M</p>
                    <h2 className="text-[14px] md:text-[16px] text-[#7B7B7B] font-normal font-poppins flex gap-4 items-center">Series C - Nov 2020 <IoIosLink className='text-[20px]'/></h2>
                </div>
                <div className="p-2 text-[13px] md:-2 flex flex-col bg-[rgb(245,245,245)] rounded-md ">
                    <p className="text-[14px] md:text-[16px] font-normal font-poppins text-[#030621]">$8M</p>
                    <h2 className="text-[15px] text-[#7B7B7B] font-normal font-poppins flex gap-4 items-center">Series B - Nov 2018 <IoIosLink className='text-[20px]'/></h2>
                </div>
              
                <div className="p-2 flex flex-col">
                    <p className="text-[13px] md:text-[15px]  font-normal font-poppins text-[#030621]">$12.5M</p>
                    <h2 className="text-[14px] md:text-[16px] text-[#7B7B7B] font-normal font-poppins flex gap-4 items-center">Series B - Jan 2018 <IoIosLink className='text-[20px]'/></h2>
                </div>
                
            </div>
        </>
    )
}
