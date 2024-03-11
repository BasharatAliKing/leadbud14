import React, {useState} from 'react'
import './main.css'
import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import { Row, Col, Card } from "antd";
import AccountSidebar from "../../components/account-sidebar/AccountSidebar";
import { Typography, Form , Input, Button, Select, Table} from "antd";
const { Paragraph, Title, } = Typography;
import { SearchOutlined } from "@ant-design/icons";
import {
    PlusCircleOutlined
  } from "@ant-design/icons";


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Warm-Up",
      dataIndex: "warmup",
    },
    {
        title: "Sent",
        dataIndex: 'sent',
    },
    {
        title: 'Limit',
        dataIndex: 'limit',
    }
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

  const data = []

const EmailAccounts = () => {


    const [selectionType, setSelectionType] = useState("checkbox");

    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

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
            <Col lg={{ span: 6 }}>
              <AccountSidebar />
            </Col>

            <Col lg={{ span: 16 }}>
                <Card>
                    <Title level={4}>Email Accounts</Title>

                    <div className="top-area">
                        <Button className='my-btn'><PlusCircleOutlined className='text-medium text-dark-blue' /> Add email account</Button>

                        <div className='right-area'>
                        <Select className='my-select'
                        defaultValue="All email accounts"
                        onChange={handleChange}
                        options={[
                            { value: 'All email accounts', label: 'All email accounts' },
                            { value: 'lucy', label: 'Lucy' },
                        ]}
                        />

                        <Form>
                            <Form.Item>
                                <Input  className='search' 
                                 prefix={<SearchOutlined className="site-form-item-icon" />}placeholder='Search by position'/>
                            </Form.Item>
                        </Form>
                        </div>

                      

                        
                    </div>


                    <div className="table-area">
                        <Table
                                  rowSelection={{
                                    type: selectionType,
                                    ...rowSelection,
                                  }}
                                  columns={columns}
                                  dataSource={data}
                                />
                        </div>

                </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default EmailAccounts