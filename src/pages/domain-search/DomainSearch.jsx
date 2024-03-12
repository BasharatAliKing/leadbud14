import React, { useState } from "react";
import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import {
  Col,
  Row,
  Card,
  Form,
  Input,
  Button,
  Table,
  Divider
} from "antd";
import { Typography } from "antd";
const { Paragraph } = Typography;
import "./domain-search.css";
import Logo from "../../assets/images/logo.png";
import {
  DownOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Tippy from "@tippyjs/react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { Tabs } from "antd";

const columns = [
  {
    title: "Scrapers",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Position",
    dataIndex: "position",
  },
  {
    dataIndex: 'action'
  }
];
const data = [
  {
    key: "1",
    name: "Alex Summers",
    email: "alexsummers@gmail.com",
    position: "SEO Specialist",
    action: <Button className="add-list"><PlusCircleOutlined /> Add to List</Button>

  },
  {
    key: "2",
    name: "Jim Green",
    email: "alexsummers@gmail.com",
    position: "SEO Specialist",
    action: <Button className="add-list"><PlusCircleOutlined /> Add to List</Button>
  },
  {
    key: "3",
    name: "Joe Black",
    email: "alexsummers@gmail.com",
    position: "SEO Specialist",
    action: <Button className="add-list"><PlusCircleOutlined /> Add to List</Button>
  },
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

const DomainSearch = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectionType, setSelectionType] = useState("checkbox");

  const handleCardOpnen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      <Header className="header">
        <Topbar Pagetitle="Domain Search" />
      </Header>
      <Layout>
        <Sider>
          <SideNav />
        </Sider>
        <Layout>
          <Content style={{ marginTop: "20px", marginBottom: "20px" }}>
            <div className="container p-2 md:p-5">
              <Layout>
                <Row>
                  <Col lg={{ span: 24 }}>
                    <Card>
                      <Paragraph className="domain-search-info">
                        Domain Search will find all email addresses attached to
                        a specific web domain. These addresses have been
                        collected and saved with Snovio's email address
                        <br />
                        search engine. Use our Bulk Domain Search if you have
                        multiple domains to search.
                      </Paragraph>

                      <Form>
                        <Form.Item>
                          <Paragraph className="p">
                            Enter Domain Or Company Name
                          </Paragraph>
                          <Input
                            className="my-input"
                            placeholder="leadbud.io"
                          />

                          <Button className="search-btn">Search</Button>
                        </Form.Item>
                      </Form>
                    </Card>
                  </Col>

                  <Col lg={{ span: 24 }}>
                    <Card>
                      <div className="card-top">
                        <img src={Logo} alt="logo" />

                        <Button className="see-less" onClick={handleCardOpnen}>
                          See Less <DownOutlined />
                        </Button>
                      </div>

                      {isOpen && (
                        <div className="search-data">
                          <Row gutter={50}>
                            <Col lg={{ span: 10 }}
                               xs={{span:24}}>
                              <div className="item-bg">
                                <span className="name">City:</span>
                                <span className="data ml-auto">New York</span>
                              </div>
                            </Col>

                            <Col lg={{ span: 10 }}
                               xs={{span:24}}>
                              <div className="item-bg">
                                <span>Industry:</span>
                                <span className="ml-auto">Software Company</span>
                              </div>
                            </Col>
                          </Row>

                          <Row gutter={50}>
                            <Col lg={{ span: 10 }}
                               xs={{span:24}}>
                              <div className="item">
                                <span>Founded:</span>
                                <span className="ml-auto">2018</span>
                              </div>
                            </Col>

                            <Col lg={{ span: 10 }}
                               xs={{span:24}}>
                              <div className="item">
                                <span>Size:</span>
                                <span className="ml-auto">51 - 200</span>
                              </div>
                            </Col>
                          </Row>

                          <Row gutter={50}>
                            <Col lg={{ span: 10 }}
                               xs={{span:24}}>
                              <div className="item-bg">
                                <span className="name">Web Site:</span>
                                <span className="data ml-auto">leadbud.io</span>
                              </div>
                            </Col>

                            <Col lg={{ span: 10 }}
                               xs={{span:24}}>
                              <div className="item-bg">
                                <span>Social:</span>
                                <ul className="social ml-auto">
                                  <li>
                                    <FaLinkedinIn size={20} />
                                  </li>
                                  <li>
                                    <FaFacebookF size={20} />
                                  </li>
                                  <li>
                                    <FaInstagram size={20} />
                                  </li>
                                </ul>
                              </div>
                            </Col>
                          </Row>

                          <Row gutter={50}>
                            <Col lg={{ span: 10 }}
                               xs={{span:24}}>
                              <div className="item">
                                <span>HQ Number</span>
                                <span className="ml-auto">+17123456789</span>
                              </div>

                              <div className="item-bg">
                                <span className="name">List</span>
                                <Button className="add-list ml-auto">
                                  <PlusCircleOutlined /> Add to List
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      )}
                    </Card>
                  </Col>

                  <Col lg={{ span: 24 }}>
                    <Card className="">
                      <div className="last-card">
                        <Tabs>
                          <Tabs.TabPane
                            tab={<p>Scrapers</p>}
                            key="tab1"
                            style={{ outline: "none" }}
                          >
                            <div>
                              <div className="tab-search ">
                                <Form>
                                  <Form.Item className="input-item-search flex flex-col sm:flex-row">
                                    <Input
                                      placeholder="Search by position"
                                      className="my-input-search"
                                      prefix={
                                        <SearchOutlined
                                          style={{ color: "#B7B7B7" }}
                                        />
                                      }
                                    />
                                    <Button className="btn-search">
                                      Search
                                    </Button>
                                  </Form.Item>
                                </Form>

                                <div className="last">
                                  <Button className="btn-refresh">
                                    Refresh
                                  </Button>
                                </div>
                              </div>

                              <div>
                                <Divider />

                                <Table className="overflow-x-scroll"
                                  rowSelection={{
                                    type: selectionType,
                                    ...rowSelection,
                                  }}
                                  columns={columns}
                                  dataSource={data}
                                />
                              </div>
                            </div>
                          </Tabs.TabPane>

                          <Tabs.TabPane
                            tab={<p>All Domain Emails</p>}
                            key="tab2"
                          >
                          <div>
                              <div className="tab-search">
                                <Form>
                                  <Form.Item className="input-item-search">
                                    <Input
                                      placeholder="Search by position"
                                      className="my-input-search"
                                      prefix={
                                        <SearchOutlined
                                          style={{ color: "#B7B7B7" }}
                                        />
                                      }
                                    />
                                    <Button className="btn-search">
                                      Search
                                    </Button>
                                  </Form.Item>
                                </Form>

                                <div className="last">
                                  <Button className="btn-refresh">
                                    Refresh
                                  </Button>
                                </div>
                              </div>

                              <div>
                                <Divider />

                                <Table
                                  rowSelection={{
                                    type: selectionType,
                                    ...rowSelection,
                                  }}
                                  columns={columns}
                                  dataSource={data}
                                />
                              </div>
                            </div>
                          </Tabs.TabPane>

                          <Tabs.TabPane
                            tab={<p>Generic Contacts</p>}
                            key="tab3"
                          >
                           <div>
                              <div className="tab-search">
                                <Form>
                                  <Form.Item className="input-item-search">
                                    <Input
                                      placeholder="Search by position"
                                      className="my-input-search"
                                      prefix={
                                        <SearchOutlined
                                          style={{ color: "#B7B7B7" }}
                                        />
                                      }
                                    />
                                    <Button className="btn-search">
                                      Search
                                    </Button>
                                  </Form.Item>
                                </Form>

                                <div className="last">
                                  <Button className="btn-refresh">
                                    Refresh
                                  </Button>
                                </div>
                              </div>

                              <div>
                                <Divider />

                                <Table
                                  rowSelection={{
                                    type: selectionType,
                                    ...rowSelection,
                                  }}
                                  columns={columns}
                                  dataSource={data}
                                />
                              </div>
                            </div>
                          </Tabs.TabPane>

                          <Tabs.TabPane tab={<p>Technologies</p>} key="tab4">
                          <div>
                              <div className="tab-search">
                                <Form>
                                  <Form.Item className="input-item-search">
                                    <Input
                                      placeholder="Search by position"
                                      className="my-input-search"
                                      prefix={
                                        <SearchOutlined
                                          style={{ color: "#B7B7B7" }}
                                        />
                                      }
                                    />
                                    <Button className="btn-search">
                                      Search
                                    </Button>
                                  </Form.Item>
                                </Form>

                                <div className="last">
                                  <Button className="btn-refresh">
                                    Refresh
                                  </Button>
                                </div>
                              </div>

                              <div>
                                <Divider />

                                <Table
                                  rowSelection={{
                                    type: selectionType,
                                    ...rowSelection,
                                  }}
                                  columns={columns}
                                  dataSource={data}
                                />
                              </div>
                            </div>
                          </Tabs.TabPane>
                        </Tabs>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Layout>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DomainSearch;
