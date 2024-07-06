import React,{useState} from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { PiPencilLight } from "react-icons/pi";
export default function NameInput() {
    const [hover,setHover]=useState(false);
    const [fname,setFname]=useState('Tina');
    const [lname,setLname]=useState('Z');
    const [nameinput,setNameinput]=useState(false);
    const Nameformsubmit =()=>{
        setNameinput(false);
    }
  return (
    <>


        {
         nameinput?
         <form onSubmit={Nameformsubmit} className='flex flex-col gap-3 bg-[#F5F5F5] p-3'>
         <div className='flex gap-2 '>
         <div>
          <h4>First Name:</h4>
         <input type="text" className='w-full rounded-md bg-[#fff] p-1 outline-none' onChange={(e)=>{setFname(e.target.value)}} value={fname} />
         </div>
         <div>
            <h4>Last Name:</h4>
          <input type="text" className='w-full rounded-md bg-[#fff] p-1 outline-none' onChange={(e)=>{setLname(e.target.value)}} value={lname} />
         </div>
         </div>
         <div>
            <h4>Full Name:</h4>
          <input type="text" className='w-full rounded-md bg-[#fff] p-1 outline-none' onChange={(e)=>{setLname(e.target.value)}} value={fname+" "+lname} />
         </div>
         <button className='bg-[#56F444] rounded-md px-3 p-1 text-[#000] mr-auto'>Save</button>
       </form>:  <>
       <div className="flex justify-between items-center">
       <h3 onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className="flex items-center text-[#030621] text-[18px] md:text-[22px] font-semibold font-poppins cursor-pointer">{fname +" "+ lname}  {hover?<PiPencilLight onClick={()=>{setNameinput(true)}} className='text-[#B7B7B7] ml-2' />: null}</h3>
       <HiDotsHorizontal className="text-[20px] text-[#030621]" />
         </div>
       </>
        }
    </>
  )
}
