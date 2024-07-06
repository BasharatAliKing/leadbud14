import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineSignal } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
export default function Signals() {
    const [check,setCheck]=useState(true);
    return (
        <>
            <div className='flex flex-col gap-1  rounded-xl w-full'>
                <div className='flex justify-between w-full items-center'>
                    <h2 className='text-[14px] py-2 xl:text-[17px] font-semibold font-poppins text-[#030621]'>Signals & Communication Advice</h2>
                    <FaChevronDown className='text-[16px]' />
                </div>
                <div className='bg-[#F5F5F5] p-4 rounded-xl flex gap-3 w-full'>
                    <HiOutlineSignal className='text-[30px] text-[#48FA8A] mt-2' />
                    <div className='w-full'>
                        <div className='flex justify-between w-full items-center'>
                            <h2 className='cursor-pointer text-[14px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>Award or recognition</h2>
                            <FaChevronRight className='text-[#030621] text-[12px]' />
                        </div>
                        <h4 className='text-[13px] xl:text-[15px] font-normal font-poppins text-[#7B7B7B]'>Recognition = Recognition +1</h4>
                    {check ?     <p className='mt-3 text-[12px] xl:text-[14px] font-normal font-poppins text-[#7B7B7B]'>Discuss the recent award or recognition</p> : null}
                    </div>
                </div>
                
                <div className=' p-4 rounded-xl flex gap-3 w-full'>
                    <HiOutlineSignal className='text-[30px] text-[#48FA8A] mt-2' />
                    <div className='w-full'>
                        <div className='flex justify-between w-full items-center'>
                            <h2 className='cursor-pointer text-[14px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>New Partnership</h2>
                            <FaChevronRight className='text-[#030621] text-[12px]' />
                        </div>
                        <h4 className=' text-[13px] xl:text-[15px] font-normal font-poppins text-[#7B7B7B]'>Recognition = Recognition +1</h4>
                      {check ?   <p className='mt-3 text-[12px] xl:text-[14px] font-normal font-poppins text-[#7B7B7B]'>Congratulate them on the new partnership</p> : null}
                    </div>
                </div>
                <div className='bg-[#F5F5F5] p-4 rounded-xl flex gap-3 w-full'>
                    <HiOutlineSignal className='text-[30px] text-[#48FA8A] mt-2' />
                    <div className='w-full'>
                        <div className='flex justify-between w-full items-center'>
                            <h2 className='cursor-pointer text-[14px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>New product or service</h2>
                            <FaChevronRight className='text-[#030621] text-[12px]' />
                        </div>
                        <h4 className=' text-[13px] xl:text-[15px] font-normal font-poppins text-[#7B7B7B]'>New Offering = New Offering +1</h4>
                       {check ?  <p className='mt-3 text-[12px] xl:text-[14px] font-normal font-poppins text-[#7B7B7B]'>Congratulate them on the new offering and</p>: null}
                    </div>
                </div>
                <div className='flex mt-3 items-center text-[#030621]'>
                    <input type="checkbox" onClick={()=>{setCheck(!check)}} />
                    <h3 className='text-[13px] xl:text-[14px] font-normal ml-1'>Hide talking tips & snippets</h3>
                </div>
            </div>
        </>
    )
}
