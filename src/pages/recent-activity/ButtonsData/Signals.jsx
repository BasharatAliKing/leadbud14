import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineSignal } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
export default function Signals() {
    const [check,setCheck]=useState(true);
    const [award,setAward]=useState(false);
    const [newPartnership,setNewpartnership]=useState(false);
    const [newproduct,setNewproduct]=useState(false);
    return (
        <>
         {
            award ? <>
               <div className='custom-toast '>
                  <div className='pb-10 flex flex-col gap-3 bg-[#fefefe]  w-[300px] md:w-2/4 text-start toaster rounded-xl shadow-xl p-5 z-10'>
                <RxCrossCircled onClick={()=>{setAward(false)}} className='ml-auto'/>
                   <h3 className='text-[16px] md:text-[18px] text-[#000] font-medium '>Signal Details</h3>
                    <div className='flex gap-5 p-3 shadow-md rounded-md bg-[#ebebeb] w-full items-center'>
                    <HiOutlineSignal className='text-[30px] text-[#48FA8A]' />
                            <h2 className='cursor-pointer text-[14px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>Recently Promoted</h2>
                        </div>
                        <div className=''>
                        <div className='flex gap-2 items-center'>
                           <h3 className='flex gap-1 text-[#0000ffbc] items-center text-[12px] bg-[#ebebeb] p-1 rounded-md'><FaRegUser/>People</h3>
                          <h4 className='text-[13px]'>Where....</h4>
                        </div>
                       <div className='flex flex-col'>
                       <h2 className='text-[14px] md:text-[15px] font-medium'>Time Since Last Promotion</h2>
                       <h5 className='text-[12px] font-medium'>3 Months Ago</h5>
                       </div>
                        </div>
                        <div className='flex flex-col p-3 shadow-md rounded-md bg-[#ebebeb] w-full'>
                         <div className='flex gap-2 text-[14px] xl:text-[15px] items-center'>
                         <FaPhone className='' />
                            <h2 className='cursor-pointer text-[14px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>Talking tip</h2>
                         </div>
                         <p className='text-[12px] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                  </div>
               </div>
            </> : null
         }
         {
            newPartnership ? <>
               <div className='custom-toast '>
                  <div className='pb-10 flex flex-col gap-3 bg-[#fefefe]  w-[300px] md:w-2/4 text-start toaster rounded-xl shadow-xl p-5 z-10'>
                <RxCrossCircled onClick={()=>{setNewpartnership(false)}} className='ml-auto'/>
                   <h3 className='text-[16px] md:text-[18px] text-[#000] font-medium '>New Partnership</h3>
                    <div className='flex gap-5 p-3 shadow-md rounded-md bg-[#ebebeb] w-full items-center'>
                    <HiOutlineSignal className='text-[30px] text-[#48FA8A]' />
                            <h2 className='cursor-pointer text-[14px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>Recently Promoted</h2>
                        </div>
                        <div className=''>
                        <div className='flex gap-2 items-center'>
                           <h3 className='flex gap-1 text-[#0000ffbc] items-center text-[12px] bg-[#ebebeb] p-1 rounded-md'><FaRegUser/>People</h3>
                          <h4 className='text-[13px]'>Where....</h4>
                        </div>
                       <div className='flex flex-col'>
                       <h2 className='text-[14px] md:text-[15px] font-medium'>Time Since Last Promotion</h2>
                       <h5 className='text-[12px] font-medium'>3 Months Ago</h5>
                       </div>
                        </div>
                        <div className='flex flex-col p-3 shadow-md rounded-md bg-[#ebebeb] w-full'>
                         <div className='flex gap-2 text-[14px] xl:text-[15px] items-center'>
                         <FaPhone className='' />
                            <h2 className='cursor-pointer text-[14px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>Talking tip</h2>
                         </div>
                         <p className='text-[12px] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                  </div>
               </div>
            </> : null
         }
         {
            newproduct ? <>
               <div className='custom-toast '>
                  <div className='pb-10 flex flex-col gap-3 bg-[#fefefe]  w-[300px] md:w-2/4 text-start toaster rounded-xl shadow-xl p-5 z-10'>
                <RxCrossCircled onClick={()=>{setNewproduct(false)}} className='ml-auto'/>
                   <h3 className='text-[16px] md:text-[18px] text-[#000] font-medium '>New product or service</h3>
                    <div className='flex gap-5 p-3 shadow-md rounded-md bg-[#ebebeb] w-full items-center'>
                    <HiOutlineSignal className='text-[30px] text-[#48FA8A]' />
                            <h2 className='cursor-pointer text-[14px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>Recently Promoted</h2>
                        </div>
                        <div className=''>
                        <div className='flex gap-2 items-center'>
                           <h3 className='flex gap-1 text-[#0000ffbc] items-center text-[12px] bg-[#ebebeb] p-1 rounded-md'><FaRegUser/>People</h3>
                          <h4 className='text-[13px]'>Where....</h4>
                        </div>
                       <div className='flex flex-col'>
                       <h2 className='text-[14px] md:text-[15px] font-medium'>Time Since Last Promotion</h2>
                       <h5 className='text-[12px] font-medium'>3 Months Ago</h5>
                       </div>
                        </div>
                        <div className='flex flex-col p-3 shadow-md rounded-md bg-[#ebebeb] w-full'>
                         <div className='flex gap-2 text-[14px] xl:text-[15px] items-center'>
                         <FaPhone className='' />
                            <h2 className='cursor-pointer text-[14px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>Talking tip</h2>
                         </div>
                         <p className='text-[12px] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                  </div>
               </div>
            </> : null
         }
            <div className='flex flex-col gap-1  rounded-xl w-full'>
                <div className='flex justify-between w-full items-center'>
                    <h2 className='text-[14px] py-2 xl:text-[17px] font-semibold font-poppins text-[#030621]'>Signals & Communication Advice</h2>
                </div>
                <div className='bg-[#F5F5F5] p-4 rounded-xl flex gap-3 w-full'>
                    <HiOutlineSignal className='text-[30px] text-[#48FA8A] mt-2' />
                    <div onClick={()=>{setAward(true)}} className='w-full'>
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
                    <div onClick={()=>{setNewpartnership(true)}} className='w-full'>
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
                    <div onClick={()=>{setNewproduct(true)}} className='w-full'>
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
