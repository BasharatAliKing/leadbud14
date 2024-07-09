import React from 'react';
import "./Department.css";
import Circle from './Circle';
export default function Department() {
    const percentages = [20, 45, 15, 10, 10]; // Adjust these values as needed  const percentages = [20, 20, 20, 20, 20]; // Adjust these values as needed
    const text='3,360 Apr 2024';
  return (
    <>
    <div className='flex flex-col md:flex-row gap-3 w-full'>
<div className='md:w-1/2'>
<h3 className='text-[#030621] text-[15px] md:text-[16px] xl:text-[18px] font-semibold '>Functional Distrubution</h3>
<div className=''>
<Circle percentages={percentages} text={text} />
</div>
</div>
<div className='md:w-1/2'></div>
    </div>
    </>
  )
}
