import React,{useState} from 'react'
import { HiOutlineSignal } from "react-icons/hi2";
import { RxCrossCircled } from "react-icons/rx";
import { FaPhone } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
export default function SignalsSide() {
    const [awardsignal, setAwardsignal] = useState(false);
    const [newPartnershipsig, setNewpartnershipsig] = useState(false);
    const [newproductsig, setNewproductsig] = useState(false);
    const [check,setCheck]=useState(true);
    
    return (
        <>
            {
                awardsignal ? <>
                    <div className='custom-toast '>
                        <div className='pb-10 flex flex-col gap-3 bg-[#fefefe]  w-[300px] md:w-2/4 text-start toaster rounded-xl shadow-xl p-5 z-10'>
                            <RxCrossCircled onClick={() => { setAwardsignal(false) }} className='hover:scale-110 cursor-pointer duration-500 text-[20px] ml-auto' />
                            <h3 className='text-[16px] md:text-[18px] text-[#000] font-medium '>Signal Details</h3>
                            <div className='flex gap-5 p-3 shadow-md rounded-md bg-[#ebebeb] w-full items-center'>
                                <HiOutlineSignal className='text-[30px] text-[#48FA8A]' />
                                <h2 className='cursor-pointer text-[14px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>Recently Promoted</h2>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-2 items-center'>
                                    <h3 className='flex gap-1 text-[#0000ffbc] items-center text-[12px] bg-[#ebebeb] p-1 rounded-md'><FaRegUser />People</h3>
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
                newPartnershipsig ? <>
                    <div className='custom-toast '>
                        <div className='pb-10 flex flex-col gap-3 bg-[#fefefe]  w-[300px] md:w-2/4 text-start toaster rounded-xl shadow-xl p-5 z-10'>
                            <RxCrossCircled onClick={() => { setNewpartnershipsig(false) }} className='hover:scale-110 cursor-pointer duration-500 text-[20px] ml-auto' />
                            <h3 className='text-[16px] md:text-[18px] text-[#000] font-medium '>New Partnership</h3>
                            <div className='flex gap-5 p-3 shadow-md rounded-md bg-[#ebebeb] w-full items-center'>
                                <HiOutlineSignal className='text-[30px] text-[#48FA8A]' />
                                <h2 className='cursor-pointer text-[14px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>Recently Promoted</h2>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-2 items-center'>
                                    <h3 className='flex gap-1 text-[#0000ffbc] items-center text-[12px] bg-[#ebebeb] p-1 rounded-md'><FaRegUser />People</h3>
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
                newproductsig ? <>
                    <div className='custom-toast '>
                        <div className='pb-10 flex flex-col gap-3 bg-[#fefefe]  w-[300px] md:w-2/4 text-start toaster rounded-xl shadow-xl p-5 z-10'>
                            <RxCrossCircled onClick={() => { setNewproductsig(false) }} className='hover:scale-110 cursor-pointer duration-500 text-[20px] ml-auto' />
                            <h3 className='text-[16px] md:text-[18px] text-[#000] font-medium '>New product or service</h3>
                            <div className='flex gap-5 p-3 shadow-md rounded-md bg-[#ebebeb] w-full items-center'>
                                <HiOutlineSignal className='text-[30px] text-[#48FA8A]' />
                                <h2 className='cursor-pointer text-[14px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>Recently Promoted</h2>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-2 items-center'>
                                    <h3 className='flex gap-1 text-[#0000ffbc] items-center text-[12px] bg-[#ebebeb] p-1 rounded-md'><FaRegUser />People</h3>
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
            <div className='flex flex-col gap-1 shadow-xl bg-[#fff] p-3 md:p-5 rounded-xl'>
                <div className='flex justify-between w-full items-center'>
                    <h2 className='text-[14px] sm:text-[15px] xl:text-[17px] font-semibold font-poppins text-[#030621]'>Signals & Communication Advice</h2>
                    <FaChevronDown className='w-[16px] sm:w-auto' />
                </div>
                <h4 className='flex items-center gap-5 font-normal my-3 text-[#B7B7B7] text-[14px] md:text-[15px]'>Top signals for LinkedIn <IoSettingsOutline className='text-[#B7B7B7] text-[20px]' /></h4>
               
                <div onClick={()=>{setAwardsignal(true)}} className='cursor-pointer bg-[#F5F5F5] p-4 rounded-xl flex gap-3 w-full'>
                    <HiOutlineSignal className='text-[30px] text-[#48FA8A] mt-2' />
                    <div className='w-full'>
                        <div className='flex justify-between w-full items-center'>
                            <h2 className='text-[14px] sm:text-[15px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>Award or recognition</h2>
                            <FaChevronRight className=' text-[#030621]' />
                        </div>
                        <h4 className='text-[13px] sm:text-[14px] xl:text-[15px] font-normal font-poppins text-[#7B7B7B]'>Recognition = Recognition +1</h4>
                        {check ? <p className='mt-3 sm:mt-5 text-[12px] sm:text-[13px] xl:text-[14px] font-normal font-poppins text-[#7B7B7B]'>Discuss the recent award or recognition</p> : null}
                    </div>
                </div>
                <div onClick={()=>{setNewpartnershipsig(true)}} className='cursor-pointer p-4 rounded-xl flex gap-3 w-full'>
                    <HiOutlineSignal className='text-[30px] text-[#48FA8A] mt-2' />
                    <div className='w-full'>
                        <div className='flex justify-between w-full items-center'>
                            <h2 className='text-[14px] sm:text-[15px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>New Partnership</h2>
                            <FaChevronRight className='text-[#030621]' />
                        </div>
                        <h4 className='text-[13px] sm:text-[14px] xl:text-[15px] font-normal font-poppins text-[#7B7B7B]'>Recognition = Recognition +1</h4>
                        {check ? <p className='mt-3 sm:mt-5 text-[12px] sm:text-[13px] xl:text-[14px] font-normal font-poppins text-[#7B7B7B]'>Congratulate them on the new partnership</p> : null}
                    </div>
                </div>
                <div onClick={()=>{setNewproductsig(true)}} className='bg-[#F5F5F5] cursor-pointer p-4 rounded-xl flex gap-3 w-full'>
                    <HiOutlineSignal className='text-[30px] text-[#48FA8A] mt-2' />
                    <div className='w-full '>
                        <div className='flex justify-between w-full items-center'>
                            <h2 className=' text-[14px] sm:text-[15px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>New product or service</h2>
                            <FaChevronRight className='text-[#030621]' />
                        </div>
                        <h4 className='text-[13px] sm:text-[14px] xl:text-[15px] font-normal font-poppins text-[#7B7B7B]'>New Offering = New Offering +1</h4>
                        {check ? <p className='mt-3 sm:mt-5 text-[12px] sm:text-[13px] xl:text-[14px] font-normal font-poppins text-[#7B7B7B]'>Congratulate them on the new offering and</p> : null}
                    </div>
                </div>
                <div className='flex mt-3 items-center text-[#030621]'>
                    <input type="checkbox" onClick={() => { setCheck(!check) }} />
                    <h3 className='text-[13px] xl:text-[14px] font-normal ml-1'>Hide talking tips & snippets</h3>
                </div>
            </div>
        </>
    )
}
