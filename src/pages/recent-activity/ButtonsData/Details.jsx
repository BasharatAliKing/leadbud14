import React, { useState, useRef } from 'react'
import { BiBuildings } from "react-icons/bi";
import { LuPlusCircle } from "react-icons/lu";
import { PiPencilLight } from "react-icons/pi";
import { TiWarningOutline } from "react-icons/ti";
import AddCompany from './AddCompany';
import { RiDeleteBin5Line } from "react-icons/ri";
export default function Details() {
   const [showmoretext, setShowMoreText] = useState('Show More');
   const [showmore, setShowMore] = useState(false);
   const [email, setEmail] = useState('tina.z@snov-cctv.com');
   const [industry, setIndustry] = useState('Electric & Electronic');
   const [country, setCountry] = useState('China');
   const [location, setLocation] = useState('China');
   const [work, setWork] = useState('---');
   const [personal, setPersonal] = useState('---');
   const [company, setCompany] = useState('Leadbud.io');
   const [jobp, setJobp] = useState('Sales');
   const [website, setWebsite] = useState('https://www.leadbud.io');
   const [hqphone, setHqphone] = useState('---');
   const [savebtn, setSavebtn] = useState(false);


   const [hover, setHover] = useState(false);
   const [hoverindustry, setHoverindustry] = useState(false);
   const [hovercountry, setHovercountry] = useState(false);
   const [hoverlocation, setHoverlocation] = useState(false);
   const [hoverwork, setHoverwork] = useState(false);
   const [hoverpersonal, setHoverpersonal] = useState(false);
   const [hovercompany, setHoverCompany] = useState(false);
   const [hoverjobp, setHoverjobp] = useState(false);
   const [hoverwebsite, setHoverwebsite] = useState(false);
   const [hoverhqphone, setHoverhqphone] = useState(false);
   const [isEditableemail, setIsEditableemail] = useState(false);
   const [isEditableindustry, setIsEditableindustry] = useState(false);
   const [isEditablecountry, setIsEditablecountry] = useState(false);
   const [isEditabelocation, setIsEditabelocation] = useState(false);
   const [isEditablework, setIsEditabework] = useState(false);
   const [isEditablepersonal, setIsEditabepersonal] = useState(false);
   const [isEditablecompany, setIsEditabecompany] = useState(false);
   const [isEditablejobp, setIsEditabejobp] = useState(false);
   const [isEditablewebsite, setIsEditablewebsite] = useState(false);
   const [isEditablehqphone, setIsEditablehqphone] = useState(false);
   const [inputs, setInputs] = useState([]);
   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
   const [filteredSuggestionscompany, setFilteredSuggestionscompany] = useState([]);
   const [canceltoast, setCanceltoast] = useState(false);

   const [emailprevval, setEmailprev] = useState(false);
   const [industryprevval, setIndustryPrevval] = useState(false);
   const [countryprevval, setCountryPrevval] = useState(false);
   const [locationprevval, setLocationPrevval] = useState(false);
   const [workprevval, setWorkPrevval] = useState(false);
   const [personalprevval, setPersonalPrevval] = useState(false);
   const [compprevval, setCompPrevval] = useState(false);
   const [websiteprevval, setWebsitePrevval] = useState(false);
   const [jobpprevval, setJobpPrevval] = useState(false);
   const [hqphoneprevval, setHqphonePrevval] = useState(false);

   const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];
   const Companysuggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

   const inputRefemail = useRef(null);  // Create a ref for the input element
   const inputRefindustry = useRef(null);
   const inputRefcountry = useRef(null);
   const inputReflocation = useRef(null);
   const inputRefwork = useRef(null);
   const inputRefpersonal = useRef(null);
   const inputRefcompany = useRef(null);
   const inputRefwebsite = useRef(null);
   const inputRefjobposition = useRef(null);
   const inputRefhqphone = useRef(null);

   const handleIconClick = () => {
      setIsEditableemail(true);
      setEmailprev(true);
      setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false); setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false)
      setTimeout(() => {
         if (inputRefemail.current) {
            inputRefemail.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClickindustry = () => {
      setIsEditableindustry(true);
      setIndustryPrevval(true);
      setEmailprev(false);
     setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false); setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false)
      setTimeout(() => {
         if (inputRefindustry.current) {
            inputRefindustry.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClickcountry = () => {
      setIsEditablecountry(true);
      setCountryPrevval(true);
      setEmailprev(false); setIndustryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false); setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false)
      setTimeout(() => {
         if (inputRefcountry.current) {
            inputRefcountry.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClicklocation = () => {
      setIsEditabelocation(true);
      setLocationPrevval(true);
      setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setWorkPrevval(false); setPersonalPrevval(false); setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false)
      setTimeout(() => {
         if (inputReflocation.current) {
            inputReflocation.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClickwork = () => {
      setIsEditabework(true);
      setWorkPrevval(true);
      setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setPersonalPrevval(false); setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false)
      setTimeout(() => {
         if (inputRefwork.current) {
            inputRefwork.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClickpersonal = () => {
      setIsEditabepersonal(true);
      setPersonalPrevval(true);
      setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false)
      setTimeout(() => {
         if (inputRefpersonal.current) {
            inputRefpersonal.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClickcompany = () => {
      setIsEditabecompany(true);
      setCompPrevval(true);
      setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false); setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false)
      setTimeout(() => {
         if (inputRefcompany.current) {
            inputRefcompany.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClickwebsite = () => {
      setIsEditablewebsite(true);
      setWebsitePrevval(true);
      setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false); setCompPrevval(false); setJobpPrevval(false); setHqphonePrevval(false)
      setTimeout(() => {
         if (inputRefwebsite.current) {
            inputRefwebsite.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClickjobposition = () => {
      setIsEditabejobp(true);
      setJobpPrevval(true);
      setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false); setCompPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false)
      setTimeout(() => {
         if (inputRefjobposition.current) {
            inputRefjobposition.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };
   const handleIconClickhqphone = () => {
      setIsEditablehqphone(true);
      setHqphonePrevval(true);
      setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false); setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false);
      setTimeout(() => {
         if (inputRefhqphone.current) {
            inputRefhqphone.current.focus();  // Focus the input element when the icon is clicked
         }
      }, 0);
   };


   // State to hold the array of input boxes
   const [inputBoxes, setInputBoxes] = useState([]);

   // Function to add a new input box
   const addInputBox = () => {
      setInputBoxes([...inputBoxes, { id: inputBoxes.length }]);
   };

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
   const handlecompanychange = (e) => {
      e.preventDefault();
      const value = e.target.value;
      setCompany(value);
      if (value) {
         const filtered = Companysuggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(value.toLowerCase())
         );
         setFilteredSuggestionscompany(filtered);
      } else {
         setFilteredSuggestionscompany([]);
      }
   }

   const handleSuggestionClickcompany = (suggestion) => {
      setCompany(suggestion);
      setFilteredSuggestionscompany([]);
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
                        <button onClick={() => { setCanceltoast(false) }} className="bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3">Revert Changes</button>
                        <button onClick={() => { setCanceltoast(false) }} className="bg-[#d7d7d7] rounded-md text-[13px] xl:text-[15px] p-2 px-3">Cancel</button>
                     </div>
                  </div>
               </div>
            </> : null
         }
         {savebtn ?
            <div className="flex left-0 pl-16 sm:pl-20 z-[1] md:pl-24 p-2 w-full  md:w-[443px] bottom-0 bg-[#F5F5F5] fixed gap-3 ">
               <button onClick={() => { setSavebtn(false); setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false); setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false) }} className="bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3">Save</button>
               <button onClick={() => { setSavebtn(false); setCanceltoast(true) ; setEmailprev(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false); setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false) }} className="bg-[#fff] rounded-md text-[13px] xl:text-[15px] p-2 px-3">Cancel</button>
            </div>
            : null
         }
         <div className='flex flex-col gap-4'>

            <div className="">
               <div className="p-2 flex gap-2 hover:bg-[#F5F5F5] duration-300 md:gap-0 items-center ">
                  <h2 className="text-[13px] w-[100px] font-normal font-poppins">Email:</h2>
                  <div onClick={() => { setSavebtn(true) }} className=' flex flex-col gap-1 items-start w-full' onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false); setIndustryPrevval(false); setCountryPrevval(false); setLocationPrevval(false); setWorkPrevval(false); setPersonalPrevval(false); setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false) }}>
                     {emailprevval ? <div className='flex w-full items-center gap-1'>
                        <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                        <h2 className='text-[12px]'>tina@snov-cctv.io</h2>
                        <RiDeleteBin5Line onClick={()=>{setEmail('')}} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                     </div> : null}
                     <div className='flex items-center w-full relative'>
                        <input ref={inputRefemail} type="text" disabled={!isEditableemail} value={email} onChange={() => { setEmail() }} className='bg-[#0000] text-[13px] border-0 focus:border focus:outline-none p-1 rounded-md font-normal font-poppins text-[#030621] w-full' />
                        {hover ? <PiPencilLight onClick={handleIconClick} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                     </div> </div>
               </div>
               <div className="p-2 flex flex-col  gap-2 md:gap-0 hover:bg-[#F5F5F5] duration-300 rounded-md">
                  <div className='flex gap-2 md:gap-0'>
                     <h2 className="text-[13px] w-[100px] mt-2 font-normal font-poppins">Industry:</h2>
                     <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1  w-full' onMouseEnter={() => { setHoverindustry(true) }} onMouseLeave={() => {  setHoverindustry(false); }}>
                        {industryprevval ? <div className='flex items-center gap-1'>
                           <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                           <h2 className='text-[12px]'>Electric & Electronic</h2>
                           <RiDeleteBin5Line onClick={()=>{setIndustry('')}} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                        </div> : null}
                        <div className='relative flex items-center w-full'>
                           <input ref={inputRefindustry} type="text" disabled={!isEditableindustry} value={industry} onChange={handleemailchange} className=' border-0 focus:border focus:outline-none bg-[#fff] text-[13px] p-1 rounded-md outline-none bg-[#0000] font-normal font-poppins text-[#030621] w-full' />
                           {hoverindustry ? <PiPencilLight onClick={handleIconClickindustry} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                        </div>
                     </div>
                  </div>
                  {filteredSuggestions.length > 0 && (
                     <ul className="absolute mt-7 bg-[#fff] z-10 w-full ml-[70px] cursor-pointer  rounded-md ">
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
                  <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1 w-full' onMouseEnter={() => { setHovercountry(true) }} onMouseLeave={() => {setHovercountry(false) }}>
                     {countryprevval ? <div className='flex items-center gap-1'>
                        <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                        <h2 className='text-[12px]'>China</h2>
                        <RiDeleteBin5Line onClick={()=>{setCountry('')}} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                     </div> : null}
                     <div className='relative flex items-center '>
                        <input ref={inputRefcountry} type="text" disabled={!isEditablecountry} value={country} onChange={(e) => { setCountry() }} className=' border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none font-normal font-poppins text-[#030621] w-full' />
                        {hovercountry ? <PiPencilLight onClick={handleIconClickcountry} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                     </div>
                  </div>
               </div>
               {
                  showmore ?
                     <>
                        <div className="p-2 flex hover:bg-[#F5F5F5] duration-300 gap-2 md:gap-0 items-center rounded-md">
                           <h2 className="text-[13px] w-[100px] font-normal font-poppins">Location:</h2>
                           <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1 w-full' onMouseEnter={() => { setHoverlocation(true) }} onMouseLeave={() => {setHoverlocation(false) }}>
                              {locationprevval ? <div className='flex items-center gap-1'>
                                 <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                                 <h2 className='text-[12px]'>China</h2>
                                 <RiDeleteBin5Line onClick={()=>{setLocation('')}} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                              </div> : null}
                              <div className='relative flex items-center w-full'>
                                 <input ref={inputReflocation} type="text" disabled={!isEditabelocation} value={location} onChange={(e) => { setLocation() }} className=' border-0 focus:border focus:outline-none bg-[#fff] text-[13px] p-1 rounded-md outline-none bg-[#0000] font-normal font-poppins text-[#030621] w-full' />
                                 {hoverlocation ? <PiPencilLight onClick={handleIconClicklocation} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                              </div>
                           </div>
                        </div>
                        <div className="p-2 flex hover:bg-[#F5F5F5] duration-300 gap-2 md:gap-0 items-center  ">
                           <h2 className="text-[13px] w-[100px] font-normal font-poppins">Work:</h2>
                           <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1 w-full' onMouseEnter={() => { setHoverwork(true) }} onMouseLeave={() => {setHoverwork(false) }}>
                              {workprevval ? <div className='flex items-center gap-1'>
                                 <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                                 <h2 className='text-[12px]'>---</h2>
                                 <RiDeleteBin5Line onClick={()=>{setWork('')}} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                              </div> : null}
                              <div className='flex items-center relative w-full'>
                                 <input ref={inputRefwork} type="text" disabled={!isEditablework} value={work} onChange={(e) => { setWork() }} className=' border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none font-normal font-poppins text-[#030621] w-full' />
                                 {hoverwork ? <PiPencilLight onClick={handleIconClickwork} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                              </div>
                           </div>
                        </div>
                        <div className="p-2 flex hover:bg-[#F5F5F5] duration-300 gap-2 md:gap-0 items-center rounded-md">
                           <h2 className="text-[13px] w-[100px] font-normal font-poppins">Personal:</h2>
                           <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1 w-full' onMouseEnter={() => { setHoverpersonal(true) }} onMouseLeave={() => { setHoverpersonal(false); }}>
                              {personalprevval ? <div className='flex items-center gap-1'>
                                 <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                                 <h2 className='text-[12px]'>---</h2>
                                 <RiDeleteBin5Line onClick={()=>{setPersonal('')}} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                              </div> : null}
                              <div className='flex relative items-center w-full'>
                                 <input ref={inputRefpersonal} type="text" disabled={!isEditablepersonal} value={personal} onChange={(e) => { setPersonal() }} className='border-0 focus:border focus:outline-none bg-[#fff] text-[13px] p-1 rounded-md outline-none bg-[#0000] font-normal font-poppins text-[#030621] w-full' />
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
               <div className="p-2 flex flex-col hover:bg-[#F5F5F5] duration-300 gap-3 md:gap-0 rounded-md ">
                  <div className='flex gap-2 md:gap-0 '>
                     <h2 className="text-[13px] w-[150px] mt-[6px] font-normal font-poppins">Company:</h2>
                     <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1 w-full' onMouseEnter={() => { setHoverCompany(true) }} onMouseLeave={() => { setHoverCompany(false)}}>
                        {compprevval ? <div className='flex items-center gap-1'>
                           <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                           <h2 className='text-[12px]'>Leadbud.io</h2>
                           <RiDeleteBin5Line onClick={()=>{setCompany('')}} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                        </div> : null}
                        <div className='flex relative items-center w-full'>
                           <input ref={inputRefcompany} type="text" disabled={!isEditablecompany} value={company} onChange={handlecompanychange} className=' border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none font-normal font-poppins text-[#030621] w-full' />
                           {hovercompany ? <PiPencilLight onClick={handleIconClickcompany} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                        </div>
                     </div>
                  </div>
                  {filteredSuggestionscompany.length > 0 && (
                     <ul className="absolute z-10  mt-8 bg-[#fff] w-full ml-[80px] cursor-pointer  rounded-md ">
                        {filteredSuggestionscompany.map((suggestion, index) => (
                           <li className='hover:bg-[#F5F5F5] duration-700 p-1 px-3 text-[14px]'
                              key={index}
                              onClick={() => handleSuggestionClickcompany(suggestion)}
                           >
                              {suggestion}
                           </li>
                        ))}
                     </ul>
                  )}
               </div>
               <div className="p-2 flex gap-3 md:gap-0 hover:bg-[#F5F5F5] duration-300 rounded-md items-center">
                  <h2 className="text-[13px] w-[150px] font-normal font-poppins">Job Position:</h2>
                  <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1 w-full' onMouseEnter={() => { setHoverjobp(true) }} onMouseLeave={() => {  setHoverjobp(false) }}>
                  {jobpprevval ? <div className='flex items-center gap-1'>
                           <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                           <h2 className='text-[12px]'>Leadbud.io</h2>
                           <RiDeleteBin5Line onClick={()=>{setJobp('')}} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                        </div> : null}
                   <div className='flex relative items-center w-full'>
                     <input ref={inputRefjobposition} type="text" disabled={!isEditablejobp} value={jobp} onChange={(e) => { setJobp() }} className='border-0 focus:border focus:outline-none text-[13px] p-1 rounded-md outline-none bg-[#0000] font-normal font-poppins text-[#030621] w-full' />
                     {hoverjobp ? <PiPencilLight onClick={handleIconClickjobposition} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                  </div>
                   </div>
               </div>
               <div className="p-2 flex items-center hover:bg-[#F5F5F5] duration-300 gap-3 md:gap-0 ">
                  <h2 className="text-[13px] w-[150px] font-normal font-poppins">Website:</h2>
                  <div onClick={() => { setSavebtn(true) }} className=' flex flex-col gap-1 w-full' onMouseEnter={() => { setHoverwebsite(true) }} onMouseLeave={() => {setHoverwebsite(false) }}>
                  {websiteprevval ? <div className='flex items-center gap-1'>
                           <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                           <h2 className='text-[12px]'> https://www.leadbud.io</h2>
                           <RiDeleteBin5Line onClick={()=>{setWebsite('')}} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                        </div> : null}
                  <div className='flex items-center relative w-full'>
                     <input ref={inputRefwebsite} type="text" disabled={!isEditablewebsite} value={website} onChange={(e) => { setWebsite() }} className=' border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                     {hoverwebsite ? <PiPencilLight onClick={handleIconClickwebsite} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                  </div>
                  </div>
               </div>
               <div className="p-2 flex items-center gap-3 md:gap-0 hover:bg-[#F5F5F5] duration-300 rounded-md">
                  <h2 className="text-[13px] w-[150px] font-normal font-poppins">HQ Phone:</h2>
                  <div onClick={() => { setSavebtn(true) }} className='flex flex-col  w-full' onMouseEnter={() => { setHoverhqphone(true) }} onMouseLeave={() => { setHoverhqphone(false) }}>
                  {hqphoneprevval ? <div className='flex items-center gap-1'>
                           <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                           <h2 className='text-[12px]'>---</h2>
                           <RiDeleteBin5Line onClick={()=>{setHqphone('')}} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                        </div> : null}
                  <div className='flex relative w-full items-center'>
                     <input ref={inputRefhqphone} type="text" disabled={!isEditablehqphone} value={hqphone} onChange={(e) => { setHqphone() }} className=' border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none font-normal font-poppins text-[#030621] w-full' />
                     {hoverhqphone ? <PiPencilLight onClick={handleIconClickhqphone} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                  </div>
                  </div>
               </div>
            </div>


            <AddCompany />
         </div>
      </>
   )
}
