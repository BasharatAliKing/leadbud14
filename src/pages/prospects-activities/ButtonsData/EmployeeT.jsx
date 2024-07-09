import React, { useState } from 'react'
import Retentation from './Retentation';
import Department from './Department';
import Locations from './Locations';
export default function EmployeeT() {
  const [activeT,setActiveT]=useState(2);
  return (
    <>
    <div>
      <div className='flex gap-4 mt-3 p-5 w-full justify-center items-center'>
        <h3 className='font-medium text-[14px] text-[#030621]'>Total Count:</h3>
        <button onClick={()=>{setActiveT(1)}} style={{backgroundColor:activeT===1? '#F5F5F5': activeT===0? '#F5F5F5': '', color:activeT===1 ?'#5BF449': activeT===0?'#5BF449' :'#030621',fontWeight:activeT===1?'bold':activeT===0?'bold' :''}} className='text-[14px] bg-[] p-2 px-3 rounded-md'>Retentation</button>
        <button onClick={()=>{setActiveT(2)}} style={{backgroundColor:activeT===2? '#F5F5F5':'', color:activeT===2 ?'#5BF449':'#030621',fontWeight:activeT===2?'bold':''}} className='text-[14px] bg-[] p-2 px-3 rounded-md'>Department</button>
        <button onClick={()=>{setActiveT(3)}} style={{backgroundColor:activeT===3? '#F5F5F5':'', color:activeT===3 ?'#5BF449':'#030621',fontWeight:activeT===3?'bold':''}} className='text-[14px] bg-[] p-2 px-3 rounded-md'>Locations</button>
      </div>
      <div>
        {activeT===0 ? <Retentation/>: activeT===1 ? <Retentation/>: activeT===2 ?<Department/> : activeT===3 ? <Locations/> : null}
      </div>
    </div>
    </>
  )
}
