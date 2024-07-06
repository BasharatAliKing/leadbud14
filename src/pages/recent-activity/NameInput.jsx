import React,{useState} from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { PiPencilLight } from "react-icons/pi";
import { ImMoveUp } from "react-icons/im";
import { ImMoveDown } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
export default function NameInput() {
    const [hover,setHover]=useState(false);
    const [fname,setFname]=useState('Tina');
    const [lname,setLname]=useState('Z');
    const [nameinput,setNameinput]=useState(false);
    const [dotsmenu,setDotsmenu]=useState(false);
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
        <div className='relative'>  <HiDotsHorizontal onClick={()=>{setDotsmenu(!dotsmenu)}} className="text-[20px] text-[#030621]" /></div>
        {dotsmenu ? <>
          <ul className='absolute right-5 top-12 py-1 bg-[#F5F5F5]'>
            <li className='px-2 p-1 cursor-pointer duration-500 flex gap-1 items-center'><ImMoveUp /> Move to List</li>
            <li className='px-2 p-1 cursor-pointer duration-500 flex gap-1 items-center'><ImMoveDown /> Add to List</li>
            <li className='px-2 p-1 cursor-pointer duration-500 flex gap-1 items-center'><RiDeleteBin5Line /> Delete</li>
         </ul></> : null }
         </div>
       </>
        }
    </>
  )
}
