import React, { useState } from 'react';
import './recentactivity.css'; // For styling
import Details from "./ButtonsData/Details";
import Signals from "./ButtonsData/Signals"
import RelatedComponents from "./ButtonsData/RelatedComp"
import Deals from "./ButtonsData/Deals";
const RecentActivitySidebarButton = () => {
  const [show,setShow]=useState(true);

  return (
    <div>
            <div className="bg-[#F5F5F5] mt-2 rounded-[10px] w-full">
            <div  className='pb-0 whitespace-nowrap overflow-x-scroll hide-scrollbar rounded-md'>
     
          <button onClick={()=>{setShow(true)}} className='text-[13px] font-medium font-poppins p-2' style={{backgroundColor: show?'black':'', color:show?'white':''}}>Details</button>
          <button className='hover:cursor-not-allowed text-[13px] font-medium font-poppins p-2' style={{}}>Deals</button>
          <button className='hover:cursor-not-allowed text-[13px] font-medium font-poppins p-2' style={{}}>Related Companies</button>
          <button onClick={()=>{setShow(false)}} className='text-[13px] font-medium font-poppins p-2 mr-0' style={{backgroundColor: show?'':'black', color:show?'':'white'}}>Signals</button>
      </div>
      </div>
      <div className="data-display">
       {show? <Details/> : <Signals/>}
      </div>
    </div>
  );
};

export default RecentActivitySidebarButton;
