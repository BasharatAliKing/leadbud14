import React, { useState } from 'react';
import './prospectsactivity.css'; // For styling
import { FaUsersCog } from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import Technologies from './ButtonsData/Technologies';
import Funding from './ButtonsData/Funding';
import JobPostings from './ButtonsData/JobPostings';
import News from './ButtonsData/News';
import EmployeeT from './ButtonsData/EmployeeT';
const ButtonComponent = () => {
    const buttons = [
        { id: 1, logo:<GrTechnology/>, label: 'Technologies', data: <Technologies/> },
        { id: 2, logo:<FaSackDollar/> , label: 'Funding Rounds', data: <Funding/> },
        { id: 3, logo:<IoBagHandleOutline/> , label: 'Job Posting', data: <JobPostings/> },
        { id: 4, logo:<FaRadio/> , label: 'News', data: <News/> },
        { id: 5, logo:<FaUsersCog/> , label: 'Employee Trends', data:<EmployeeT/> },
      ];
  const [activeButton, setActiveButton] = useState(buttons[0].id);
  const [data, setData] = useState(buttons[0].data);

 

  const handleButtonClick = (button) => {
    setActiveButton(button.id);
    setData(button.data);
  };

  return (
    <div>
            <div className='w-full '>
            <div className='flex overflow-x-scroll hide-scrollbar w-full bg-[#F5F5F5] rounded-md'> 
        {buttons.map((button) => (
          <button className='flex items-center gap-1 py-4 px-5 text-[#030621] font-medium font-poppins text-[14px]'
            key={button.id}
            onClick={() => handleButtonClick(button)}
            style={{
              backgroundColor: activeButton === button.id ? '#56F444' : '#F5F5F5',
            }}
          >
           {button.logo} {button.label}
          </button>
        ))}
   
      </div>
      </div>

      <div className="data-display">
        {data && <p>{data}</p>}
      </div>
    </div>
  );
};

export default ButtonComponent;
