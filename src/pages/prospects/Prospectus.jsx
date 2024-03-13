import React, { useState } from "react";
import "./prospetus.css";
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
import { Dropdown, Space } from "antd";

const Prospectus = () => {
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
      <h1 className="mx-2 rounded-lg mt-2 md:mx-5 text-2xl md:text-3xl xl:text-4xl font-bold p-5 bg-[#ffffff] text-[#000000]">Prospects</h1>
      <div gutter={20} className="px-2 md:px-5 flex flex-col md:flex-row gap-5 lg:gap-10">
        <div className="md:w-[40%] lg:w-[25%] mt-3  ">
          <ProspectsSidebar />
        </div>

        <div className=" md:w-[60%] lg:w-[75%] ">
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

              <div className="prospects-main-view">
                <Paragraph className="info ">
                  You Don't Have Any Scrapers Yet. Here Are Some Ways You Can
                  Fill Your Scraper List:
                </Paragraph>

                <div className="flex flex-col lg:flex-row gap-5">
                
                    <div className="item-first mb-auto mt-0">
                      <img src={logo} alt="logo" className="logo" />
                      <div className="database-search">
                        <div>
                          <img src={dbIcon} alt="icon" />
                        </div>

                        <div>
                          <Paragraph className="title">
                            Prospect Database Search
                          </Paragraph>
                          <Paragraph className="description">
                            Find prospects by name, job title, location, skills
                            and more
                          </Paragraph>
                        </div>
                      </div>

                      <div className="scaling">
                        <Paragraph className="p">Max Scaling</Paragraph>
                        <Paragraph className="p">$124,49</Paragraph>
                      </div>

                      <div className="compaign-area">
                        <Paragraph className="info">
                          Enter Domain Or Company Name
                        </Paragraph>
                        <Form>
                          <Input
                            className="prosperctus-input"
                            placeholder="example.com"
                          />
                        </Form>

                        <Paragraph className="search-info-p">
                          Find prospects by name, job title,
                         
                          location, skills and more
                        </Paragraph>

                        <Button className="btn-tools">
                          <img src={launchIcon} alt="icon" />
                          Launch Campaign
                        </Button>
                      </div>
                    </div>
                

                  <div>
                    <div className="ext-item">
                      <div className="first">
                        <img src={emailExt} alt="ext" />
                        <div>
                          <Title level={5}>
                            Install Email Finder Extension
                          </Title>
                          <Paragraph>
                            to collect emails on websites and search results
                            pages
                          </Paragraph>
                        </div>
                      </div>

                      <div className="arrow">
                        <img src={arrowIcon} alt="arrow" />
                      </div>
                    </div>

                    <div className="ext-item">
                      <div className="first">
                        <img src={bulkExt} alt="ext" />
                        <div>
                          <Title level={5}>
                            Collect enriched targeted prospects in bulk
                          </Title>
                          <Paragraph>by uploading a list of domains</Paragraph>
                        </div>
                      </div>

                      <div className="arrow">
                        <img src={arrowIcon} alt="arrow" />
                      </div>
                    </div>

                    <div className="ext-item">
                      <div className="first">
                        <img src={scraperExt} alt="ext" />
                        <div>
                          <Title level={5}>Upload your own Scraper list</Title>
                          <Paragraph>
                            to verify, contact, manage and convert prospects
                          </Paragraph>
                        </div>
                      </div>

                      <div className="arrow">
                        <img src={arrowIcon} alt="arrow" />
                      </div>
                    </div>

                    <div className="ext-item">
                      <div className="first">
                        <img src={cemployeeExt} alt="ext" />
                        <div>
                          <Title level={5}>
                            Find company employee email contacts
                          </Title>
                          <Paragraph>
                            through their company name or domain
                          </Paragraph>
                        </div>
                      </div>

                      <div className="arrow">
                        <img src={arrowIcon} alt="arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Prospectus;
