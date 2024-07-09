import React from 'react';
import "./Department.css";
import Circle from './Circle';
import { IoFolderOpenOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
export default function Department() {
    const percentages = [20, 45, 15, 10, 10]; // Adjust these values as needed  const percentages = [20, 20, 20, 20, 20]; // Adjust these values as needed
    const text = '3,360 Apr 2024';
    return (
        <>
            <div className='flex flex-col md:flex-row gap-3 w-full'>
                <div className='md:w-1/2'>
                    <h3 className='p-3 text-[#030621] text-[15px] md:text-[16px] xl:text-[18px] font-semibold '>Functional Distrubution</h3>
                    <div className='flex items-center justify-center mt-3'>
                        <Circle percentages={percentages} text={text} />
                    </div>
                </div>
                <div className='md:w-1/2 flex flex-col gap-2 overflow-x-scroll hide-scrollbar'>
                    <table>
                        <tbody>
                            <tr> <div className='flex even:bg-[#F5F5F5] w-full p-3 rounded-md whitespace-nowrap gap-5'>
                                <div className='flex gap-1 text-[#56F444] items-center '>
                                    <IoFolderOpenOutline className='text-[20px]' />
                                    <h3 className='text-[16px] font-medium'>New Folder</h3>
                                    <FaChevronDown className='ml-4' /> </div>
                                <h4 className='text-[12px] text-[#B7B7B7] w-[50px]'>1 year</h4>
                                <h5 className='text-[12px] text-[#B7B7B7] w-[50px]'>2 year</h5>
                            </div></tr>
                            <tr>
                                <div className='flex  even:bg-[#F5F5F5] w-full p-3 rounded-md whitespace-nowrap gap-5'>
                                    <div className='flex gap-1  items-center pr-[10px]'>
                                        <div className='w-[15px] h-[15px] rounded-full bg-[#56F444]'></div>
                                        <h3 className='text-[13px] text-[#030621] font-normal font-poppins'>Human Resources</h3>
                                    </div>
                                    <h4 className='text-[12px] text-[#B7B7B7] w-[50px]'>121</h4>
                                    <h5 className='text-[12px] text-[#B7B7B7] w-[50px]'>qwrqwr</h5>
                                </div>
                            </tr>
                            <tr>
                                <div className='flex  even:bg-[#F5F5F5] w-full p-3 rounded-md whitespace-nowrap gap-5'>
                                    <div className='flex gap-1  items-center pr-[10px]'>
                                        <div className='w-[15px] h-[15px] rounded-full bg-[#003CFF]'></div>
                                        <h3 className='text-[13px] text-[#030621] font-normal font-poppins'>Human Resources</h3>
                                    </div> <h4 className='text-[12px] text-[#B7B7B7] w-[50px]'>121</h4>
                                    <h5 className='text-[12px] text-[#B7B7B7] w-[50px]'>qwrqwr</h5>
                                </div>
                            </tr>
                            <tr> <div className='flex  even:bg-[#F5F5F5] w-full p-3 rounded-md whitespace-nowrap gap-5'>
                                <div className='flex gap-1  items-center pr-[10px]'>
                                    <div className='w-[15px] h-[15px] rounded-full bg-[#00EDFF]'></div>
                                    <h3 className='text-[13px] text-[#030621] font-normal font-poppins'>Human Resources</h3>
                                </div> <h4 className='text-[12px] text-[#B7B7B7] w-[50px]'>121</h4>
                                <h5 className='text-[12px] text-[#B7B7B7] w-[50px]'>qwrqwr</h5>
                            </div></tr>
                            <tr>      <div className='flex  even:bg-[#F5F5F5] w-full p-3 rounded-md whitespace-nowrap gap-5'>
                                <div className='flex gap-1  items-center pr-[10px]'>
                                    <div className='w-[15px] h-[15px] rounded-full bg-[#FFA200]'></div>
                                    <h3 className='text-[13px] text-[#030621] font-normal font-poppins'>Human Resources</h3>
                                </div> <h4 className='text-[12px] text-[#B7B7B7] w-[50px]'>121</h4>
                                <h5 className='text-[12px] text-[#B7B7B7] w-[50px]'>qwrqwr</h5>
                            </div></tr>
                            <tr>
                                <div className='flex  even:bg-[#F5F5F5] w-full p-3 rounded-md whitespace-nowrap gap-5'>
                                    <div className='flex gap-1  items-center pr-[10px]'>
                                        <div className='w-[15px] h-[15px] rounded-full bg-[#E61F1F]'></div>
                                        <h3 className='text-[13px] text-[#030621] font-normal font-poppins'>Human Resources</h3>
                                    </div> <h4 className='text-[12px] text-[#B7B7B7] w-[50px]'>121</h4>
                                    <h5 className='text-[12px] text-[#B7B7B7] w-[50px]'>qwrqwr</h5>
                                </div>
                            </tr>
                        </tbody>
                    </table>






                </div>
            </div>
        </>
    )
}
