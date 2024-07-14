import React, { useState } from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { PiPencilLight } from "react-icons/pi";
import { ImMoveUp } from "react-icons/im";
import { ImMoveDown } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./recentactivity.css";
import { IoIosRefresh } from "react-icons/io";
export default function NameInput({load}) {
  const [hover, setHover] = useState(false);
  const [fname, setFname] = useState('Tina');
  const [lname, setLname] = useState('Z');
  const [nameinput, setNameinput] = useState(false);
  const [dotsmenu, setDotsmenu] = useState(false);
  const [submenu, setSubmenu] = useState(0);
  const [deletetoast, setDeletetoast] = useState(false);
  const Nameformsubmit = () => {
    setNameinput(false);
  }
  const movetolist = [
    'jawad@gmail.com',
    'jawad@gmail.com',
    'jawad@gmail.com',
    'jawad@gmail.com',
    'jawad@gmail.com',
    'jawad@gmail.com',
  ]
  const addtolist = [
    'umer@gmail.com',
    'umer@gmail.com',
    'umer@gmail.com',
    'umer@gmail.com',
    'umer@gmail.com',
    'umer@gmail.com',
    'umer@gmail.com',
  ]
  return (
    <>
      {

        deletetoast ? <>
          <div className='custom-toast'>
            <div className=' flex flex-col gap-3 bg-[#fefefe] w-[300px] toaster rounded-xl shadow-xl p-5 z-10'>
              <RiDeleteBin5Line className='text-[100px] text-center w-full' />
              <h3 className='text-[16px] md:text-[18px] text-[#000] font-medium '>Are You Sure ?</h3>
              <div className="flex gap-3 justify-center w-full">
                <button onClick={() => { setDeletetoast(false) }} className="bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3">Delete</button>
                <button onClick={() => { setDeletetoast(false) }} className="bg-[#d7d7d7] rounded-md text-[13px] xl:text-[15px] p-2 px-3">Cancel</button>
              </div>
            </div>
          </div>
        </> : null
      }

      {
        nameinput ?
          <form onSubmit={Nameformsubmit} className='flex flex-col gap-3 bg-[#F5F5F5] p-3'>
            <div className='flex gap-2 '>
              <div>
                <h4>First Name:</h4>
                <input type="text" className='w-full rounded-md bg-[#fff] p-1 outline-none' onChange={(e) => { setFname(e.target.value) }} value={fname} />
              </div>
              <div>
                <h4>Last Name:</h4>
                <input type="text" className='w-full rounded-md bg-[#fff] p-1 outline-none' onChange={(e) => { setLname(e.target.value) }} value={lname} />
              </div>
            </div>
            <div>
              <h4>Full Name:</h4>
              <input type="text" className='w-full rounded-md bg-[#fff] p-1 outline-none' onChange={(e) => { setLname(e.target.value) }} value={fname + " " + lname} />
            </div>
            <button className='bg-[#56F444] rounded-md px-3 p-1 text-[#000] mr-auto'>Save</button>
          </form> : <>
            <div className="flex justify-between items-center">
              <h3 onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className="flex items-center text-[#030621] text-[18px] md:text-[22px] font-semibold font-poppins cursor-pointer">{fname + " " + lname}  {hover ? <PiPencilLight onClick={() => { setNameinput(true) }} className='text-[#B7B7B7] ml-2' /> : null}</h3>
              <div className='relative flex gap-2 items-center'>
                <IoIosRefresh onClick={()=>{load(true)}} className='cursor-pointer' />
                <HiDotsHorizontal onClick={() => { setSubmenu(0); setDotsmenu(!dotsmenu) }} className="text-[20px] text-[#030621]" />

              </div>
              {dotsmenu ? <>
                <ul className='absolute right-5 top-12 py-1 bg-[#F5F5F5]'>
                  <li onClick={() => { setSubmenu(1) }} className='px-2 p-1 cursor-pointer duration-500 flex gap-1 items-center'><ImMoveUp /> Move to List</li>
                  <li onClick={() => { setSubmenu(2) }} className='px-2 p-1 cursor-pointer duration-500 flex gap-1 items-center'><ImMoveDown /> Add to List</li>
                  <li onClick={() => { setDotsmenu(false); setDeletetoast(true) }} className='px-2 p-1 cursor-pointer duration-500 flex gap-1 items-center'><RiDeleteBin5Line /> Delete</li>
                </ul>
                <ul className='tolist absolute right-5 top-12 z-10  bg-[#F5F5F5] max-h-[250px] overflow-y-scroll'>
                  {submenu === 0 ? null :
                    submenu == 1 ? <>
                      <div className='flex flex-col gap-2 p-3 '>
                        <div c>
                          <h3>Move to List</h3>
                        </div>
                        <hr />
                        {
                          movetolist.map((move) => {
                            return (
                              <li className='px-2 p-1 cursor-pointer duration-500 flex gap-1 items-center'>{move}</li>

                            )
                          })
                        }
                      </div>
                    </> : submenu === 2 ? <>
                      <div className='flex flex-col gap-2 p-3'>
                        <div className='flex justify-between items-center gap-10'>
                          <h3>Add to List</h3> <button className='shadow-md p-2 bg-[#fff] font-semibold text-[#000] rounded-md'>Create</button>
                        </div>
                        <hr />
                        {
                          addtolist.map((move) => {
                            return (
                              <li className='px-2 p-1 cursor-pointer duration-500 flex gap-1 items-center'>{move}</li>

                            )
                          })
                        }
                      </div>
                    </> : null
                  }
                </ul>

              </> : null}
            </div>
          </>
      }
    </>
  )
}
