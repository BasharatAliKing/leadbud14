import React, {useState} from 'react'
import { MdExpandMore } from "react-icons/md";
import flag from '../assets/images/flag.png' 
import useDropdown from '../hooks/useDropdown';

const Selector = () => {

 const {isOpen, toggleDropdown, dropdownRef} = useDropdown();
  


    const liItems = [
      {
        title: 'Spanish',
      },
      {
        title: 'German',
      },
      {
        title: 'Arabic',
      },

    ]


  return (
    <div className='w-100 mr-[10px]' ref={dropdownRef}>
        <div className='bg-white flex items-center justify-between cursor-pointer relative' onClick={toggleDropdown}>
            <img src={flag} alt="flag" className='mr-[18px]'/>
            English (US)
            <MdExpandMore size={20}  className='text[#7B7B7B] mr-[10px]' />

            </div>

            {isOpen && (
                <ul className='absolute bg-white w-[160px] mt-2 shadow-xl rounded-xl'>
                    {
                      liItems.map((item, index) => (
                        <li key={index} className='rounded-xl mt-1 p-1 text-mygray cursor-pointer w-100 hover:bg-green hover:text-white'>{item.title}</li>
                      ))
                    }
                </ul>
            )}





    </div>
  )
}

export default Selector