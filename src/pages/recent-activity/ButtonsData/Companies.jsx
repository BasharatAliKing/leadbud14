import React, { useState, useRef, useEffect } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuPlusCircle } from "react-icons/lu";
import { PiPencilLight } from "react-icons/pi";
export default function Companies({updateCompanyData,objectIndex,companyValue, websiteValue,jobPositionValue,hqPhoneValue, updateData }) {
    const [compprevval, setCompPrevval] = useState(false);
    const [websiteprevval, setWebsitePrevval] = useState(false);
    const [jobpprevval, setJobpPrevval] = useState(false);
    const [hqphoneprevval, setHqphonePrevval] = useState(false);
    const [hovercompany, setHoverCompany] = useState(false);
    const [hoverjobp, setHoverjobp] = useState(false);
    const [hoverwebsite, setHoverwebsite] = useState(false);
    const [hoverhqphone, setHoverhqphone] = useState(false);
    const inputRefcompany = useRef(null);
    const inputRefwebsite = useRef(null);
    const inputRefjobposition = useRef(null);
    const inputRefhqphone = useRef(null);
    const [isEditablecompany, setIsEditabecompany] = useState(false);
    const [isEditablejobp, setIsEditabejobp] = useState(false);
    const [isEditablewebsite, setIsEditablewebsite] = useState(false);
    const [isEditablehqphone, setIsEditablehqphone] = useState(false);
    const [company, setCompany] = useState(companyValue);
    const [jobp, setJobp] = useState(jobPositionValue);
    const [website, setWebsite] = useState(websiteValue);
    const [saveCompanyBtn, setSaveCompanyBtn] = useState(false);
    const [hqphone, setHqphone] = useState(hqPhoneValue);
    const Companysuggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];
    const [filteredSuggestionscompany, setFilteredSuggestionscompany] = useState([]);
    useEffect(() => {
        if(company?.length >0 || website?.length>0 || jobp?.length>0 || hqphone?.length > 0 ){
       
            updateData(company,website,jobp,hqphone,objectIndex);
        }
    }, [company,website,jobp,hqphone]);
  
    const handleIconClickcompany = () => {
        setSaveCompanyBtn(true);
        setIsEditabecompany(true); setIsEditablewebsite(false); setIsEditabejobp(false); setIsEditablehqphone(false);
        setCompPrevval(true);
        setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false)
        setTimeout(() => {
            if (inputRefcompany.current) {
                inputRefcompany.current.focus();  // Focus the input element when the icon is clicked
            }
        }, 0);
    };

    const handleIconClickwebsite = () => {
        setSaveCompanyBtn(true);
        setIsEditabecompany(false); setIsEditablewebsite(true); setIsEditabejobp(false); setIsEditablehqphone(false);
        setWebsitePrevval(true);
        setCompPrevval(false); setJobpPrevval(false); setHqphonePrevval(false)
        setTimeout(() => {
            if (inputRefwebsite.current) {
                inputRefwebsite.current.focus();  // Focus the input element when the icon is clicked
            }
        }, 0);
    };
    const handleIconClickjobposition = () => {
        setSaveCompanyBtn(true);
        setIsEditabecompany(false); setIsEditablewebsite(false); setIsEditabejobp(true); setIsEditablehqphone(false);
        setJobpPrevval(true);
        setCompPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false)
        setTimeout(() => {
            if (inputRefjobposition.current) {
                inputRefjobposition.current.focus();  // Focus the input element when the icon is clicked
            }
        }, 0);
    };
    const handleIconClickhqphone = () => {
        setSaveCompanyBtn(true); 
        setIsEditabecompany(false); setIsEditablewebsite(false); setIsEditabejobp(false); setIsEditablehqphone(true);
        setHqphonePrevval(true);
        setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false);
        setTimeout(() => {
            if (inputRefhqphone.current) {
                inputRefhqphone.current.focus();  // Focus the input element when the icon is clicked
            }
        }, 0);
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
    const saveCompButon=()=>{
        updateCompanyData();
        setCompPrevval(false);
        setWebsitePrevval(false);
        setJobpPrevval(false);
        setHqphonePrevval(false);
        setSaveCompanyBtn(false);
    }
    return (
        <>
            <div className="p-2 flex flex-col hover:bg-[#F5F5F5] duration-300 gap-3 md:gap-0 rounded-md ">
                <div className='flex gap-2 md:gap-0 '>
                    <h2 className="text-[13px] w-[150px] mt-[6px] font-normal font-poppins">Company:</h2>
                    <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1 w-full' onMouseEnter={() => { setHoverCompany(true) }} onMouseLeave={() => { setHoverCompany(false) }}>
                        {compprevval ? <div className='flex items-center gap-1'>
                            <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                            <h2 className='text-[12px]'>{companyValue?.length >0 ? companyValue  :'---'}</h2>
                            <RiDeleteBin5Line onClick={() => { setCompany('') }} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                        </div> : null}
                        <div className='flex relative items-center w-full'>
                            <input ref={inputRefcompany} type="text" disabled={!isEditablecompany} value={company} onChange={handlecompanychange} className=' border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none font-normal font-poppins text-[#030621] w-full' />
                            {hovercompany ? <PiPencilLight onClick={handleIconClickcompany} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                        </div>
                    </div>
                </div>
                {filteredSuggestionscompany.length > 0 && (
                    <ul className="absolute z-10  mt-16 bg-[#fff] w-full ml-[80px] cursor-pointer  rounded-md ">
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
                <div onClick={() => { setSavebtn(true) }} className='flex flex-col gap-1 w-full' onMouseEnter={() => { setHoverjobp(true) }} onMouseLeave={() => { setHoverjobp(false) }}>
                    {jobpprevval ? <div className='flex items-center gap-1'>
                        <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                        <h2 className='text-[12px]'>{jobPositionValue?.length >0 ? jobPositionValue  :'---'}</h2>
                        <RiDeleteBin5Line onClick={() => { setJobp('') }} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                    </div> : null}
                    <div className='flex relative items-center w-full'>
                        <input ref={inputRefjobposition} type="text" disabled={!isEditablejobp} value={jobp} onChange={(e) => { setJobp() }} className='border-0 focus:border focus:outline-none text-[13px] p-1 rounded-md outline-none bg-[#0000] font-normal font-poppins text-[#030621] w-full' />
                        {hoverjobp ? <PiPencilLight onClick={handleIconClickjobposition} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                    </div>
                </div>
            </div>
            <div className="p-2 flex items-center hover:bg-[#F5F5F5] duration-300 gap-3 md:gap-0 ">
                <h2 className="text-[13px] w-[150px] font-normal font-poppins">Website:</h2>
                <div onClick={() => { setSavebtn(true) }} className=' flex flex-col gap-1 w-full' onMouseEnter={() => { setHoverwebsite(true)}} onMouseLeave={() => { setHoverwebsite(false) }}>
                    {websiteprevval ? <div className='flex items-center gap-1'>
                        <div className='w-[10px] h-[10px] bg-green rounded-full'></div>
                        <h2 className='text-[12px]'>{websiteValue?.length  ? websiteValue : '---'}</h2>
                        <RiDeleteBin5Line onClick={() => { setWebsite('') }} className='cursor-pointer ml-auto text-[red] text-[12px]' />
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
                        <h2 className='text-[12px]'>{hqPhoneValue?.length>0 ? hqPhoneValue : '---'}</h2>
                        <RiDeleteBin5Line onClick={() => { setHqphone('') }} className='cursor-pointer ml-auto text-[red] text-[12px]' />
                    </div> : null}
                    <div className='flex relative w-full items-center'>
                        <input ref={inputRefhqphone} type="text" disabled={!isEditablehqphone} value={hqphone} onChange={(e) => { setHqphone() }} className=' border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none font-normal font-poppins text-[#030621] w-full' />
                        {hoverhqphone ? <PiPencilLight onClick={handleIconClickhqphone} className=' top-[8px] text-[14px] absolute right-[2px]' /> : null}
                    </div>
                </div>
            </div>
            <hr  className='my-2'/>
            {saveCompanyBtn ?
            <div className="flex left-0 pl-16 sm:pl-20 z-[1] md:pl-24 p-2 py-4  w-full  md:w-[443px] bottom-0 bg-[#F5F5F5] fixed gap-3 ">
               <button onClick={saveCompButon} className="bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3">Save</button>
               <button onClick={() => { setSaveCompanyBtn(false); setCompPrevval(false); setJobpPrevval(false); setWebsitePrevval(false); setHqphonePrevval(false) }} className="bg-[#fff] rounded-md text-[13px] xl:text-[15px] p-2 px-3">Cancel</button>
            </div>
            : null
         }
        </>
    )
}
