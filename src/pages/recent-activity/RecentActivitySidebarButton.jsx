import React, { useState } from 'react';
import './recentactivity.css'; // For styling
import Details from "./ButtonsData/Details";
import Signals from "./ButtonsData/Signals"
import RelatedComponents from "./ButtonsData/RelatedComp"
import Deals from "./ButtonsData/Deals";
const RecentActivitySidebarButton = () => {
    const buttons = [
        { id: 1, label: 'Details', data:<Details/> },
        { id: 2, label: 'Deals', data:<Deals/> },
        { id: 3, label: 'Related Components', data: <RelatedComponents/> },
        { id: 4, label: 'Signals', data:<Signals/> },
     
      ];
  const [activeButton, setActiveButton] = useState(buttons[0].id);
  const [data, setData] = useState(buttons[0].data);

 

  const handleButtonClick = (button) => {
    setActiveButton(button.id);
    setData(button.data);
  };

  return (
    <div>
            <div className="bg-[#F5F5F5] mt-2 rounded-[10px] w-full">
            <div  className='pb-0 whitespace-nowrap overflow-x-scroll hide-scrollbar rounded-md'>
        {buttons.map((button) => (
          <button className='text-[13px] font-medium font-poppins px-3 p-2'
            key={button.id}
            onClick={() => handleButtonClick(button)}
            style={{
              backgroundColor: activeButton === button.id ? 'black' : '#f5f5f5',
              color: activeButton===button.id ? 'white' : 'black',
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

export default RecentActivitySidebarButton;
