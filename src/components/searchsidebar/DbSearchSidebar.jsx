import React, { useEffect, useState } from "react";
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
    const scrapers=document.querySelector("#scrapers");
    const companies=document.querySelector("#companies");
    const subsidebar=document.querySelector("#subsidebar");
    const scrapmenu=document.querySelector("#scraper-menu");
    const companymenu=document.querySelector("#company-menu");
    const leadinput=document.querySelector(".leadinput-search");
    const antcardbody=document.querySelector(".savedcard");
  //  antcardbody.remove();
  // Create a MediaQueryList object
  
    companymenu.remove();
    const icon=document.querySelector("#icon");
    icon.addEventListener("click", (e)=>{
           if(icon.className==="absolute -right-4 bg-green rounded-full"){
            subsidebar.style="max-width:70px; min-width:70px";
            icon.className="absolute -right-4  bg-green rounded-full ";
            antcardbody.style="width:auto";
           }else{
            icon.className="absolute -right-4 bg-green rounded-full open"
            subsidebar.style="max-width:362px; min-width:362px";
            // antcardbody.style="width:300px";
            const x = window.matchMedia("(max-width:576px)");
            const handle = ()=>{
              if(x.matches){
                antcardbody.style="width:300px";
               
              }else{
                antcardbody.style="width:auto";
              }
            }
            handle(x);
           }
    });
    companies.addEventListener("click",(e)=>{
      e.preventDefault();
      console.log("clicked..")
      companies.style="background-color:#030621; color:white;"
      scrapers.style="background-color:transparent; color:#030621; border: 2px solid #030621";
      leadinput.appendChild(companymenu);
      scrapmenu.remove();
     
    });
    scrapers.addEventListener("click",(e)=>{
      e.preventDefault();
      scrapers.style="background-color:#030621; color:white;"
      companies.style="background-color:transparent; color:#030621; border: 2px solid #030621";
      leadinput.appendChild(scrapmenu);
      companymenu.remove();
    })
  },[])
  

  return (
      <div id="subsidebar" className={`${isOpen? 'bg-[#fff] pt-[20px] ' : 'bg-[#fff] shadow-xl pt-[20px] w-[70px] '}`}>
        {isOpen ? (
          <div className="mainsidebar">
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
         
            <div className="flex px-[10px] sm:px-[30px]">
              {/* buttons */}
              <div className="flex ">
                  <button id="scrapers" className="flex items-center bg-dark-blue px-[6px] py-[10px] text-[14px] text-[#fff] font-semibold border-none rounded-l-xl outline-0">
                  <img
                      src={scrappericon}
                      alt="icon"
                      className="text-dark-blue"
                    />{" "}
                    Scrapers
                  </button>
                  <button id="companies" className="flex items-center border-[2px] text-dark-blue border-dark-blue px-[6px] py-[10px] text-[14px]  font-semibold  rounded-r-xl outline-0">
                    <img
                      src={scrappericon}
                      alt="icon"
                    
                    />{" "}
                    Companies
                  </button>
                
              </div>
            </div>
            {/* Search Filter button */}
               <div className=" flex justify-between items-center mt-[30px] px-[10px] sm:px-[30px] w-full ">
                    <div>
                    <p className="filter px-3 flex items-center h-[40px] text-[14px] md:text-[16px] w-auto font-medium font-poppins">
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
                    <div id="scraper-menu" className="px-[10px] sm:px-[30px]">
                      <div className="flex items-center mt-5">
                        <img src={peopleIcon} alt="icon" className="mr-2 text-[#fff]" />
                        <span className="text-[#000] text-[14px]">People</span>
                      </div>

                      <div className="filter-area mt-6 bg-gray-light rounded-xl">
                        <div className=" pt-[18px] ">
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                        <span className="text-[#000] text-[14px]">
                          Companies
                        </span>
                      </div>

                      <div className="filter-area  mt-6">
                        <div className=" bg-gray-light pt-[18px] rounded-t-xl">
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                          <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                    <div id="company-menu" className="">
                <div className="leadinput-search leadsecond px-[20px]  mt-[20px]">
                  <div className=" bg-gray-light pt-[18px] rounded-t-xl">
                    <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                    <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                    <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                    <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                    <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                    <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                    <p className="flex items-center font-medium text-dark-blue text-[14px] px-[22px]">
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
                    <button className="bg-green w-auto py-2 px-3 lg:w-[125px] lg:py-[10px] rounded-xl text-[14px]  text-dark-blue">
                      Search
                    </button>
                    <button className="text-[16px] ml-[10px] text-mygray">
                      Clear Filter
                    </button>
                  </div>       
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
  );
};

export default DbSearchSidebar;