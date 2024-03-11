import React, { useState } from "react";
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

const DbSearchSidebar = () => {
  const [isOpen, setisOpen] = useState(true);

  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };

  return (
    <div>
   
        <div className={`${isOpen? 'bg-[#fff] shadow-xl  pt-[30px] pb-[30px] fixed' : 'bg-[#fff] shadow-xl w-[80px] fixed pt-[30px] pb-[30px] h-screen'}`}>
        {isOpen ? (
          <div>
            <Tippy content='Hide filters'>
          <button
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
          <Tab.Group>
            <Tab.List className="flex pl-[30px] pr-[30px]">
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "flex items-center bg-dark-blue px-[30px] py-[15px]  text-sm text-[#fff] font-semibold border-none rounded-l-xl outline-0"
                        : "flex items-center bg-gray-light px-[30px] py-[15px] text-sm text-dark-blue font-semibold border-none rounded-l-xl outline-0"
                    }
                  >
                    <img
                      src={scrappericon}
                      alt="icon"
                      className={selected ? "mr-3" : "mr-3 brightness-0"}
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
                        ? "flex items-center bg-dark-blue px-[30px] py-[15px] text-sm text-[#fff] font-semibold border-none rounded-r-xl outline-0"
                        : "flex items-center bg-gray-light px-[30px] py-[15px] text-sm text-dark-blue font-semibold border-none rounded-r-xl outline-0"
                    }
                  >
                    <img
                      src={companyIcon}
                      alt="icon"
                      className={selected ? "mr-3 invert" : "mr-3"}
                    />{" "}
                    Companies
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div>
                  <div className="filter-search flex justify-between items-center mt-[30px] pl-[30px] pr-[30px]">
                    <div>
                      <p className="text-[18px] font-medium font-poppins">
                        Search Filters
                      </p>
                    </div>

                    <div>
                      <button className="text-[#B7B7B7]">Load</button>{" "}
                      <span className="text-[#B7B7B7]">|</span>{" "}
                      <button className="text-[#B7B7B7]">Save</button>
                    </div>
                  </div>

                  <div className="filters h-[610px] overflow-y-scroll overflow-x-hidden mb-[20px]">
                    <div className="pl-[30px] pr-[30px]">
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

                      <div className="filter-area mt-6">
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

                  <div className="button-area pl-[30px] mb-2 flex gap-4">
                    <button className="bg-green w-[125px] py-[15px] rounded-xl text-[18px] text-dark-blue">
                      Search
                    </button>
                    <button className="text-[18px] text-mygray">
                      Clear Filter
                    </button>
                  </div>
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className=" flex justify-between items-center mt-[30px] px-[30px] w-full">
                  <div>
                    <p className="filter px-3 flex items-center text-[18px] w-auto font-medium font-poppins">
                      Search Filters
                    </p>
                  </div>

                  <div>
                    <button>Load</button> <span>|</span> <button>Save</button>
                  </div>
                </div>

                <div className="filter-area mt-6 px-[30px] h-[600px]">
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

                <div className="button-area pl-[30px] mb-2 flex gap-4">
                  <button className="bg-green w-[125px] py-[15px] rounded-xl text-[18px] text-dark-blue">
                    Search
                  </button>
                  <button className="text-[18px] text-mygray">
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

          <div onMouseEnter={() => setisOpen(true)}>
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
  );
};

export default DbSearchSidebar;