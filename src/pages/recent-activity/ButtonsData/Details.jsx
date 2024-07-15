import React, { useState, useRef } from 'react'
import { BiBuildings } from "react-icons/bi";
import { LuPlusCircle } from "react-icons/lu";
import { PiPencilLight } from "react-icons/pi";
import { TiWarningOutline } from "react-icons/ti";
import AddCompany from './AddCompany';
import { RiDeleteBin5Line } from "react-icons/ri";
import Companies from './companies';
export default function Details() {
  
   const handleCompanySaveBtn = (val)=>{
        setSaveCompanyBtn(val);
   }
   const [showmoretext, setShowMoreText] = useState('Show More');
   const [showmore, setShowMore] = useState(false);
   // const [email, setEmail] = useState('tina.z@snov-cctv.io');
    const [industry, setIndustry] = useState('Electric & Electronic');
    const [submitIndustry, setsubmitIndustry] = useState('Electric & Electronic');
   // const [country, setCountry] = useState('China');
   // const [location, setLocation] = useState('China');
   // const [work, setWork] = useState('---');
   // const [personal, setPersonal] = useState('---');
   const [submittedvalue,setSubmittedValue]=useState({
      email:"tina.z@snov-cctv.io", 
      industry:"Electric & Electronic",
      country:"China",
      location:"China",
      work:"---",
      personal:"---",
   })
   const [displayvalue,setDisplayValue]=useState({ 
      email:"tina.z@snov-cctv.io", 
      industry:"Electric & Electronic",
      country:"China",
      location:"China",
      work:"---",
      personal:"---",
   });
   const handleChangeSimple = (e)=>{
      const {name,value}=e.target;
      e.preventDefault();
      setDisplayValue({
         ...displayvalue,
           [name]:value,
      });
   }
   const handleSimpleSubmit=(e)=>{
      e.preventDefault();
      setSubmittedValue(displayvalue);
      setsubmitIndustry(industry);
      setSavebtn(false); setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false);
   }
   const handleDeleteIconClickemail =()=>{
       setDisplayValue({
         ...displayvalue,
         email:'',
       })
   }
   const handleDeleteIconClickcountry =()=>{
       setDisplayValue({
         ...displayvalue,
         country:'',
       })
   }
   const handleDeleteIconClicklocation =()=>{
       setDisplayValue({
         ...displayvalue,
         location:'',
       })
   }
   const handleDeleteIconClickwork =()=>{
       setDisplayValue({
         ...displayvalue,
         work:'',
       })
   }
   const handleDeleteIconClickpersonal =()=>{
       setDisplayValue({
         ...displayvalue,
         personal:'',
       })
   }
   const [savebtn, setSavebtn] = useState(false);
   const [companiesArrayData, setCompaniesArrayData] = useState([
      { company: 'Leadbud.io', jobPosition: 'Sales', website: 'https://www.leadbud.io', hqPhone: '' },
   ]);

   const [temData, settemData] = useState(null);
   // company,website,jobp,hqphone,objectIndex
   console.log(temData ," temp Data...");
   const updateCompanyData = () => {
      setCompaniesArrayData(prevCompaniesArrayData => {
         return prevCompaniesArrayData.map((company, i) =>
            i === temData.objectIndex ? { company: temData?.company, jobPosition: temData?.jobp, website: temData?.website, hqPhone: temData?.hqphone } : company
         );
      });
      settemData(null);
   };
   const updateCompanyArrayData = (newObjectData) => {
      setCompaniesArrayData([...companiesArrayData, newObjectData]);
   }
  // console.log(companiesArrayData);
   const [hover, setHover] = useState(false);
   const [hoverindustry, setHoverindustry] = useState(false);
   const [hovercountry, setHovercountry] = useState(false);
   const [hoverlocation, setHoverlocation] = useState(false);
   const [hoverwork, setHoverwork] = useState(false);
   const [hoverpersonal, setHoverpersonal] = useState(false);

   const [isEditableemail, setIsEditableemail] = useState(false);
   const [isEditableindustry, setIsEditableindustry] = useState(false);
   const [isEditablecountry, setIsEditablecountry] = useState(false);
   const [isEditabelocation, setIsEditabelocation] = useState(false);
   const [isEditablework, setIsEditabework] = useState(false);
   const [isEditablepersonal, setIsEditabepersonal] = useState(false);

   const [filteredSuggestions, setFilteredSuggestions] = useState([]);

   const [canceltoast, setCanceltoast] = useState(false);

   const [emailprevval, setEmailprev] = useState(false);
   const [industryprevval, setIndustryPrevval] = useState(false);
   const [countryprevval, setCountryPrevval] = useState(false);
   const [locationprevval, setLocationPrevval] = useState(false);
   const [workprevval, setWorkPrevval] = useState(false);
   const [personalprevval, setPersonalPrevval] = useState(false);

   const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

   const inputRefemail = useRef(null);  // Create a ref for the input element
   const inputRefindustry = useRef(null);
   const inputRefcountry = useRef(null);
   const inputReflocation = useRef(null);
   const inputRefwork = useRef(null);
   const inputRefpersonal = useRef(null);

   const handleIconClick = () => {
      setIsEditableemail(true); setIsEditableindustry(false); setIsEditablecountry(false); setIsEditabelocation(false); setIsEditabework(false); setIsEditabepersonal(false);
      setEmailprev(true);
      setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false);
      setTimeout(() => {
         if (inputRefemail.current) {
            inputRefemail.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClickindustry = () => {
      setIsEditableindustry(true); setIsEditableemail(false); setIsEditablecountry(false); setIsEditabelocation(false); setIsEditabework(false); setIsEditabepersonal(false);setIndustryPrevval(true);
      setEmailprev(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false);setPersonalPrevval(false);
      setTimeout(() => {
         if (inputRefindustry.current) {
            inputRefindustry.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClickcountry = () => {
      setIsEditableemail(false); setIsEditableindustry(false); setIsEditablecountry(true); setIsEditabelocation(false); setIsEditabework(false); setIsEditabepersonal(false);
      setCountryPrevval(true);
      setEmailprev(false); setIndustryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false);
      setTimeout(() => {
         if (inputRefcountry.current) {
            inputRefcountry.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClicklocation = () => {
      setIsEditableemail(false); setIsEditableindustry(false); setIsEditablecountry(false); setIsEditabelocation(true); setIsEditabework(false); setIsEditabepersonal(false);
      setLocationPrevval(true);
      setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setWorkPrevval(false); setPersonalPrevval(false);
      setTimeout(() => {
         if (inputReflocation.current) {
            inputReflocation.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClickwork = () => {
      setIsEditableemail(false); setIsEditableindustry(false); setIsEditablecountry(false); setIsEditabelocation(false); setIsEditabework(true); setIsEditabepersonal(false);
      setWorkPrevval(true);
      setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setPersonalPrevval(false);
      setTimeout(() => {
         if (inputRefwork.current) {
            inputRefwork.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClickpersonal = () => {
      setIsEditableemail(false); setIsEditableindustry(false); setIsEditablecountry(false); setIsEditabelocation(false); setIsEditabework(false); setIsEditabepersonal(true);
      setPersonalPrevval(true);
      setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false);
      setTimeout(() => {
         if (inputRefpersonal.current) {
            inputRefpersonal.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };



   // State to hold the array of input boxes
   const [inputBoxes, setInputBoxes] = useState([]);

  

   const showmoredata = () => {
      if (showmoretext == 'Show More') {
         setShowMore(true);
         setShowMoreText('Show Less');
      } else {
         setShowMore(false);
         setShowMoreText('Show More');
      }
   }
   const handleemailchange = (e) => {
      e.preventDefault();
      const value = e.target.value;
      setIndustry(value);
      if (value) {
         const filtered = suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(value.toLowerCase())
         );
         setFilteredSuggestions(filtered);
      } else {
         setFilteredSuggestions([]);
      }
   }
   const handleSuggestionClick = (suggestion) => {
      setIndustry(suggestion);
      setFilteredSuggestions([]);
   };

   return (
      <>
         {
            canceltoast ? <>
               <div className='custom-toast'>
                  <div className=' flex flex-col gap-1 bg-[#fefefe]  w-[300px] md:w-[400px] toaster rounded-xl shadow-xl p-5 z-10'>
                     <TiWarningOutline className='text-[100px] text-center w-full' />
                     <h3 className='text-[16px] md:text-[18px] text-[#000] font-medium '>Unsaved Changes</h3>
                     <p className='text-[12px]'>Are you sure you want to revert new changes in this  prospect file ? All unsaved changes will be lost</p>
                     <div className="flex gap-3 justify-center w-full mt-3">
                        <button onClick={() => { setCanceltoast(false); }} className="bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3">Revert Changes</button>
                        <button onClick={() => { setSavebtn(false); setEmail('tina.z@snov-cctv.io'); setIndustry('Electric & Electronic'); setCountry('China'); setLocation('China'); setWork('---'); setPersonal('---'); setCanceltoast(false) ; setSaveCompanyBtn(false) }} className="bg-[#d7d7d7] rounded-md text-[13px] xl:text-[15px] p-2 px-3">Cancel</button>
                     </div>
                  </div>
               </div>
            </> : null
         }
         {savebtn ?
            <div className="flex left-0 pl-16 sm:pl-20 z-[1] md:pl-24 p-2 w-full  md:w-[443px] bottom-0 bg-[#F5F5F5] fixed gap-3 ">
               <button onClick={handleSimpleSubmit} className="bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3">Save</button>
               <button onClick={() => { setCanceltoast(true); setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false); setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false) }} className="bg-[#fff] rounded-md text-[13px] xl:text-[15px] p-2 px-3">Cancel</button>
            </div>
            : null
         }
       
         <div className='flex flex-col gap-4'>

            <div className="">
               <div className="p-2 flex gap-2 hover:bg-[#F5F5F5] duration-300 md:gap-0 items-center ">
                  <h2 className="text-[13px] w-[100px] font-normal font-poppins">Email:</h2>
                  <div onClick={() => { setSavebtn(true) }} className=' flex flex-col gap-1 items-start w-full' onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false); }}>
                     {emailprevval ? <div className='flex w-full items-center gap-1'>
                        <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                        <h2 className='text-[12px]'>{submittedvalue.email}</h2>
                        <RiDeleteBin5Line onClick={handleDeleteIconClickemail} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                     </div> : null} 
                     <div className='flex items-center w-full relative'>
                        <input ref={inputRefemail} name="email" type="text" disabled={!isEditableemail} value={displayvalue.email} onChange={handleChangeSimple} className='bg-[#0000] text-[13px] border-0 focus:border focus:outline-none p-1 rounded-md font-normal font-poppins text-[#030621] w-full' />
                        {hover ? <PiPencilLight onClick={handleIconClick} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                     </div> </div>
               </div>
               <div className="p-2 flex flex-col  gap-2 md:gap-0 hover:bg-[#F5F5F5] duration-300 rounded-md">
                  <div className='flex gap-2 md:gap-0'>
                     <h2 className="text-[13px] w-[100px] mt-2 font-normal font-poppins">Industry:</h2>
                     <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1  w-full' onMouseEnter={() => { setHoverindustry(true) }} onMouseLeave={() => { setHoverindustry(false) }}>
                        {industryprevval ? <div className='flex items-center gap-1'>
                           <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                           <h2 className='text-[12px]'>{submitIndustry}</h2>
                           <RiDeleteBin5Line onClick={() => { setIndustry('') }} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                        </div> : null}
                        <div className='relative flex items-center w-full'>
                           <input ref={inputRefindustry} name="industry" type="text" disabled={!isEditableindustry} value={industry} onChange={handleemailchange} className=' border-0 focus:border focus:outline-none bg-[#fff] text-[13px] p-1 rounded-md outline-none bg-[#0000] font-normal font-poppins text-[#030621] w-full' />
                           {hoverindustry ? <PiPencilLight onClick={handleIconClickindustry} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                        </div>
                     </div>
                  </div>
                  {filteredSuggestions.length > 0 && (
                     <ul className="absolute mt-12  bg-[#fff] z-10 w-full ml-[70px] cursor-pointer  rounded-md ">
                        {filteredSuggestions.map((suggestion, index) => (
                           <li className='hover:bg-[#F5F5F5] duration-700 p-1 px-3 text-[14px]'
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                           >
                              {suggestion}
                           </li>
                        ))}
                     </ul>
                  )}

               </div>
               <div className="p-2 flex gap-2 hover:bg-[#F5F5F5] duration-300 md:gap-0 items-center  ">
                  <h2 className="text-[13px] w-[100px] font-normal font-poppins">Country:</h2>
                  <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1 w-full' onMouseEnter={() => { setHovercountry(true) }} onMouseLeave={() => { setHovercountry(false) }}>
                     {countryprevval ? <div className='flex items-center gap-1'>
                        <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                        <h2 className='text-[12px]'>{submittedvalue.country}</h2>
                        <RiDeleteBin5Line onClick={handleDeleteIconClickcountry} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                     </div> : null}
                     <div className='relative flex items-center '>
                        <input ref={inputRefcountry} name="country" type="text" disabled={!isEditablecountry} value={displayvalue.country} onChange={handleChangeSimple} className=' border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none font-normal font-poppins text-[#030621] w-full' />
                        {hovercountry ? <PiPencilLight onClick={handleIconClickcountry} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                     </div>
                  </div>
               </div>
               {
                  showmore ?
                     <>
                        <div className="p-2 flex hover:bg-[#F5F5F5] duration-300 gap-2 md:gap-0 items-center rounded-md">
                           <h2 className="text-[13px] w-[100px] font-normal font-poppins">Location:</h2>
                           <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1 w-full' onMouseEnter={() => { setHoverlocation(true) }} onMouseLeave={() => { setHoverlocation(false) }}>
                              {locationprevval ? <div className='flex items-center gap-1'>
                                 <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                                 <h2 className='text-[12px]'>{submittedvalue.location}</h2>
                                 <RiDeleteBin5Line onClick={handleDeleteIconClicklocation} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                              </div> : null}
                              <div className='relative flex items-center w-full'>
                                 <input ref={inputReflocation} name="location" type="text" disabled={!isEditabelocation} value={displayvalue.location} onChange={handleChangeSimple} className=' border-0 focus:border focus:outline-none bg-[#fff] text-[13px] p-1 rounded-md outline-none bg-[#0000] font-normal font-poppins text-[#030621] w-full' />
                                 {hoverlocation ? <PiPencilLight onClick={handleIconClicklocation} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                              </div>
                           </div>
                        </div>
                        <div className="p-2 flex hover:bg-[#F5F5F5] duration-300 gap-2 md:gap-0 items-center  ">
                           <h2 className="text-[13px] w-[100px] font-normal font-poppins">Work:</h2>
                           <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1 w-full' onMouseEnter={() => { setHoverwork(true) }} onMouseLeave={() => { setHoverwork(false) }}>
                              {workprevval ? <div className='flex items-center gap-1'>
                                 <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                                 <h2 className='text-[12px]'>{submittedvalue.work}</h2>
                                 <RiDeleteBin5Line onClick={handleDeleteIconClickwork} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                              </div> : null}
                              <div className='flex items-center relative w-full'>
                                 <input ref={inputRefwork} name="work" type="text" disabled={!isEditablework} value={displayvalue.work} onChange={handleChangeSimple} className=' border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none font-normal font-poppins text-[#030621] w-full' />
                                 {hoverwork ? <PiPencilLight onClick={handleIconClickwork} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                              </div>
                           </div>
                        </div>
                        <div className="p-2 flex hover:bg-[#F5F5F5] duration-300 gap-2 md:gap-0 items-center rounded-md">
                           <h2 className="text-[13px] w-[100px] font-normal font-poppins">Personal:</h2>
                           <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1 w-full' onMouseEnter={() => { setHoverpersonal(true) }} onMouseLeave={() => { setHoverpersonal(false); }}>
                              {personalprevval ? <div className='flex items-center gap-1'>
                                 <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                                 <h2 className='text-[12px]'>{submittedvalue.personal}</h2>
                                 <RiDeleteBin5Line onClick={handleDeleteIconClickpersonal} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                              </div> : null}
                              <div className='flex relative items-center w-full'>
                                 <input ref={inputRefpersonal} name="personal" type="text" disabled={!isEditablepersonal} value={displayvalue.personal} onChange={handleChangeSimple} className='border-0 focus:border focus:outline-none bg-[#fff] text-[13px] p-1 rounded-md outline-none bg-[#0000] font-normal font-poppins text-[#030621] w-full' />
                                 {hoverpersonal ? <PiPencilLight onClick={handleIconClickpersonal} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                              </div>
                           </div>
                        </div>
                     </> : ''
               }

               <p onClick={showmoredata} className='text-center text-[14px] font-normal cursor-pointer mt-2 text-[#56f444]'>{showmoretext}</p>

            </div>
            <div className="flex items-center gap-1 text-[#B7B7B7] text-[14px] xl:text-[16px]">
               <BiBuildings /><h2>Employement</h2>
            </div>
            <div className="">
               {companiesArrayData.map((val, index) => {
                  return (
                     <Companies updateCompanyData={updateCompanyData} handleCompanybtn={handleCompanySaveBtn} updateData={(company, website, jobp, hqphone, objectIndex) => { settemData({ company, website, jobp, hqphone, objectIndex }) }} key={index} objectIndex={index} companyValue={val.company} websiteValue={val.website} jobPositionValue={val.jobPosition} hqPhoneValue={val.hqPhone} dataLength={companiesArrayData.length} />
                  )
               })}
            </div>

            <AddCompany updateArrayData={updateCompanyArrayData} />
         </div>
      </>
   )
}
