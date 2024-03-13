import React from 'react'
import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import { Row, Col, Card } from 'antd';
import AccountSidebar from '../../components/account-sidebar/AccountSidebar';
import userThumb from '../../assets/images/user-thumbnail.png'
import { Typography, Form, Input , Button} from 'antd';
const { Paragraph, Title} = Typography; 
import './account.css'



const Account = () => {
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

                    <div className="user-top-area">
                      <div className="user-image">
                        <img src={userThumb} alt="user-thumbnail" />
                      </div>
                      <div className="helper-text">
                          <Paragraph className='upload-photo'>Upload profile photo</Paragraph>
                          <Paragraph className='file-info'>Max size 2 MB. Formats: JPG/JPEG, PNG, GIF</Paragraph>
                      </div>
                    </div>


                    <Title level={4} className='heading-4th'>Details</Title>
                    <Form className=''>
                    <div className=''>
                      <div className='flex flex-col md:gap-5 w-full md:flex-row p-0'>
                        <div className='w-full'>
                        <Form.Item>
                          <label className='label'>First Name:</label>
                          <Input placeholder='Alex' className='my-input'/>
                        </Form.Item>

                      </div>
                      <div className='w-full'>
                        <Form.Item>
                          <label className='label'>Last Name:</label>
                          <Input placeholder='Summers' className='my-input'/>
                        </Form.Item>

                      </div>
                      </div>
                      <div className='flex flex-col md:gap-5 w-full md:flex-row'>
                      <div className='w-full'>
                        <Form.Item>
                          <label className='label'>Email Address:</label>
                          <Input placeholder='alexsummers@gmail.com' className='my-input'/>
                        </Form.Item>

                      </div>
                      <div className='w-full'>
                        <Form.Item>
                          <label className='label'>Phone Number:</label>
                          <Input placeholder='+01234567891'className='my-input'/>
                        </Form.Item>

                      </div>
                      </div>
                      <div className='flex flex-col md:gap-5 w-full md:flex-row'>
                      <div className='w-full'>
                        <Form.Item>
                          <label className='label'>IP:</label>
                          <Input placeholder='206.84.188.52' className='my-input'/>
                        </Form.Item>

                      </div>
                      <div className='w-full'>
                        <Form.Item>
                          <label className='label'>Currency:</label>
                          <Input placeholder='US Dollar' className='my-input'/>
                        </Form.Item>

                      </div> </div>
                      <div className='flex flex-col md:gap-5 w-full md:flex-row'>
                      <div className='w-full'>
                        <Form.Item>
                          <label className='label'>Location:</label>
                          <Input placeholder='United State of America' className='my-input'/>
                        </Form.Item>

                      </div>
                      <div className='w-full'>
                        <Form.Item>
                          <label className='label'>Timezone:</label>
                          <Input placeholder='Asia/Karachi +05:00' className='my-input'/>
                        </Form.Item>

                      </div>
                      </div>

                      <div className="col-span-12 send-leads flex md:items-center">
                <div className="round">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="h-4 w-4 md:h-8 md:w-8 cursor-pointer rounded-full border-red-300 bg-[#fff] text-[#C1C1C1] focus:ring-green"
                  />
                </div>
                <span className="text-[#030621] text-[14px]">
                I want to receive important updates and news from leadbud.io
                </span>
              </div>

                    </div>

                    <Button className='search-btn '>Save</Button>
                    </Form>
                  </Card>
                
                </div>


            </div>
       
        </Content>
      </Layout>
    </Layout>
  </Layout>




  )
}

export default Account