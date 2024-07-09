import React, { useState } from 'react'
import Retentation from './Retentation';
import Department from './Department';
import Locations from './Locations';
import TotalCount from './TotalCount';

export default function EmployeeT() {
  const [activeT,setActiveT]=useState(0);
  return (
    <>
    <div>
      <div className='flex gap-2 md:gap-4 mt-3 p-5 w-full sm:justify-center whitespace-nowrap items-center overflow-x-auto'>
       <button onClick={()=>{setActiveT(1)}} style={{backgroundColor:activeT===1? '#F5F5F5': activeT===0? '#F5F5F5': '', color:activeT===1 ?'#5BF449': activeT===0?'#5BF449' :'#030621',fontWeight:activeT===1?'bold':activeT===0?'bold' :''}} className='text-[14px] bg-[] p-2 px-3 rounded-md'>Total Count</button>
        <button onClick={()=>{setActiveT(2)}} style={{backgroundColor:activeT===2? '#F5F5F5':  '', color:activeT===2 ?'#5BF449' :'#030621',fontWeight:activeT===2?'bold':''}} className='text-[14px] bg-[] p-2 px-3 rounded-md'>Retentation</button>
        <button onClick={()=>{setActiveT(3)}} style={{backgroundColor:activeT===3? '#F5F5F5':'', color:activeT===3 ?'#5BF449':'#030621',fontWeight:activeT===3?'bold':''}} className='text-[14px] bg-[] p-2 px-3 rounded-md'>Department</button>
        <button style={{backgroundColor:activeT===4? '#F5F5F5':'', color:activeT===4 ?'#5BF449':'#030621',fontWeight:activeT===4?'bold':''}} className='text-[14px] bg-[] p-2 px-3 rounded-md'>Locations</button>
      </div>
      <div>
        {activeT===0 ? <TotalCount/>: activeT===1? <TotalCount/> : activeT===2 ? <Retentation/>: activeT===3 ?<Department/> : activeT===4 ? <Locations/> : null}
      </div>
    </div>
    </>
  )
}
