import React, { useState} from "react";
import "./main.css";
import {
  Layout,
  Row,
  Col,
  Card,
  Typography,
  Input,
  Form,
  Table,
  Divider,
} from "antd";
const { Title, Paragraph } = Typography;
import { Button } from "antd";
import "./main.css";
import { FaPlus } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import {
    DownOutlined,
    PlusCircleOutlined,
    SearchOutlined,
  } from "@ant-design/icons";
  import Tippy from "@tippyjs/react";
  import { FaRegCopy } from "react-icons/fa6";
  import copy from 'clipboard-copy';



const IndividualVerificatinTool = () => {
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
      action: (
        <Button className="add-list">
          <PlusCircleOutlined /> Add to List
        </Button>
      ),
      sendemail: (
        <Button className="table-btn">
          <FaEnvelope style={{ marginRight: "5px" }} /> Send Email
        </Button>
      ),
    },
  ];
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div className="container">
      <Layout>
        <Row>
          <Col lg={{ span: 24 }}>
            <Card>
              <Paragraph>
                Verify single tools using our multilayer verification process
                that includes syntax check, MX record check, and SMTP
                authentication.
              </Paragraph>

              <Paragraph className="type-in">
                Type in an email for verification
              </Paragraph>

              <Form>
                <Form.Item>
                  <Input placeholder="Tool Name" className="ant-my-input" />
                </Form.Item>
              </Form>

              <Button className="search-btn">Search</Button>
            </Card>
          </Col>

          <Col lg={{ span: 24 }}>
            <Card>
              <div className="new-search-results">
                <div className="name-and-search-term">
                  <Paragraph className="name">John Doe</Paragraph>
                </div>

                <div className="mail">
                  <Tippy content={
                    <div><span className="">{emailText}</span> 
                    <ul className="border-t-2 w-100 mt-1 pt-1">
                      <li className="text-[12px]">This email address is not valid</li>
                      <li className="text-[12px]">This email format is valid</li>
                      <li className="text-[12px]">This domain isn't disposable</li>
                      <li className="text-[12px]">This domain is not freemail</li>
                      <li className="text-[12px]">This email address is not gibberish</li>
                    </ul>


                    </div>
                  }>
                    
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

                <div className="time-date">
                  <span>14 Nov 2023, 9:06 PM</span>
                </div>

                <div className="add-to-list">
                  <Button className="add">
                    <FaPlus style={{ marginRight: "5px" }} /> Add to list
                  </Button>
                </div>

                <div className="send-email">
                  <Button className="send">
                    <FaEnvelope style={{ marginRight: "5px" }} /> Send email
                  </Button>
                </div>
              </div>
            </Card>
          </Col>

          <Col lg={{ span: 24 }} style={{ marginTop: "20px" }}>
            <Title level={4}>Previous email searches</Title>
            <span>You have 1 previously verified emails.</span>

            <Card>
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

export default IndividualVerificatinTool;
