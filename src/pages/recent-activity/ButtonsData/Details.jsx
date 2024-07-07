import React, { useState } from 'react'
import { BiBuildings } from "react-icons/bi";
import { LuPlusCircle } from "react-icons/lu";
import { PiPencilLight } from "react-icons/pi";
import { TiWarningOutline } from "react-icons/ti";
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

   const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];
   const Companysuggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];


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
               <button onClick={() => { setSavebtn(false) }} className="bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3">Save</button>
               <button onClick={() => { setSavebtn(false); setCanceltoast(true) }} className="bg-[#fff] rounded-md text-[13px] xl:text-[15px] p-2 px-3">Cancel</button>
            </div>
            : null
         }
         <div className='flex flex-col gap-4'>
            <div className="bg-[#F5F5F5] p-3 rounded-md">
               <div className="p-2 flex gap-2 md:gap-0 items-center ">
                  <h2 className="text-[13px] w-[100px] font-normal font-poppins">Email:</h2>
                  <div onClick={() => { setSavebtn(true) }} className='flex items-center w-full' onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false); setIsEditableemail(false) }}>
                     <input type="text" disabled={!isEditableemail} value={email} onChange={() => { setEmail() }} className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                     {hover ? <PiPencilLight onClick={() => { setIsEditableemail(true) }} className=' top-[8px] text-[14px] -right-2' /> : null}
                  </div>
               </div>
               <div className="p-2 flex flex-col gap-2 md:gap-0 bg-[#fff] rounded-md">
                  <div className='flex gap-2'><h2 className="text-[13px] w-[100px] font-normal font-poppins">Industry:</h2>
                     <div onClick={() => { setSavebtn(true) }} className='flex items-center w-full' onMouseEnter={() => { setHoverindustry(true) }} onMouseLeave={() => { setHoverindustry(false); setIsEditableindustry(false) }}>
                        <input type="text" disabled={!isEditableindustry} value={industry} onChange={handleemailchange} className='bg-[#fff] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                        {hoverindustry ? <PiPencilLight onClick={() => { setIsEditableindustry(true) }} className=' top-[8px] text-[14px] -right-2' /> : null}
                     </div>
                  </div>
                  {filteredSuggestions.length > 0 && (
                     <ul className="absolute mt-5 bg-[#fff] w-full ml-[70px] cursor-pointer  rounded-md ">
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
               <div className="p-2 flex gap-2 md:gap-0 items-center  ">
                  <h2 className="text-[13px] w-[100px] font-normal font-poppins">Country:</h2>
                  <div onClick={() => { setSavebtn(true) }} className='flex items-center w-full' onMouseEnter={() => { setHovercountry(true) }} onMouseLeave={() => { setHovercountry(false); setIsEditablecountry(false) }}>
                     <input type="text" disabled={!isEditablecountry} value={country} onChange={(e) => { setCountry() }} className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                     {hovercountry ? <PiPencilLight onClick={() => { setIsEditablecountry(true) }} className=' top-[8px] text-[14px] -right-2' /> : null}
                  </div>
               </div>
               {
                  showmore ?
                     <>
                        <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#fff] rounded-md">
                           <h2 className="text-[13px] w-[100px] font-normal font-poppins">Location:</h2>
                           <div onClick={() => { setSavebtn(true) }} className='flex items-center w-full' onMouseEnter={() => { setHoverlocation(true) }} onMouseLeave={() => { setHoverlocation(false); setIsEditabelocation(false) }}>
                              <input type="text" disabled={!isEditabelocation} value={location} onChange={(e) => { setLocation() }} className='bg-[#fff] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                              {hoverlocation ? <PiPencilLight onClick={() => { setIsEditabelocation(true) }} className=' top-[8px] text-[14px] -right-2' /> : null}
                           </div>
                        </div>
                        <div className="p-2 flex gap-2 md:gap-0 items-center  ">
                           <h2 className="text-[13px] w-[100px] font-normal font-poppins">Work:</h2>
                           <div onClick={() => { setSavebtn(true) }} className='flex items-center w-full' onMouseEnter={() => { setHoverwork(true) }} onMouseLeave={() => { setHoverwork(false); setIsEditabework(false) }}>
                              <input type="text" disabled={!isEditablework} value={work} onChange={(e) => { setWork() }} className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                              {hoverwork ? <PiPencilLight onClick={() => { setIsEditabework(true) }} className=' top-[8px] text-[14px] -right-2' /> : null}
                           </div>
                        </div>
                        <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#fff] rounded-md">
                           <h2 className="text-[13px] w-[100px] font-normal font-poppins">Personal:</h2>
                           <div onClick={() => { setSavebtn(true) }} className='flex items-center w-full' onMouseEnter={() => { setHoverpersonal(true) }} onMouseLeave={() => { setHoverpersonal(false); setIsEditabepersonal(false) }}>
                              <input type="text" disabled={!isEditablepersonal} value={personal} onChange={(e) => { setPersonal() }} className='bg-[#fff] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                              {hoverpersonal ? <PiPencilLight onClick={() => { setIsEditabepersonal(true) }} className=' top-[8px] text-[14px] -right-2' /> : null}
                           </div>
                        </div>
                     </> : ''
               }

               <p onClick={showmoredata} className='text-center text-[14px] font-normal cursor-pointer mt-2 text-[#56f444]'>{showmoretext}</p>

            </div>
            <div className="flex items-center gap-1 text-[#B7B7B7] text-[14px] xl:text-[16px]">
               <BiBuildings /><h2>Employement</h2>
            </div>
            <div className="bg-[#F5F5F5] p-3 rounded-md">

               <div className="p-2 flex flex-col  gap-3 md:gap-0 rounded-md ">
                  <div className='flex gap-2 '>
                     <h2 className="text-[13px] w-[150px] font-normal font-poppins">Company:</h2>
                     <div onClick={() => { setSavebtn(true) }} className='flex items-center w-full' onMouseEnter={() => { setHoverCompany(true) }} onMouseLeave={() => { setHoverCompany(false); setIsEditabecompany(false) }}>
                        <input type="text" disabled={!isEditablecompany} value={company} onChange={handlecompanychange} className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                        {hovercompany ? <PiPencilLight onClick={() => { setIsEditabecompany(true) }} className=' top-[8px] text-[14px] -right-2' /> : null}
                     </div>
                  </div>
                  {filteredSuggestionscompany.length > 0 && (
                     <ul className="absolute mt-5 bg-[#fff] w-full ml-[70px] cursor-pointer  rounded-md ">
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
               <div className="p-2 flex gap-3 md:gap-0 bg-[#fff] rounded-md items-center">
                  <h2 className="text-[13px] w-[150px] font-normal font-poppins">Job Position:</h2>
                  <div onClick={() => { setSavebtn(true) }} className='flex items-center w-full' onMouseEnter={() => { setHoverjobp(true) }} onMouseLeave={() => { setHoverjobp(false); setIsEditabejobp(false) }}>
                     <input type="text" disabled={!isEditablejobp} value={jobp} onChange={(e) => { setJobp() }} className=' text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                     {hoverjobp ? <PiPencilLight onClick={() => { setIsEditabejobp(true) }} className=' top-[8px] text-[14px] -right-2' /> : null}
                  </div>
               </div>
               <div className="p-2 flex  gap-3 md:gap-0 ">
                  <h2 className="text-[13px] w-[150px] font-normal font-poppins">Website:</h2>
                  <div onClick={() => { setSavebtn(true) }} className='flex items-center w-full' onMouseEnter={() => { setHoverwebsite(true) }} onMouseLeave={() => { setHoverwebsite(false); setIsEditablewebsite(false) }}>
                     <input type="text" disabled={!isEditablewebsite} value={website} onChange={(e) => { setWebsite() }} className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                     {hoverwebsite ? <PiPencilLight onClick={() => { setIsEditablewebsite(true) }} className=' top-[8px] text-[14px] -right-2' /> : null}
                  </div>
               </div>
               <div className="p-2 flex gap-3 md:gap-0 bg-[#fff] rounded-md">
                  <h2 className="text-[13px] w-[150px] font-normal font-poppins">HQ Phone:</h2>
                  <div onClick={() => { setSavebtn(true) }} className='flex items-center w-full' onMouseEnter={() => { setHoverhqphone(true) }} onMouseLeave={() => { setHoverhqphone(false); setIsEditablehqphone(false) }}>
                     <input type="text" disabled={!isEditablehqphone} value={hqphone} onChange={(e) => { setHqphone() }} className=' text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                     {hoverhqphone ? <PiPencilLight onClick={() => { setIsEditablehqphone(true) }} className=' top-[8px] text-[14px] -right-2' /> : null}
                  </div>
               </div>
            </div>
            {inputBoxes.map((box, index) => (
                   <div className="bg-[#F5F5F5] p-3 rounded-md">

                   <div className="p-2 flex flex-col  gap-3 md:gap-0 rounded-md ">
                      <div className='flex gap-2 '>
                         <h2 className="text-[13px] w-[150px] font-normal font-poppins">Company:</h2>
                         <div className='flex items-center w-full'>
                            <input name={`input1-${box.id}`} type="text" className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                          </div>
                      </div>
                    
                   </div>
                   <div className="p-2 flex gap-3 md:gap-0 bg-[#fff] rounded-md items-center">
                      <h2 className="text-[13px] w-[150px] font-normal font-poppins">Job Position:</h2>
                      <div className='flex items-center w-full'>
                         <input name={`input2-${box.id}`} type="text"  className=' text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                      </div>
                   </div>
                   <div className="p-2 flex  gap-3 md:gap-0 ">
                      <h2 className="text-[13px] w-[150px] font-normal font-poppins">Website:</h2>
                      <div className='flex items-center w-full'>
                         <input name={`input3-${box.id}`} type="text" className='bg-[#F5F5F5] text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                      </div>
                   </div>
                   <div className="p-2 flex gap-3 md:gap-0 bg-[#fff] rounded-md">
                      <h2 className="text-[13px] w-[150px] font-normal font-poppins">HQ Phone:</h2>
                      <div className='flex items-center w-full'>
                         <input name={`input4-${box.id}`} type="text" className=' text-[13px] border-none outline-none p-0 font-normal font-poppins text-[#030621] w-full' />
                      </div>
                   </div>
                </div>
      ))}

            <div onClick={addInputBox} className="cursor-pointer bg-[#F5F5F5] rounded-md p-3 flex gap-1 items-center mr-auto text-[#B7B7B7] text-[14px] xl:text-[16px]">
               <LuPlusCircle /> <h2>Add Company</h2>
            </div>
         </div>
      </>
   )
}
