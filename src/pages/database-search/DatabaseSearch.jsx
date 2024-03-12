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
      <div className="flex flex-col gap-5 md:gap-10 md:flex-row w-full p-5">
       <div className="w-full md:w-[50%] lg:w-[40%]">
        <DbSearchSidebar/>
        </div>
         <div className="w-full md:w-[50%] lg:w-[60%]">
         <Layout>
          <Content style={{ marginTop: "20px", marginBottom: "20px" }}>
          <div className="container mx-auto text-center sm:text-start">
            <Row>
              <Col xs={{span: 24}}>
                <Card>
                  <Title level={4}>Saved Searches</Title>

                    <div className="saved-searches">
                    <img src={SavefilterIcon} alt="icon" />
                    <Paragraph>Select filters and save them to create a new saved search</Paragraph>
                    </div>

                </Card>
              </Col>


              <Col xs={{span: 24}}>
                <Card>

                  <div className="recent-searches-top flex flex-col sm:flex-row">
                    <Title level={4}>Recent Searches</Title>
                    <Button onClick={handleSeeDetails} className="details-btn">Open Details</Button>
                  </div>

                  {
                    isOpen && (
                      <div className="searches-history flex flex-col sm:flex-row">

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
              </Col>
            </Row>
          </div>
        
              
          </Content>
        </Layout>
         </div>
      </div>
       
        
       
      </Layout>
    </Layout>
  );
};

export default DatabaseSearch;
