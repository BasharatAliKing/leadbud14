
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

  const [inputs, setInputs] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [inputSets, setInputSets] = useState([initialInputSet()]);
  const [showin, setShowin] = useState(false);
  const [addCompsave, setAddCompSave] = useState(false);
  const [alerttoast, setAlertToast] = useState(false);
  const [showCompanies, setShowCompanies] = useState(false);

  const handleInputChange = (id, value) => {
    setInputs(inputs.map(input => input.id === id ? { ...input, value } : input));
  };

  const addInputs = () => {
    setShowin(true);
    setAddCompSave(true);

    if (inputs.length === 0) {
      // Add the first set of inputs
      setInputs(initialInputSet());
    } else {
      // alert('Please fill in all input fields before adding new ones.');
      setAlertToast(true);
    }
  };
  const handleCompsave = () => {
    if (inputs.every(input => input.value.trim() !== '')) {
      // Add new set of inputs if the current ones are filled
      const newData = inputs.map(input => input.value);
      setDataArray([...dataArray, newData]);
      setInputs(initialInputSet());
      setShowCompanies(true);
      setShowin(false);
    } else {
      // alert('Please fill in all input fields before adding new ones.');
      setAlertToast(true);
    }
  }



  return (
    <>

      {
        alerttoast ? <>
          <div className='custom-toast'>
            <div className=' flex flex-col gap-1 bg-[#fefefe]  w-[300px] md:w-[300px] toaster rounded-xl shadow-xl p-5 z-10'>
              <TiWarningOutline className='text-[100px] text-center w-full' />
              <p className='text-[12px]'>Please Fill All inputs Fields!</p>
              <div className="flex gap-3 justify-center w-full mt-3">
                <button onClick={() => { setAlertToast(false) }} className="bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3">Okay</button>
              </div>
            </div>
          </div>
        </> : null
      }
      
      {
        showCompanies ? <>
          {dataArray.map((data, index) => (
            <div key={index} className='bg-[#F5F5F5] rounded-md p-3'>
              <>
                <div className="p-2 flex flex-col hover:bg-[#fff] duration-300 gap-3 md:gap-0 rounded-md ">
                  <div className='flex gap-2 md:gap-0 items-center '>
                    <h2 className="text-[13px] w-[150px] mt-[6px] font-normal font-poppins">Company:</h2>

                    <input type="text" value={data[0]} className='mt-[6px] border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none font-normal font-poppins text-[#030621] w-full' />

                  </div>
                </div>
                <div className="p-2 flex flex-col hover:bg-[#fff] duration-300 gap-3 md:gap-0 rounded-md ">
                  <div className='flex gap-2 md:gap-0 items-center '>
                    <h2 className="text-[13px] w-[150px] mt-[6px] font-normal font-poppins">Job Position:</h2>

                    <input type="text" value={data[1]} className='mt-[6px] border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none font-normal font-poppins text-[#030621] w-full' />

                  </div>
                </div>
                <div className="p-2 flex flex-col hover:bg-[#fff] duration-300 gap-3 md:gap-0 rounded-md ">
                  <div className='flex gap-2 md:gap-0 items-center '>
                    <h2 className="text-[13px] w-[150px] mt-[6px] font-normal font-poppins">Website:</h2>

                    <input type="text" value={data[2]} className='mt-[6px] border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none font-normal font-poppins text-[#030621] w-full' />

                  </div>
                </div>
                <div className="p-2 flex flex-col hover:bg-[#fff] duration-300 gap-3 md:gap-0 rounded-md ">
                  <div className='flex gap-2 md:gap-0 items-center '>
                    <h2 className="text-[13px] w-[150px] mt-[6px] font-normal font-poppins">HQ Phone:</h2>

                    <input type="text" value={data[3]} className='mt-[6px] border-0 focus:border focus:outline-none bg-[#0000] text-[13px] p-1 rounded-md outline-none font-normal font-poppins text-[#030621] w-full' />
                  </div>
                </div>
              </>
            </div>
          ))}
        </> : null
      }
      {showin ? <>
        {inputSets.map((set, setIndex) => (
          <div className="bg-[#F5F5F5] p-3 rounded-md" >
            <div className='flex flex-col gap-1' key={setIndex}>
              {inputs.map(input => (
                <div key={input.id} className='p-2 flex gap-3 md:gap-0 hover:bg-[#fff] duration-300 rounded-md items-center '>
                  <label className='text-[13px] w-[150px] font-normal font-poppins'>{input.label}</label>
                  <input onClick={() => { }} className='text-[13px] rounded-md p-1 bg-[#0000] border font-normal font-poppins text-[#030621] w-full'
                    type="text"
                    value={input.value}
                    onChange={(e) => handleInputChange(input.id, e.target.value)}
                  />
                </div>
              ))}
            </div>
            {addCompsave ?
              <div className="flex left-0 pl-16 sm:pl-20 z-[1] md:pl-24 p-2 py-4 w-full  md:w-[443px] bottom-0 bg-[#F5F5F5] fixed gap-3 ">
                <button onClick={handleCompsave} className="bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3">Save</button>
                <button onClick={() => { setAddCompSave(false); setShowin(false) }} className="bg-[#fff] rounded-md text-[13px] xl:text-[15px] p-2 px-3">Cancel</button>
              </div>
              : null
            }
          </div>
        ))}

      </> : null}

      <div onClick={addInputs} className="cursor-pointer bg-[#F5F5F5] rounded-md p-3 flex gap-1 items-center mr-auto text-[#B7B7B7] text-[14px] xl:text-[16px]">
        <LuPlusCircle /> <h2>Add Company</h2>
      </div>


    </>
  );
};

export default AddCompany;

