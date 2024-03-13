import React, { useState } from "react";
import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import { Row, Col, Card } from "antd";
import AccountSidebar from "../../components/account-sidebar/AccountSidebar";
import { Typography, Form, Input, Button, Select, Table } from "antd";
const { Paragraph, Title } = Typography;
import "./main.css";

const SearchSettings = () => {
  return (
    <Layout>
      <Header className="header">
        <Topbar />
      </Header>
      <Layout>
        <Sider>
          <SideNav />
        </Sider>
        <Layout>
          <Content>
          <div className='flex flex-col md:flex-row p-2 md:p-5 gap-5'>
                <div className='md:w-[30%] md:mt-[16px]'>
                    <AccountSidebar />
                </div>

                <div className='md:w-[70%] md:ml-auto mt-0'>
                <Card>
                  <Title level={4}>Search Settings</Title>
                  <Paragraph>
                    These settings affect how Snov.io searches for prospects and
                    the results you'll receive. If you want to narrow down your
                    search,
                    <br />
                    you can uncheck unnecessary boxes.
                  </Paragraph>

                  <div className="prospectes-data">
                    <Title level={5}>Prospect data</Title>

                    <Form className="checkbox-form flex flex-col items-start lg:flex-row">
                      <div className="checklist ">
                        <div class="round">
                          <input
                            name="agreement"
                            error=""
                            type="checkbox"
                            id="checkbox"
                            class="h-5 w-5 cursor-pointer rounded-full border-red-300 bg-[#fff] text-[#C1C1C1] focus:ring-green"
                          />
                        </div>
                        <span>Find full name and domain</span>
                      </div>

                      <div className="checklist">
                        <div class="round">
                          <input
                            name="agreement"
                            error=""
                            type="checkbox"
                            id="checkbox"
                            class="h-5 w-5 cursor-pointer rounded-full border-red-300 bg-[#fff] text-[#C1C1C1] focus:ring-green"
                          />
                        </div>

                        <span>Collect personal emails</span>
                      </div>
                    </Form>
                  </div>

                  <div className="search-options">
                    <Title level={5}>Search options</Title>
                    <Paragraph>
                      Choose which sources you`d like Snov.io to use when
                      searching for prospect's email. By default, Leadbud.io
                      uses the most relevant data,
                      <br />
                      like prospect's current job, to find an email. If we can't
                      find an email using this data, the search will continue
                      through alternative sources
                      <br />
                      you can choose below.
                    </Paragraph>
                  </div>



                  <div className="search-through">

                    <Title level={5}>Search through:</Title>

                  <Form className="checkbox-form">
                      <div className="checklist">
                        <div class="round">
                          <input
                            name="agreement"
                            error=""
                            type="checkbox"
                            id="checkbox"
                            class="h-5 w-5 cursor-pointer rounded-full border-red-300 bg-[#fff] text-[#C1C1C1] focus:ring-green"
                          />
                        </div>
                        <span>Alternative current jobs domains</span>
                      </div>

                      <div className="checklist">
                        <div class="round">
                          <input
                            name="agreement"
                            error=""
                            type="checkbox"
                            id="checkbox"
                            class="h-5 w-5 cursor-pointer rounded-full border-red-300 bg-[#fff] text-[#C1C1C1] focus:ring-green"
                          />
                        </div>

                        <span>Sites linked to the prospect</span>
                      </div>

                      <div className="checklist">
                        <div class="round">
                          <input
                            name="agreement"
                            error=""
                            type="checkbox"
                            id="checkbox"
                            class="h-5 w-5 cursor-pointer rounded-full border-red-300 bg-[#fff] text-[#C1C1C1] focus:ring-green"
                          />
                        </div>

                        <span>Social profiles related to the prospect</span>
                      </div>

                      <Button className="btn-search">Search</Button>
                    </Form>

                  </div>
                </Card>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SearchSettings;
