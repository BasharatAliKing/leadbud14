import React, { useState } from "react";
import { Menu } from "antd";
import searchIcon from "../../assets/images/search.png";
import toolsIcon from "../../assets/images/tools.png";
import userIcon from "../../assets/images/user-setting.png";
import listIcon from "../../assets/images/list.png";
import stockIcon from "../../assets/images/stock.png";
import cloudIcon from "../../assets/images/cloud.png";
import centrlIcon from "../../assets/images/central.png";
import settigIcon from "../../assets/images/settings.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./nav.css";

const SideNav = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li key="1" className="menu-item">
          <NavLink to="">
            <img src={searchIcon} alt="icon" />
          </NavLink>
          <ul className="sub-menu z-20">
            <Link to="/prospects">
              <li className="sub-menu-link">Prospects</li>
            </Link>
            <Link to="/database-search">
              <li className="sub-menu-link">Companies</li>
            </Link>
            <Link to="/facebook">
              <li className="sub-menu-link">Fb FanPage</li>
            </Link>
          </ul>
        </li>

        <li key="2" className="menu-item">
          <NavLink to="">
            <img src={toolsIcon} alt="icon" />
          </NavLink>
          <ul className="sub-menu">
            <Link to="/finder-tools">
              <li className="sub-menu-link">All Tools</li>
            </Link>
            <Link to="/database-search">
              <li className="sub-menu-link">Database Search</li>
            </Link>
            <Link to="/email-search"><li className="sub-menu-link">
              Email Search
            </li></Link>
            <Link to="/bulk-email-search"> <li className="sub-menu-link">
              Bulk Email Search
            </li></Link>
            <Link to="/domain-search"> <li className="sub-menu-link">
             Domain Search
            </li></Link>
            <Link to="/"> <li className="sub-menu-link">
              Bulk Domain Search
            </li></Link>
            <Link to="/"> <li className="sub-menu-link">
             Social URL Search
            </li></Link>
            <Link to="/"><li className="sub-menu-link">
              Technology Checker
            </li></Link>
          </ul>
        </li>

        <li key="3" className="menu-item">
          <NavLink to="">
            <img src={userIcon} alt="icon" />
          </NavLink>
          <ul className="sub-menu">
          <Link to="/verify-individual-emails"> <li className="sub-menu-link">
              Individual Email Verification
            </li></Link>
            <Link to="/"><li className="sub-menu-link">
              Bulk Email Verification
            </li></Link>
          </ul>
        </li>

        <li key="4" className="menu-item">
          <NavLink href="">
            <img src={listIcon} alt="icon" />
          </NavLink>
          <ul className="sub-menu">
          <Link to="/"> <li className="sub-menu-link">
            All Warm-ups
            </li></Link>
            <Link to="/"> <li className="sub-menu-link">
            New warm-up
            </li></Link>
          </ul>
        </li>

        <li key="5" className="menu-item">
          <NavLink href="">
            <img src={stockIcon} alt="icon" />
          </NavLink>
          <ul className="sub-menu">
          <Link to="/"><li className="sub-menu-link">
            All campaigns
            </li></Link>
            <Link to="/"> <li className="sub-menu-link">
              New campaigns
            </li></Link>
            <Link to="/"><li className="sub-menu-link">
              Templates
            </li></Link>
            <Link to="/"> <li className="sub-menu-link">
             Schedules
            </li></Link>
          </ul>
        </li>

        <li key="6" className="menu-item">
          <Link to="">
            <img src={cloudIcon} alt="icon" />
          </Link>
          <ul className="sub-menu">
          <Link to="/"> <li className="sub-menu-link">
             Deals
            </li></Link>
            <Link to="/"> <li className="sub-menu-link">
            Tasks
            </li></Link>
            <Link to="/"> <li className="sub-menu-link">
             My team
            </li></Link>
            <Link to="/"> <li className="sub-menu-link">
           Statistics
            </li></Link>
          </ul>
        </li>

        <li key="7" className="menu-item">
          <NavLink href="">
            <img src={centrlIcon} alt="icon" />
          </NavLink>
          <ul className="sub-menu">
          <Link to="/"><li className="sub-menu-link">
              Email Finder
            </li></Link>
            <Link to="/"> <li className="sub-menu-link">
              LI Prospect Finder
            </li></Link>
            <Link to="/"><li className="sub-menu-link">
              Email Verifier
            </li></Link>
            <Link to="/"> <li className="sub-menu-link">
              Gmail Email Tracker
            </li></Link>
          </ul>
        </li>

        <li key="8" className="menu-item">
          <NavLink href="">
            <img src={settigIcon} alt="icon" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
