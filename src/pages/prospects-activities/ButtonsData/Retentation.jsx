import React from 'react'

export default function Retentation() {
  return (
    <>
    <div className='flex flex-col gap-3'>
      <h3 className='text-center text-[#030621] text-[16px] xl:text-[18px] font-medium font-poppins'>Employee Retention In The Past 2 Years</h3>
      <div className='relative flex flex-col gap-3 w-full overflow-x-auto hide-scrollbar'>
         <div className='flex gap-2 max-w-[10000px] w-full items-center'><h6 className='w-[50px] text-end'>300</h6> <div className='h-[2px] bg-[#D8D8D8] overflow-hidden w-full'></div> </div>
         <div className='flex gap-2 max-w-[10000px] w-full items-center'><h6 className='w-[50px] text-end'>200</h6> <div className='h-[2px] bg-[#D8D8D8] overflow-hidden w-full'></div> </div>
         <div className='flex gap-2 max-w-[10000px] w-full items-center'><h6 className='w-[50px] text-end'>100</h6> <div className='h-[2px] bg-[#D8D8D8] overflow-hidden w-full'></div> </div>
         <div className='flex gap-2 max-w-[10000px] w-full items-center'><h6 className='w-[50px] text-end'>0</h6> <div className='h-[2px] bg-[#D8D8D8] overflow-hidden w-full'></div> </div>
         <div className='flex gap-2 max-w-[10000px] w-full items-center'><h6 className='w-[50px] text-end'>-100</h6> <div className='h-[2px] bg-[#D8D8D8] overflow-hidden w-full'></div> </div>
         <div className='flex gap-2 max-w-[10000px] w-full items-center'><h6 className='w-[50px] text-end'>-200</h6> <div className='h-[2px] bg-[#D8D8D8] overflow-hidden w-full'></div> </div>
       </div>
       <div className='flex flex-wrap items-start md:justify-center gap-x-5 gap-1 '>
            <div className='flex gap-1 items-center'>
                <div className='h-[10px] w-[10px] rounded-full bg-[#56F444]'></div>
                <h3 className='text-[#030621] text-[13px] font-poppins'>New</h3>
            </div>
            <div className='flex gap-1 items-center'>
                <div className='h-[10px] w-[10px] rounded-full bg-[#7B7B7B]'></div>
                <h3 className='text-[#030621] text-[13px] font-poppins'>Churned</h3>
            </div>
            <div className='flex gap-1 items-center'>
                <div className='h-[10px] w-[10px] rounded-full bg-[#B7B7B7]'></div>
                <h3 className='text-[#030621] text-[13px] font-poppins'>Retained</h3>
            </div>
           
        </div>
    </div>
    </>
  )
}
