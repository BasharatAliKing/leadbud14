import React, { useState, useEffect} from 'react'
import {PuffLoader } from 'react-spinners'

const Loader = ({ title }) => {


  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []); 

  return (
    <div className={`flex relative flex-col justify-center items-center h-[100vh] w-[50vw] backdrop-blur-3xl ${isVisible ? 'block' : 'hidden'}`}>

    <PuffLoader color="#56F444" />
      <p className='mt-3 text-mygray font-medium'>{title}</p>
    </div>
  )
}

export default Loader