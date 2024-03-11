import React, {useState} from 'react'
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
  import { FaRegCopy } from "react-icons/fa6";
  import { FaRegTrashCan } from "react-icons/fa6";

  import './main.css'


const columns = [
    {
      title: "List",
      dataIndex: "list",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Owner",
      dataIndex: "owner",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
        title: "Updated",
        dataIndex: 'updated',
    },
    {
        dataIndex: 'action'
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

  const data = [
    {
      key: "1",
      list: "Do-not-email List",
      owner: "Alex Summers",
      quantity: "0",
      updated: '11 Oct 2023, 12:12 AM',
      action:<div className="action"> <Button className="add-list"><FaRegCopy /></Button> <Button className="add-list"><FaRegTrashCan /></Button></div>
  
    },
    {
        key: "2",
        list: "Do-not-email List",
        owner: "Alex Summers",
        quantity: "0",
        updated: '11 Oct 2023, 12:12 AM',
        action:<div className="action"> <Button className="add-list"><FaRegCopy /></Button> <Button className="add-list"><FaRegTrashCan /></Button></div>
    
      },
      {
        key: "3",
        list: "Do-not-email List",
        owner: "Alex Summers",
        quantity: "0",
        updated: '11 Oct 2023, 12:12 AM',
        action:<div className="action"> <Button className="add-list"><FaRegCopy /></Button> <Button className="add-list"><FaRegTrashCan /></Button></div>
    
      },
  ];

const DontEmailList = () => {

    const [selectionType, setSelectionType] = useState("checkbox");


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
                    <Title level={4}>Do-Not-Email List</Title>
                    <Paragraph>Add a do-not-email list to your campaigns to never accidentally send an email to someone you shouldn’t. Note, the domains and addresses<br />
you add to this list will be blocked for all team members.</Paragraph>

                    <div className="top-area">
                        <Button className='my-btn'><PlusCircleOutlined className='text-medium text-dark-blue' />Create new list</Button>

                       

                      

                        
                    </div>


                    <div className="table-area-email">
                        <Table
                                  rowSelection={{
                                    type: selectionType,
                                    ...rowSelection,
                                  }}
                                  columns={columns}
                                  dataSource={data}
                                  pagination={false}
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

export default DontEmailList