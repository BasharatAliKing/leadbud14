import React from 'react'
import { IoIosLink } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
export default function News() {
    return (
        <>
            <div>
                <div className='flex gap-5  items-center my-4'>
                   <div className='bg-[rgb(245,245,245)] text-[#B7B7B7] rounded-md p-3 px-4 text-[14px] md:text-[16px] flex items-center gap-1'><FiFilter className='font-semibold text-[20px]'/> Filter</div>
                   <div className='bg-[rgb(245,245,245)] text-[#B7B7B7] rounded-md p-1 px-4 text-[14px] md:text-[16px] flex items-center gap-1'><CiSearch className='text-[22px]'/><input type="search" placeholder='Search' className='outline-none placeholder-[#B7B7B7] border-none bg-[rgb(245,245,245)]' /> </div>
                </div>
                <div className="p-2 text-[13px] md:-2 flex flex-col bg-[rgb(245,245,245)] rounded-md ">
                    <p className="text-[14px] md:text-[16px] font-normal font-poppins text-[#030621]">City attraction ranked one of the best in the world</p>
                    <div className="text-[15px] text-[#7B7B7B] font-normal font-poppins flex gap-5">
                        <h1 className='flex gap-2 text-[#48FA8A]'><IoIosLink className='text-[20px]' /> eveningnews24.co.uk</h1>
                        <h2 className='font-[300]'>Receives Award</h2>
                        <h3>Sep 25, 2023</h3>
                    </div>
                </div>

                <div className="p-2 flex flex-col">
                    <p className="text-[13px] md:text-[15px]  font-normal font-poppins text-[#030621]">Paddle announces Paddle Billing API set for SaaS companies</p>
                    <div className="text-[15px] text-[#7B7B7B] font-normal font-poppins flex gap-5">
                        <h1 className='flex gap-2 text-[#48FA8A]'><IoIosLink className='text-[20px]' /> google.com</h1>
                        <h2 className='font-[300]'>Launches</h2>
                        <h3>Aug 11, 2023</h3>
                    </div> </div>
                <div className="p-2 text-[13px] md:-2 flex flex-col bg-[rgb(245,245,245)] rounded-md ">
                    <p className="text-[14px] md:text-[16px] font-normal font-poppins text-[#030621] lg:w-3/4">Payments infrastructure provider paddles launches $10M Al program to
                        support software founders</p>
                    <div className="text-[15px] text-[#7B7B7B] font-normal font-poppins flex gap-5">
                        <h1 className='flex gap-2 text-[#48FA8A]'><IoIosLink className='text-[20px]' /> mpost.io</h1>
                        <h2 className='font-[300]'>Launches</h2>
                        <h3>Jul 18, 2023</h3>
                    </div>   </div>

                <div className="p-2 flex flex-col">
                    <p className="text-[13px] md:text-[15px]  font-normal font-poppins text-[#030621]">Apple competitors set to launch rival App Stores following DMA mandate</p>
                    <div className="text-[15px] text-[#7B7B7B] font-normal font-poppins flex gap-5">
                        <h1 className='flex gap-2 text-[#48FA8A]'><IoIosLink className='text-[20px]' /> itworldcanada.com</h1>
                        <h2 className='font-[300]'>Launches</h2>
                        <h3>Dec 20, 2023</h3>
                    </div>   </div>

            </div>
        </>
    )
}
