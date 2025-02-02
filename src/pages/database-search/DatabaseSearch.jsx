import React, { useState} from "react";
import SideNav from "../../components/sidebar/SideNav";
import DbSearchSidebar from "../../components/searchsidebar/DbSearchSidebar";
import Topbar from "../../components/header/Header";
import Layout, { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Row, Col, Card, Button } from "antd";
import SavefilterIcon from '../../assets/images/filter-serch-icon.png'
import {Typography} from "antd";
const { Title, Paragraph} = Typography;
import './main.css'
import SearchIcon from '../../assets/images/recent-searches-icon.png'
import { useEffect } from "react";

const DatabaseSearch = () => {
const [isOpen, setIsOpen] = useState(true);
const handleSeeDetails = () => {
  setIsOpen(!isOpen)
}

  return (
    <div className="">
      <Header className="header">
        <Topbar Pagetitle="Database Search"/>
      </Header>
      <Layout>
        <Sider>
          <SideNav />
        </Sider>
     
      <div className="main overflow-x-scroll">
       <div>
        <DbSearchSidebar/>
        </div>
         <div className="sectwo ">
         <div>
          <Content style={{ marginTop: "-10px", marginBottom: "20px" }}>
          <div className="container mx-auto text-center sm:text-start">
            <div>
              <div>
                <Card className="p-0 mt-5 w-[300px] md:w-auto savedcard ">
                  <h2 className="text-[16px] lg:text-[20px] font-bold">Saved Searches</h2>
                  
                    <div className="saved-searches ">
                    <img src={SavefilterIcon} alt="icon" />
                    <p>Select filters and save them to create a new saved search</p>
                    </div>

                </Card>
              </div>
              <div>
                <Card className="p-0">

                  <div className="recent-searches-top flex flex-col lg:flex-row">
                    <h2 className="text-[16px] lg:text-[20px] font-bold">Recent Searches</h2>
                    <Button onClick={handleSeeDetails} className="details-btn">Open Details</Button>
                  </div>

                  {
                    isOpen && (
                      <div className="searches-history flex flex-col lg:flex-row ">

                      <div className="left flex flex-col sm:flex-row">
                        <img src={SearchIcon} alt="icon" />
                        <div className="time">
                              <Paragraph className="search-time">13 Oct, 1:54 AM</Paragraph>
                              <Paragraph className="past">23 hours ago</Paragraph>
                        </div>
                      </div>
  
                      <div className="right">
                        <Button className="btn-save">Save</Button>
                      </div>
  
                    </div>
                    )
                  }

          

                </Card>
              </div>
            </div>
          </div>       
          </Content>
        </div>
         </div>
      </div>
      
       
      </Layout>
    </div>
  );
};

export default DatabaseSearch;
