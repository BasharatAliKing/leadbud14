import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import scrappericon from "../../assets/images/scraper-icon.png";
import companyIcon from "../../assets/images/company-icon.png";
import peopleIcon from "../../assets/images/people-icon.png";
import locationIcon from "../../assets/images/location-icon.png";
import firstnameIcon from "../../assets/images/first-name-icon.png";
import lastnameIcon from "../../assets/images/lastname-icon.png";
import jobIcon from "../../assets/images/job-icon.png";
import skillIcon from "../../assets/images/skill-icon.png";
import keywordIcon from "../../assets/images/keyword-icon.png";
import scnarioIcon from "../../assets/images/scenario-icon.png";
import lockIcon from "../../assets/images/lock-icon.png";
import companiesIcon from "../../assets/images/companies-icon.png";
import IndustryIcon from "../../assets/images/industry-icon.png";
import sizeIcon from "../../assets/images/size-icon.png";
import fundedIcon from "../../assets/images/funded-icon.png";
import revenueIcon from "../../assets/images/revenue-icon.png";
import specialityIcon from "../../assets/images/speciality-icon.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Tippy from '@tippyjs/react';
import "./main.css";
const DbSearchSidebar = () => {
  const [isOpen, setisOpen] = useState(true);

  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };
  useEffect(() => {
    const sidebarsearch=document.querySelector(".sidebar-search");
    const subsidebar=document.querySelector(".subsidebar");
    const icon=document.querySelector("#icon");
    icon.addEventListener("click", (e)=>{
           if(icon.className==="absolute -right-4 bg-green rounded-full"){
            sidebarsearch.style="max-width:70px; min-width:70px";
            icon.className="absolute -right-4  bg-green rounded-full "
            
           }else{
            icon.className="absolute -right-4 bg-green rounded-full open"
            sidebarsearch.style="max-width:362px; min-width:362px";
           }
    })
  },[])
  

  return (
    <div className="sidebar-search">
      <div>
      <div id="subsidebar" className={`${isOpen? 'bg-[#fff] pt-[20px]  ' : 'bg-[#fff] shadow-xl pt-[20px] w-[70px] '}`}>
        {isOpen ? (
          <div className="">
            <Tippy content='Hide filters'>
          <button id="icon"
            className="absolute -right-4 bg-green rounded-full"
             onClick={toggleSidebar}
          >
            {isOpen ? (
              <MdChevronLeft size={30}
               />
            ) : (
              <MdChevronRight size={30} />
            )}
          </button>
          </Tippy>
          <Tab.Group >
            <Tab.List className="flex px-[10px] sm:px-[30px]">
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "flex items-center bg-dark-blue px-[6px] py-[10px] text-[14px] text-[#fff] font-semibold border-none rounded-l-xl outline-0"
                        : "flex items-center bg-gray-light px-[6px] py-[10px] text-[14px]  text-dark-blue font-semibold border-none rounded-l-xl outline-0"
                    }
                  >
                    <img
                      src={scrappericon}
                      alt="icon"
                      className={selected ? " pr-1 xl:mr-3" : "pr-1 xL:mr-3 brightness-0"}
                    />{" "}
                    Scrapers
                  </button>
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected
                      ? "flex items-center bg-dark-blue px-[6px]  py-[10px] text-[14px] text-[#fff] font-semibold border-none rounded-r-xl outline-0"
                        : "flex items-center bg-gray-light px-[6px]  py-[10px] text-[14px] md:text-[16px] text-dark-blue font-semibold border-none rounded-r-xl outline-0"
                  }
                  >
                    <img
                      src={companyIcon}
                      alt="icon"
                      className={selected ? "pr-1 xl:mr-3 invert" : "pr-1 xl:mr-3"}
                    />{" "}
                    Companies
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="h-full">
                  <div className="thirdbar">
                    <div>
          
                    <p className="filter px-3 flex items-center h-[40px] text-[14px] md:text-[18px] w-auto font-medium font-poppins">
                      Search Filters
                    </p>
                    </div>

                    <div>
                      <button className="text-[#B7B7B7]">Load</button>{" "}
                      <span className="text-[#B7B7B7]">|</span>{" "}
                      <button className="text-[#B7B7B7]">Save</button>
                    </div>
                  </div>
                  <div className="leadinput-search">
                    <div className="px-[10px] sm:px-[30px]">
                      <div className="flex items-center mt-5">
                        <img src={peopleIcon} alt="icon" className="mr-2" />
                        <span className="text-[#B7B7B7] text-xs">People</span>
                      </div>

                      <div className="filter-area mt-6 bg-gray-light rounded-xl">
                        <div className=" pt-[18px] ">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={locationIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Location
                          </p>
                          <input
                            type="text"
                            className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                          />
                        </div>

                        <div className="pt-[18px]">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={firstnameIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            First Name
                          </p>
                          <input
                            type="text"
                            className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                          />
                        </div>

                        <div className=" pt-[18px]">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={lastnameIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Last Name
                          </p>
                          <input
                            type="text"
                            className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                          />
                        </div>

                        <div className="pt-[18px]">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={jobIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Job
                          </p>
                          <input
                            type="text"
                            className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                          />
                        </div>

                        <div className="pt-[18px]">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={skillIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Skill
                          </p>
                          <input
                            type="text"
                            className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                          />
                        </div>

                        <div className="pt-[18px]">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={keywordIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Keywords
                          </p>
                          <input
                            type="text"
                            className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                            disabled
                          />
                     
                        </div>

                        <div className=" pt-[18px]">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={scnarioIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Scenario
                          </p>
                          <input
                            type="text"
                            className="border-0 px-[22px] py-[2px] w-[100%] bg-gray-light"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="flex items-center mt-5">
                        <img src={companiesIcon} alt="icon" className="mr-2" />
                        <span className="text-[#B7B7B7] text-xs">
                          Companies
                        </span>
                      </div>

                      <div className="filter-area  mt-6">
                        <div className=" bg-gray-light pt-[18px] rounded-t-xl">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={lastnameIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Company Name
                          </p>
                          <input
                            type="text"
                            className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                          />
                        </div>

                        <div className=" bg-gray-light pt-[18px]">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={locationIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Company Location
                          </p>
                          <input
                            type="text"
                            className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                          />
                        </div>

                        <div className=" bg-gray-light pt-[18px]">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={IndustryIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Industry
                          </p>
                          <input
                            type="text"
                            className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                          />
                        </div>

                        <div className=" bg-gray-light pt-[18px]">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={sizeIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Size
                          </p>
                          <input
                            type="text"
                            className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                          />
                        </div>

                        <div className=" bg-gray-light pt-[18px]">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={fundedIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Funded
                          </p>
                          <input
                            type="text"
                            className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                          />
                        </div>

                        <div className=" bg-gray-light pt-[18px]">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={revenueIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Revenue
                          </p>
                          <input
                            type="text"
                            className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                          />
                        </div>

                        <div className=" bg-gray-light pt-[18px] rounded-b-xl">
                          <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                            <img
                              src={specialityIcon}
                              alt="location"
                              className="w-[14px] h-[17px] mr-3"
                            />
                            Specialties
                          </p>
                          <input
                            type="text"
                            className="border-0  px-[22px] py-[2px] w-[100%] bg-gray-light"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-btn-search ">
                    <button className="bg-green w-auto py-2 px-3 lg:w-[125px] lg:py-[10px] rounded-xl text-[16px] md:text-[18px] text-dark-blue">
                      Search
                    </button>
                    <button className="text-[16px] ml-[10px] md:text-[18px] text-mygray">
                      Clear Filter
                    </button>
                  </div>
               
              </Tab.Panel>

              <Tab.Panel className="h-full">
                <div className=" flex justify-between items-center mt-[30px] px-[10px] sm:px-[30px] w-full">
                  <div>
                    <p className="filter px-3 flex items-center h-[40px] text-[14px] md:text-[18px] w-auto font-medium font-poppins">
                      Search Filters
                    </p>
                  </div>

                  <div>
                    <button>Load</button> <span>|</span> <button>Save</button>
                  </div>
                </div>

                <div className="leadinput-search px-[20px] mt-[20px]">
                  <div className=" bg-gray-light pt-[18px] rounded-t-xl">
                    <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                      <img
                        src={lastnameIcon}
                        alt="location"
                        className="w-[14px] h-[17px] mr-3"
                      />
                      Company Name
                    </p>
                    <input
                      type="text"
                      className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                    />
                  </div>

                  <div className=" bg-gray-light pt-[18px]">
                    <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                      <img
                        src={locationIcon}
                        alt="location"
                        className="w-[14px] h-[17px] mr-3"
                      />
                      Company Location
                    </p>
                    <input
                      type="text"
                      className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                    />
                  </div>

                  <div className=" bg-gray-light pt-[18px]">
                    <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                      <img
                        src={IndustryIcon}
                        alt="location"
                        className="w-[14px] h-[17px] mr-3"
                      />
                      Industry
                    </p>
                    <input
                      type="text"
                      className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                    />
                  </div>

                  <div className=" bg-gray-light pt-[18px]">
                    <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                      <img
                        src={sizeIcon}
                        alt="location"
                        className="w-[14px] h-[17px] mr-3"
                      />
                      Size
                    </p>
                    <input
                      type="text"
                      className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                    />
                  </div>

                  <div className=" bg-gray-light pt-[18px]">
                    <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                      <img
                        src={fundedIcon}
                        alt="location"
                        className="w-[14px] h-[17px] mr-3"
                      />
                      Funded
                    </p>
                    <input
                      type="text"
                      className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                    />
                  </div>

                  <div className=" bg-gray-light pt-[18px]">
                    <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                      <img
                        src={revenueIcon}
                        alt="location"
                        className="w-[14px] h-[17px] mr-3"
                      />
                      Revenue
                    </p>
                    <input
                      type="text"
                      className="border-0 border-[#D8D8D8]  border-b px-[22px] py-[2px] w-[100%] bg-gray-light"
                    />
                  </div>

                  <div className=" bg-gray-light pt-[18px] rounded-b-xl">
                    <p className="flex items-center font-medium text-dark-blue text-xs px-[22px]">
                      <img
                        src={specialityIcon}
                        alt="location"
                        className="w-[14px] h-[17px] mr-3"
                      />
                      Specialties
                    </p>
                    <input
                      type="text"
                      className="border-0  px-[22px] py-[2px] w-[100%] bg-gray-light"
                    />
                  </div>
                </div>

                <div className="bottom-btn-search">
                  <button className="bg-green w-auto px-5 text-[16px] py-2 lg:w-[125px] lg:py-[10px] rounded-xl md:text-[18px] text-dark-blue">
                    Search
                  </button>
                  <button className="text-[16px] ml-[10px] md:text-[18px] text-mygray">
                    Clear Filter
                  </button>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          </div>
       
      ) : (
        <div className="flex flex-col items-center justify-center">

         <Tippy content='Show Filters'><button className="bg-green rounded-full mb-3" onClick={toggleSidebar}><MdChevronRight size={30} /></button></Tippy> 

          <div className="leadinput-search-side">
          <div className="">
            <img src={locationIcon} alt="icon" className="icon"/>
            <img src={jobIcon} alt="icon" className="icon"/>
            <img src={lastnameIcon} alt="icon" className="icon"/>
            <img src={jobIcon} alt="icon" className="icon"/>
            <img src={keywordIcon} alt="icon" className="icon"/>
            <img src={scnarioIcon} alt="icon" className="icon"/>
          </div>


          <div className="">
            <img src={locationIcon} alt="icon" className="icon"/>
            <img src={IndustryIcon} alt="icon" className="icon"/>
            <img src={sizeIcon} alt="icon" className="icon"/>
            <img src={fundedIcon} alt="icon" className="icon"/>
            <img src={revenueIcon} alt="icon" className="icon"/>
            <img src={specialityIcon} alt="icon" className="icon"/>
          </div>
          </div>
          
        </div>
      )}
      </div>
      </div>
    </div>
  );
};

export default DbSearchSidebar;