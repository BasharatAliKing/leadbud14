import React, { useState } from "react";
import { Tabs } from "antd";
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
import './main.css'

const DatabaseSearchElement = () => {

    const [isOpen, setisOpen] = useState(true);

    const toggleSidebar = () => {
      setisOpen(!isOpen);
    };


  return (
    
    <div>
        <div className={`${isOpen? 'database-search-sidebar' : 'close-sidebar'}`}>
            {
                isOpen? (
                    <div>
                         <Tippy content='Hide filters'>
          <button
            className="button-close"
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
            
            <Tabs>

            </Tabs>



             </div>

                ) : (
                    <div></div>
                )
            }
        </div>
    </div>

  )
}

export default DatabaseSearchElement