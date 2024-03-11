import React, { useState } from "react";
import Layout from "antd/es/layout/layout";
import ProspectsSidebar from "../../components/prospects-sidebar/ProspectsSidebar";
import { Card, Col, Form, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;
import editIcon from "../../assets/images/edit.png";
import trashIcon from "../../assets/images/trash-icon.png";
import { Button } from "antd";
import Tippy from "@tippyjs/react";
import verifyIcon from "../../assets/images/verif.png";
import launchIcon from "../../assets/images/lauch-icon.png";
import createIcon from "../../assets/images/create-campgain.png";
import addIcon from "../../assets/images/apps-add.png";
import importIcon from "../../assets/images/file-import.png";
import copyIconn from "../../assets/images/duplicate.png";
import logo from "../../assets/images/logo.png";
import dbIcon from "../../assets/images/databae-circle-icon.png";
import { Input } from "antd";
import emailExt from "../../assets/images/email-finder-ext.png";
import bulkExt from "../../assets/images/collect-bulk.png";
import scraperExt from "../../assets/images/upload-own-list.png";
import cemployeeExt from "../../assets/images/company-employee-list.png";
import arrowIcon from "../../assets/images/arrow.png";
import './main.css'
import { Dropdown, Space,  Table,
    Divider } from "antd";

    import {
        DownOutlined,
        PlusCircleOutlined,
        SearchOutlined,
      } from "@ant-design/icons";
      import { AiOutlineClose } from "react-icons/ai";


    const columns = [
        {
          title: "Scrapers",
          dataIndex: "name",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Email",
          dataIndex: "email",
        },
        {
          title: "Company",
          dataIndex: "position",
        },
        {
          title: "Country",
          dataIndex: "country",
        },
        {
          title: "Lists",
          dataIndex: "lists",
        },
        {
          title: "Tags",
          dataIndex: "action",
        },
      ];
      const data = [
        {
          key: "1",
          name: "Alex Summers",
          email: "alexsummers@gmail.com",
          position: "SEO Specialist",
          company: "Leadbud.io",
          country: "USA",
          lists: "New Scrapers lists",
          action: <Button className="add-list"> Campaign Completed <AiOutlineClose style={{marginLeft: '10px'}} /></Button>
      
        },
        {
          key: "2",
          name: "Alex Summers",
          email: "alexsummers@gmail.com",
          position: "SEO Specialist",
          company: "Leadbud.io",
          country: "USA",
          lists: "New Scrapers lists",
          action: <Button className="add-list"> Campaign Completed <AiOutlineClose style={{marginLeft: '10px'}} /></Button>
      
        },
        {
          key: "3",
          name: "Alex Summers",
          email: "alexsummers@gmail.com",
          position: "SEO Specialist",
          company: "Leadbud.io",
          country: "USA",
          lists: "New Scrapers lists",
          action: <Button className="add-list"> Campaign Completed <AiOutlineClose style={{marginLeft: '10px'}} /></Button>
      
        },

        {
          key: "4",
          name: "Alex Summers",
          email: "alexsummers@gmail.com",
          position: "SEO Specialist",
          company: "Leadbud.io",
          country: "USA",
          lists: "New Scrapers lists",
          action: <Button className="add-list"> Campaign Completed <AiOutlineClose style={{marginLeft: '10px'}} /></Button>
      
        },
        {
          key: "5",
          name: "Alex Summers",
          email: "alexsummers@gmail.com",
          position: "SEO Specialist",
          company: "Leadbud.io",
          country: "USA",
          lists: "New Scrapers lists",
          action: <Button className="add-list"> Campaign Completed <AiOutlineClose style={{marginLeft: '10px'}} /></Button>
      
        },

        {
          key: "6",
          name: "Alex Summers",
          email: "alexsummers@gmail.com",
          position: "SEO Specialist",
          company: "Leadbud.io",
          country: "USA",
          lists: "New Scrapers lists",
          action: <Button className="add-list"> Campaign Completed <AiOutlineClose style={{marginLeft: '10px'}} /></Button>
      
        },

        {
          key: "7",
          name: "Alex Summers",
          email: "alexsummers@gmail.com",
          position: "SEO Specialist",
          company: "Leadbud.io",
          country: "USA",
          lists: "New Scrapers lists",
          action: <Button className="add-list"> Campaign Completed <AiOutlineClose style={{marginLeft: '10px'}} /></Button>
      
        },

        {
          key: "8",
          name: "Alex Summers",
          email: "alexsummers@gmail.com",
          position: "SEO Specialist",
          company: "Leadbud.io",
          country: "USA",
          lists: "New Scrapers lists",
          action: <Button className="add-list"> Campaign Completed <AiOutlineClose style={{marginLeft: '10px'}} /></Button>
      
        },

        {
          key: "9",
          name: "Alex Summers",
          email: "alexsummers@gmail.com",
          position: "SEO Specialist",
          company: "Leadbud.io",
          country: "USA",
          lists: "New Scrapers lists",
          action: <Button className="add-list"> Campaign Completed <AiOutlineClose style={{marginLeft: '10px'}} /></Button>
        },

        {
          key: "10",
          name: "Alex Summers",
          email: "alexsummers@gmail.com",
          position: "SEO Specialist",
          company: "Leadbud.io",
          country: "USA",
          lists: "New Scrapers lists",
          action: <Button className="add-list"> Campaign Completed <AiOutlineClose style={{marginLeft: '10px'}} /></Button>
      
        },
      ];
      
      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === "Disabled User",
          // Column configuration not to be checked
          name: record.name,
        }),
      };


const NewProspects = () => {
    const [selectionType, setSelectionType] = useState("checkbox");

    
    const items = [
        {
          label: <a href="https://www.antgroup.com">Import from file</a>,
          key: "0",
        },
        {
          label: <a href="https://www.aliyun.com">Create manually</a>,
          key: "1",
        },
        
      ];


  return (
    <Layout>
    <Row gutter={20}>
      <Col lg={{ span: 6 }}>
        <ProspectsSidebar />
      </Col>

      <Col lg={{ span: 18 }}>
        <div className="prospets-data">
          <Card>
            <div className="list-info">
              <Paragraph className="list-name">New Prospects List</Paragraph>
              <div className="icons">
                <Tippy content="Edit list name">
                  <Button className="list-btn">
                    <img src={editIcon} alt="icon" />
                  </Button>
                </Tippy>
                <Tippy content="Delete list">
                  <Button className="list-btn">
                    <img src={trashIcon} alt="icon" />
                  </Button>
                </Tippy>
              </div>
            </div>

            <div className="tools-area">

              <div className="left-side">
              <div className="top">
                <Button className="btn-tools">
                  <img src={verifyIcon} alt="icon" />
                  Verify List
                </Button>

                <Tippy content="Launch a drip email campaign for this list">
                  <Button className="btn-tools launch">
                    <img src={launchIcon} alt="icon" />
                    Launch Campaign
                  </Button>
                </Tippy>
              </div>

              <div className="list-tools">
             
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
            
                      <Button className="user-tools">
                      <Tippy content="Create or import new prospects">
                        <img src={createIcon} alt="icon" />
                        </Tippy>
                      </Button>
                   
                  </Dropdown>
                

                <Tippy content="Manage custom fields or data tabs">
                  <Button className="user-tools">
                    <img src={addIcon} alt="icon" />
                  </Button>
                </Tippy>

                <Tippy content="Export prospects list">
                  <Button className="user-tools">
                    <img src={importIcon} alt="icon" />
                  </Button>
                </Tippy>

                <Tippy content="no duplocate found">
                  <Button className="user-tools last">
                    <img src={copyIconn} alt="icon" />
                  </Button>
                </Tippy>
              </div>
              </div>

       


              <div className="list-tools email-filters">
                <Button className="user-tools"><span className="green"></span>15</Button>
                <Button className="user-tools"><span className="red"></span>03</Button>
                <Button className="user-tools"><span className="orange"></span>04</Button>
                <Button className="user-tools"><span className="blue"></span>03</Button>

              </div>



            </div>


            <Table style={{ marginTop: '40px'}}
                                  rowSelection={{
                                    type: selectionType,
                                    ...rowSelection,
                                  }}
                                  columns={columns}
                                  dataSource={data}
                                  pagination={false}
                                />

         
          </Card>
        </div>
      </Col>
    </Row>
  </Layout>
  )
}

export default NewProspects