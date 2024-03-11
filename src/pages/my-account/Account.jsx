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
            <Row>
                <Col lg={{span:6}}>
                    <AccountSidebar />
                </Col>

                <Col lg={{span:16}}>
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
                    <Form className='form-details'>
                    <Row gutter={34}>
                      <Col lg={{span:12}}>
                        <Form.Item>
                          <label className='label'>First Name:</label>
                          <Input placeholder='Alex' className='my-input'/>
                        </Form.Item>

                      </Col>

                      <Col lg={{span:12}}>
                        <Form.Item>
                          <label className='label'>Last Name:</label>
                          <Input placeholder='Summers' className='my-input'/>
                        </Form.Item>

                      </Col>

                      <Col lg={{span:12}}>
                        <Form.Item>
                          <label className='label'>Email Address:</label>
                          <Input placeholder='alexsummers@gmail.com' className='my-input'/>
                        </Form.Item>

                      </Col>

                      <Col lg={{span:12}}>
                        <Form.Item>
                          <label className='label'>Phone Number:</label>
                          <Input placeholder='+01234567891'className='my-input'/>
                        </Form.Item>

                      </Col>


                      <Col lg={{span:12}}>
                        <Form.Item>
                          <label className='label'>IP:</label>
                          <Input placeholder='206.84.188.52' className='my-input'/>
                        </Form.Item>

                      </Col>


                      <Col lg={{span:12}}>
                        <Form.Item>
                          <label className='label'>Currency:</label>
                          <Input placeholder='US Dollar' className='my-input'/>
                        </Form.Item>

                      </Col>


                      <Col lg={{span:12}}>
                        <Form.Item>
                          <label className='label'>Location:</label>
                          <Input placeholder='United State of America' className='my-input'/>
                        </Form.Item>

                      </Col>


                      <Col lg={{span:12}}>
                        <Form.Item>
                          <label className='label'>Timezone:</label>
                          <Input placeholder='Asia/Karachi +05:00' className='my-input'/>
                        </Form.Item>

                      </Col>

                      <Col lg={{span:12}} className="col-span-12 send-leads flex items-center">
                <div className="round">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="h-8 w-8 cursor-pointer rounded-full border-red-300 bg-[#fff] text-[#C1C1C1] focus:ring-green"
                  />
                </div>
                <span className="text-[#030621] text-[14px]">
                I want to receive important updates and news from leadbud.io
                </span>
              </Col>

              

                    </Row>

                    <Button className='search-btn'>Save</Button>
                    </Form>
                  </Card>
                
                </Col>


            </Row>
       
        </Content>
      </Layout>
    </Layout>
  </Layout>




  )
}

export default Account