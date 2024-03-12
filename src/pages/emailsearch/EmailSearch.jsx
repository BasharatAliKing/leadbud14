import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Typography,
  Form,
  Input,
  Button,
  Table,
  Divider,
} from "antd";
const { Title, Paragraph } = Typography;
import {
  DownOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "./main.css";
import { FaPlus } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import Tippy from "@tippyjs/react";
import { FaRegCopy } from "react-icons/fa6";

import copy from 'clipboard-copy';

const EmailSearch = () => {
  const [selectionType, setSelectionType] = useState("checkbox");

  const [isCopied, setIsCopied] = useState(false);
  const [isCopiedTableEmail, setIsCopiedTableEmail] = useState(false);


  const emailText = "user@domain.com";
  const emailText2 = "user1@domain.com";

  const handleCopyToClipboard = async () => {
    try {
      await copy(emailText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const handleCopyToClipboardTable = async () => {
    try {
      await copy(emailText2);
      setIsCopiedTableEmail(true);
      setTimeout(() => setIsCopiedTableEmail(false), 1500);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };
  
const columns = [
  {
    title: "PROSPECTS",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "EMAILS",
    dataIndex: "email",
  },
  {
    title: "ADDED",
    dataIndex: "position",
  },
  {
    title: "LIST",
    dataIndex: "action",
  },
  {
    dataIndex: "sendemail",
  },
];

const data = [
  {
    key: "1",
    name: "Alex Summers",
 email: (
        <div className="mail">
        <Tippy  content={
          <div><span className="">{emailText2}</span> 
          <ul className="border-t-2 w-100 mt-1 pt-1">
            <li className="text-[12px]">This email address is not valid</li>
            <li className="text-[12px]">This email format is valid</li>
            <li className="text-[12px]">This domain isn't disposable</li>
            <li className="text-[12px]">This domain is not freemail</li>
            <li className="text-[12px]">This email address is not gibberish</li>
          </ul>
  
  
          </div>
        }>
          <span className="cursor-pointer"><span className="status"></span> {emailText2}</span>
        </Tippy>
        <FaRegCopy
                      className={`copy-icon cursor-pointer ${
                        isCopiedTableEmail ? "copied" : ""
                      }`}
                      onClick={handleCopyToClipboardTable}
                    />
  
                    {isCopiedTableEmail && (
                      <div className="copy-message">
                        <span>Email address copied to clipboard!</span>
                      </div>
                    )}
        </div>
      ),
    position: "15 Nov 2023, 12:37 PM",
    action: (
      <Button className="add-list">
        <PlusCircleOutlined /> Add to List
      </Button>
    ),
    sendemail: (
      <Button className="table-btn" disabled>
        <FaEnvelope style={{ marginRight: "5px" }} /> Send Email
      </Button>
    ),
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {},
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};


  return (
    <div className="container p-1 md:p-3">
      <Layout>
        <Row>
          <Col xs={{ span: 24 }}>
            <Card>
              <Typography>
                Find emails from your lead's name and company{" "}
              </Typography>

              <Form className="my-form">
                <Row gutter={24}>
                  <Col lg={{ span: 8 }}>
                    <Paragraph className="mylabel">First Name</Paragraph>
                    <Form.Item>
                      <Input placeholder="Sarah" className="ant-my-input" />
                    </Form.Item>
                  </Col>

                  <Col lg={{ span: 8 }}>
                    <Paragraph className="mylabel">Last Name</Paragraph>
                    <Form.Item>
                      <Input placeholder="Standin" className="ant-my-input" />
                    </Form.Item>
                  </Col>

                  <Col lg={{ span: 8 }}>
                    <Paragraph className="mylabel">
                      Company Domain Name
                    </Paragraph>
                    <Form.Item>
                      <Input
                        placeholder="domain.com"
                        className="ant-my-input"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Button className="search-btn h-[40px] text-[16px] md:text-[18px] w-auto px-5 md:px-8">Find Email</Button>
              </Form>
            </Card>
          </Col>

          <Col lg={{ span: 24 }}>
            <Card className="overflow-x-scroll">
              <div className="new-search-results">
                <div className="name-and-search-term">
                  <Paragraph className="name">John Doe</Paragraph>
                  <span>John</span>
                </div>

                <div className="mail">
                  <Tippy
                    content={
                      <div>
                        <span className="">user@domain.com</span>
                        <ul className="border-t-2 w-100 mt-1 pt-1">
                          <li className="text-[12px]">
                            This email address is not valid
                          </li>
                          <li className="text-[12px]">
                            This email format is valid
                          </li>
                          <li className="text-[12px]">
                            This domain isn't disposable
                          </li>
                          <li className="text-[12px]">
                            This domain is not freemail
                          </li>
                          <li className="text-[12px]">
                            This email address is not gibberish
                          </li>
                        </ul>
                      </div>
                    }
                  >
                    <span className="cursor-pointer">
                      <span className="status"></span> {emailText}
                    </span>
                  </Tippy>

                  <FaRegCopy
                    className={`copy-icon cursor-pointer ${
                      isCopied ? "copied" : ""
                    }`}
                    onClick={handleCopyToClipboard}
                  />

                  {isCopied && (
                    <div className="copy-message">
                      <span>Email address copied to clipboard!</span>
                    </div>
                  )}
                </div>

                <div className="time-date w-52 flex">
                  <span>14 Nov 2023, 9:06 PM</span>
                </div>

                <div className="add-to-list">
                  <Button className="add">
                    <FaPlus style={{ marginRight: "5px" }} /> Add to list
                  </Button>
                </div>

                <div className="send-email">
                  <Button className="send" disabled>
                    <FaEnvelope style={{ marginRight: "5px" }} /> Send email
                  </Button>
                </div>
              </div>
            </Card>
          </Col>

          <Col lg={{ span: 24 }} style={{ marginTop: "20px" }}>
            <Title level={4}>Completed email searches</Title>
            <span>You've completed 3 email searches</span>

            <Card className="overflow-x-scroll">
              <Table
                rowSelection={{
                  type: selectionType,
                  ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                pagination={false}
              />
            </Card>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default EmailSearch;
