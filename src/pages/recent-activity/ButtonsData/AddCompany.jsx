
import React, { useState } from 'react';
import { LuPlusCircle } from "react-icons/lu";
import { TiWarningOutline } from "react-icons/ti";
const AddCompany = () => {
  const initialInputSet = () => [
    { id: 1, label: 'Company', value: '' },
    { id: 2, label: 'Job Position', value: '' },
    { id: 3, label: 'Website', value: '' },
    { id: 4, label: 'HQ Phone', value: '' }
  ];

  const [inputSets, setInputSets] = useState([initialInputSet()]);
  const [dataArray, setDataArray] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [showin ,setShowin]=useState(false);
  const [addCompsave,setAddCompSave]=useState(false);
  const [alerttoast,setAlertToast]=useState(false);

  const handleInputChange = (setIndex, inputId, value) => {
    const newInputSets = [...inputSets];
    newInputSets[setIndex] = newInputSets[setIndex].map(input =>
      input.id === inputId ? { ...input, value } : input
    );
    setInputSets(newInputSets);
    setErrorMessage(''); // Clear error message on input change
  };

  const addInputs = () => {
    const currentSet = inputSets[inputSets.length - 1];
    if (currentSet.every(input => input.value.trim() !== '')) {
      const newData = currentSet.map(input => input.value);
      setDataArray([...dataArray, newData]);
      setInputSets([...inputSets, initialInputSet()]);
      setErrorMessage('');
      setAddCompSave(true);
      setAlertToast(true);
    } else {
      //   setErrorMessage('Please fill in all input fields before adding new ones.');
      setShowin(true);
      setAddCompSave(true);
      setAlertToast(true);
  }
  };

  return (
    <>
     {
            alerttoast ? <>
               <div className='custom-toast'>
                  <div className=' flex flex-col gap-1 bg-[#fefefe]  w-[300px] md:w-[300px] toaster rounded-xl shadow-xl p-5 z-10'>
                     <TiWarningOutline className='text-[100px] text-center w-full' />
                    <p className='text-[12px]'>Please Fill All inputs Fields then Save to Add another Company.</p>
                     <div className="flex gap-3 justify-center w-full mt-3">
                        <button onClick={() => { setAlertToast(false) }} className="bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3">Okay</button>
                        </div>
                  </div>
               </div>
            </> : null
         }
     {addCompsave ?
            <div className="flex left-0 pl-16 sm:pl-20 z-[1] md:pl-24 p-2 py-4 w-full  md:w-[443px] bottom-0 bg-[#F5F5F5] fixed gap-3 ">
               <button onClick={() => {setAddCompSave(false) }} className="bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3">Save</button>
               <button onClick={() => {setAddCompSave(false) }} className="bg-[#fff] rounded-md text-[13px] xl:text-[15px] p-2 px-3">Cancel</button>
            </div>
            : null
         }
      {showin ? <>
        {inputSets.map((set, setIndex) => (
    <div className="bg-[#F5F5F5] p-3 rounded-md" >
        <div className='flex flex-col gap-1' key={setIndex}>
          {set.map(input => (
            <div className='p-2 flex gap-3 md:gap-0 hover:bg-[#fff] duration-300 rounded-md items-center ' key={input.id}>
              <label className='text-[13px] w-[150px] font-normal font-poppins'>{input.label}</label>
              <input onClick={()=>{}} className='text-[13px] rounded-md p-1 bg-[#0000] border font-normal font-poppins text-[#030621] w-full'
                type="text"
                value={input.value}
                onChange={(e) => handleInputChange(setIndex, input.id, e.target.value)}
              />
            </div>
          ))}
         
          </div>
        </div>
      ))} 
      </>:  null
    }
            <div onClick={addInputs} className="cursor-pointer bg-[#F5F5F5] rounded-md p-3 flex gap-1 items-center mr-auto text-[#B7B7B7] text-[14px] xl:text-[16px]">
               <LuPlusCircle /> <h2>Add Company</h2>
            </div>
  </>
  );
};

export default AddCompany;

