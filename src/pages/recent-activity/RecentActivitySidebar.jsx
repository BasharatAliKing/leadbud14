import React,{useState,useEffect} from 'react'
import { GoTag } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import RecentActivitySidebarButton from "./RecentActivitySidebarButton"
import "./recentactivity.css";
import NameInput from './NameInput';
import FadeLoader from "react-spinners/FadeLoader";
export default function RecentActivitySidebar() {
   const [loading,setLoading]=useState(false);
   const handleNavbarClick=(value)=>{
     setLoading(value);
     setTimeout(()=>{
       setLoading(false)
     },1000)
   }
   
   useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
       setLoading(false)
     },1000);
   },[]);

   return (
      <>
     
         <div id='recentmainsidebar' className="p-3 md:p-5 relative  flex flex-col gap-2">
       {loading ? 
       <div className='flex h-screen justify-center items-center'><FadeLoader  color="#56F444" /></div>
       :
           <>
            <NameInput load={handleNavbarClick} />
            <div className="flex gap-1 items-center">
               <GoTag className="text-sm text-[#B7B7B7]" />
               <h3 className="text-[#B7B7B7] text-[15px] font-normal font-poppins">Manage tags</h3>
            </div>
            <div className="flex gap-1 justify-between items-center">
               <div className="flex gap-5 mt-2 items-center">
                  <h2 className="text-[#030621] text-[16px] font-medium font-poppins">List:</h2>
                  <h2 className="text-[#56F444] text-[16px] font-medium font-poppins">Test 2</h2>
                  <TiSocialLinkedin className="border rounded-full text-[#030621] p-[2px] text-[25px]" />
               </div>
               <IoMdSettings className="text-[18px] text-[#B7B7B7]" />
            </div>
            <RecentActivitySidebarButton />
           </>
         }
         </div>
      </>
   )
}
