
import React, { useState } from 'react';
import { LuPlusCircle } from "react-icons/lu";
import { TiWarningOutline } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiPencilLight } from "react-icons/pi";
const AddCompany = ({updateArrayData}) => {
  const initialInputSet = () => [
    { id: 1, label: 'Company', value: '' },
    { id: 2, label: 'Job Position', value: '' },
    { id: 3, label: 'Website', value: '' },
    { id: 4, label: 'HQ Phone', value: '' }
  ];

  const [showin, setShowin] = useState(false);
  const [addCompsave, setAddCompSave] = useState(false);
  const [alerttoast, setAlertToast] = useState(false);
  const [inputSets, setInputSets] = useState([]);

  const [enabledInput, setEnabledInput] = useState(null);
  const [hoveredInput, setHoveredInput] = useState(null);
  const [penclick, setPenClick] = useState(null);

  const [currentInputs, setCurrentInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });
  const [showAlert, setShowAlert] = useState(false);
 // console.log(currentInputs);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addInputSet = () => {
    setShowin(true);
    setAddCompSave(true);
    setAlertToast(false);
  };

  const enableEditing = (index) => {
    setInputSets((prev) =>
      prev.map((set, i) =>
        i === index ? { ...set, disabled: false } : set
      )
    );
  };

  const handleExistingInputChange = (e, index) => {
    const { name, value } = e.target;
    setInputSets((prev) =>
      prev.map((set, i) =>
        i === index ? { ...set, [name]: value } : set
      )
    );
  };

  const handleCompsave = () => {
    const { input1, input2, input3, input4 } = currentInputs;
    if (!input1 || !input2 || !input3 || !input4) {
      setAlertToast(true);
      return;
    }
    updateArrayData({company:input1 , jobPosition:input2, website:input3, hqPhone:input4});
    setInputSets((prev) => [...prev, { ...currentInputs, disabled: true }]);
    setCurrentInputs({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    });
    setAddCompSave(false);
    setShowin(false);
  }
  const handlePenClick = (e, index) => {
    setEnabledInput(index);
    setPenClick(index);

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
      {showin ? <>
        <div className="bg-[#F5F5F5] p-3 rounded-md" >
          <div className='flex flex-col gap-1'>
            <div className='p-2 flex gap-3 md:gap-0 hover:bg-[#fff] duration-300 rounded-md items-center '>
              <label className='text-[13px] w-[150px] font-normal font-poppins'>Company:</label>
              <input className='text-[13px] rounded-md p-1 bg-[#0000] border font-normal font-poppins text-[#030621] w-full'
                type="text"
                name="input1"
                value={currentInputs.input1}
                onChange={handleInputChange}
              />
            </div>
            <div className='p-2 flex gap-3 md:gap-0 hover:bg-[#fff] duration-300 rounded-md items-center '>
              <label className='text-[13px] w-[150px] font-normal font-poppins'>Job Position:</label>
              <input className='text-[13px] rounded-md p-1 bg-[#0000] border font-normal font-poppins text-[#030621] w-full'
                type="text"
                name="input2"
                value={currentInputs.input2}
                onChange={handleInputChange}
              />
            </div>
            <div className='p-2 flex gap-3 md:gap-0 hover:bg-[#fff] duration-300 rounded-md items-center '>
              <label className='text-[13px] w-[150px] font-normal font-poppins'>Website:</label>
              <input className='text-[13px] rounded-md p-1 bg-[#0000] border font-normal font-poppins text-[#030621] w-full'
                type="text"
                name="input3"
                value={currentInputs.input3}
                onChange={handleInputChange}
              />
            </div>
            <div className='p-2 flex gap-3 md:gap-0 hover:bg-[#fff] duration-300 rounded-md items-center '>
              <label className='text-[13px] w-[150px] font-normal font-poppins'>HQ Phone:</label>
              <input className='text-[13px] rounded-md p-1 bg-[#0000] border font-normal font-poppins text-[#030621] w-full'
                type="text"
                name="input4"
                value={currentInputs.input4}
                onChange={handleInputChange}
              />
            </div>

          </div>
          {addCompsave ?
            <div className="flex left-0 pl-16 sm:pl-20 z-[1] md:pl-24 p-2 py-4 w-full  md:w-[443px] bottom-0 bg-[#F5F5F5] fixed gap-3 ">
              <button onClick={handleCompsave} className="bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3">Save</button>
              <button onClick={() => { setAddCompSave(false); setShowin(false) }} className="bg-[#fff] rounded-md text-[13px] xl:text-[15px] p-2 px-3">Cancel</button>
            </div>
            : null
          }
        </div>
      </> : null}
      <div onClick={addInputSet} className="cursor-pointer bg-[#F5F5F5] rounded-md p-3 flex gap-1 items-center mr-auto text-[#B7B7B7] text-[14px] xl:text-[16px]">
        <LuPlusCircle /> <h2>Add Company</h2>
      </div>
    </>
  );
};
export default AddCompany;

