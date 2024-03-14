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

const DatabaseSearch = () => {

const [isOpen, setIsOpen] = useState(true);

const handleSeeDetails = () => {
  setIsOpen(!isOpen)
}


  return (
    <Layout>
      <Header className="header">
        <Topbar Pagetitle="Database Search"/>
      </Header>
      <Layout>
        <Sider>
          <SideNav />
        </Sider>
      <div className="w-full">
        {/* <div> <h1 className="mx-2 rounded-lg mt-2 md:mx-5 text-[22px] md:text-[24px] font-bold p-3 bg-[#ffffff] text-[#000000] capitalize">{window.location.pathname.substr(1,)}</h1>
        </div> */}
      <div className="flex flex-col gap-2 sm:gap-5 md:gap-10 md:flex-row p-2 md:pr-5 w-full" >
       <div className="w-full md:w-[50%] lg:w-[40%] h-full">
        <DbSearchSidebar/>
        </div>
         <div className="w-full h-[87vh] md:w-[50%] lg:w-[60%]">
         <Layout>
          <Content style={{ marginTop: "-10px", marginBottom: "20px" }}>
          <div className="container mx-auto text-center sm:text-start">
            <div>
              <div>
                <Card className="p-0 mt-5">
                  <h2 className="text-[18px] md:text-[20px] font-bold">Saved Searches</h2>

                    <div className="saved-searches ">
                    <img src={SavefilterIcon} alt="icon" />
                    <p>Select filters and save them to create a new saved search</p>
                    </div>

                </Card>
              </div>
              <div>
                <Card className="p-0">

                  <div className="recent-searches-top flex flex-col sm:flex-row">
                    <Title level={4}>Recent Searches</Title>
                    <Button onClick={handleSeeDetails} className="details-btn">Open Details</Button>
                  </div>

                  {
                    isOpen && (
                      <div className="searches-history flex flex-col sm:flex-row ">

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
        </Layout>
         </div>
      </div>
      </div>
       
        
       
      </Layout>
    </Layout>
  );
};

export default DatabaseSearch;
