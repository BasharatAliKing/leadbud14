import React, { useState } from "react";
import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import { Row, Col, Card } from "antd";
import AccountSidebar from "../../components/account-sidebar/AccountSidebar";
import { Typography, Form, Input, Button } from "antd";
const { Paragraph, Title } = Typography;
import "./main.css";

const MyTeam = () => {
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
                  <Title level={4}>My Team</Title>

                  <Paragraph className="text-[#7B7B7B] text-[15px]">
                    Invite users to your team to share your account credits and
                    recipients. Plus, unlock team CRM features, share data and
                    templates, manage
                    <br />
                    permissions and analyze each member’s input on any Pro plan.
                    View plans.
                  </Paragraph>

                  <Form className="form-item flex-wrap">
                    <Form.Item >
                      <Input placeholder="example.com" className="my-input" />
                     
                    </Form.Item>
                    <Button className="my-btn">Search</Button>
                  </Form>
                </Card>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MyTeam;
