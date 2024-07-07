import React, { useState } from 'react';
import './prospectsactivity.css'; // For styling
import { FaUsersCog } from "react-icons/fa";
import { FaR, FaRadio } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import Technologies from './ButtonsData/Technologies';
import Funding from './ButtonsData/Funding';
import JobPostings from './ButtonsData/JobPostings';
import News from './ButtonsData/News';
import EmployeeT from './ButtonsData/EmployeeT';
const ButtonComponent = () => {
  const [btnclick,setBtnclick]=useState(0);

  return (
    <div>
            <div className='w-full '>
            <div className='flex overflow-x-scroll hide-scrollbar w-full bg-[#F5F5F5] rounded-md'> 
         
          <button style={{backgroundColor: btnclick===1 ? '#56f444': btnclick===0 ? '#56f444' : '' }} onClick={()=>{setBtnclick(1)}} className='prosbtn flex items-center gap-1 py-2 px-3 md:py-4  text-[#030621] font-medium font-poppins text-[13px]'><GrTechnology/> Technology</button>
          <button style={{backgroundColor: btnclick===2 ? '#56f444':''}} onClick={()=>{setBtnclick(2)}} className='prosbtn flex items-center gap-1 py-2 px-3 md:py-4  text-[#030621] font-medium font-poppins text-[13px]'><FaSackDollar/> Funding Rounds</button>
          <button style={{backgroundColor: btnclick===3 ? '#56f444':''}} onClick={()=>{setBtnclick(3)}} className='prosbtn flex items-center gap-1 py-2 px-3 md:py-4  text-[#030621] font-medium font-poppins text-[13px]'><IoBagHandleOutline/> Job Posting</button>
          <button style={{backgroundColor: btnclick===4 ? '#56f444':''}} onClick={()=>{setBtnclick(4)}} className='prosbtn flex items-center gap-1 py-2 px-3 md:py-4  text-[#030621] font-medium font-poppins text-[13px]'><FaRadio/> News</button>
          <button  className='prosbtn flex items-center gap-1 py-2 px-3 md:py-4  text-[#030621] font-medium font-poppins text-[13px]'><FaUsersCog/> Employee Trends</button>
      </div>
      </div>
       {
        btnclick===0 ? <Technologies/> : btnclick===1 ? <Technologies/> : btnclick ===2 ? <Funding/> : btnclick===3 ? <JobPostings/> : btnclick===4 ? <News/> : null
       }

    </div>
  );
};

export default ButtonComponent;
