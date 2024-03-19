import React, { useState } from "react";
import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import { Row, Col, Card } from "antd";
import AccountSidebar from "../../components/account-sidebar/AccountSidebar";
import { Typography, Form, Input, Button, Select ,Table} from "antd";
const { Paragraph, Title } = Typography;
import "./main.css";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;




const columns = [
  {
    title: "Credits amount",
    dataIndex: "amount",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Current balance",
    dataIndex: "balance",
  },
  {
    title: "Info",
    dataIndex: "info",
  },
  {
      title: "Details",
      dataIndex: 'details',
  },
  {
      title: 'Date',
      dataIndex: 'date'
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
    amount: "+50.00",
    balance: "50.00",
    info: "Credits from free pricing plan",
    details: '-',
    date: '11 Oct 2023, 12:12 AM'
  },
  {
      key: "2",
      amount: "+50.00",
      balance: "50.00",
      info: "Credits from free pricing plan",
      details: '-',
      date: '11 Oct 2023, 12:12 AM'
    },
    {
      key: "3",
      amount: "+50.00",
      balance: "50.00",
      info: "Credits from free pricing plan",
      details: '-',
      date: '11 Oct 2023, 12:12 AM'
    },
];










const Transactions = () => {

  const [selectionType, setSelectionType] = useState("checkbox");

  const [dates, setDates] = useState(null);
  const [value, setValue] = useState(null);
  const disabledDate = (current) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") >= 7;
    const tooEarly = dates[1] && dates[1].diff(current, "days") >= 7;
    return !!tooEarly || !!tooLate;
  };
  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };






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
          <div className='flex flex-col md:flex-row p-2 md:p-5 gap-5'>
                <div className='md:w-[30%] md:mt-[16px]'>
                    <AccountSidebar />
                </div>

                <div className='md:w-[70%] md:ml-auto mt-0'>
                <Card>
                  <Title level={4}>Transactions</Title>

                  <div className="transaction-area">
                    <Form className="transaction-form flex-wrap">
                      <div>
                        <label>Transaction type</label>
                        <Form.Item>
                          <Select
                            className="my-select"
                            defaultValue="All transactions"
                            style={{
                              width: 120,
                            }}
                            options={[
                              {
                                value: "All transactions",
                                label: "All transactions",
                              },
                            ]}
                          />
                        </Form.Item>
                      </div>

                      <div className="date-range">
                        <label>Date Range</label>

                        <RangePicker
                          value={dates || value}
                          disabledDate={disabledDate}
                          onCalendarChange={(val) => {
                            setDates(val);
                          }}
                          onChange={(val) => {
                            setValue(val);
                          }}
                          onOpenChange={onOpenChange}
                          changeOnBlur
                        />
                      </div>

                      <div className="button-area">
                        <Button className="filter">Filter</Button>
                        <Button className="reset">Reset</Button>
                      </div>
                    </Form>
                  </div>



                  <div className="table-area-transaction overflow-x-scroll mt-2">
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
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Transactions;
