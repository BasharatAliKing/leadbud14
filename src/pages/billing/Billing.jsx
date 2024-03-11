import React from "react";
import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import { Row, Col, Card } from "antd";
import AccountSidebar from "../../components/account-sidebar/AccountSidebar";
import { Typography, Form , Input } from "antd";
const { Paragraph, Title, } = Typography;
import "./billing.css";

const Billing = () => {
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
                  <Title level={4} className="bill-heading">
                    Current Billing Period
                  </Title>

                  <div className="trial">
                    <div className="plan">
                      <Paragraph className="left">Trial</Paragraph>
                      <span className="right">Free</span>
                    </div>

                    <div className="purchase-date-end-date">
                      <span>Purchased on: 11 Oct 2023</span>
                      <span>Expires on: 10 Nov 2023</span>
                    </div>
                  </div>

                  <div className="renewal">
                    <Title level={4} className="bill-heading">
                      Automatic Renewal
                    </Title>

                    <div className="renewal-info">
                      <Paragraph className="info">
                        Automatic renewal helps automatically extend your plan
                        at the end of your current billing period. You will be
                        charged
                        <br />
                        using the same payment method you've used to purchase
                        your current plan.
                      </Paragraph>

                      <Paragraph className="info second">
                        Automatic renewal is off
                      </Paragraph>
                    </div>
                  </div>


                  <div className="token-wallet">
                  <Title level={4} className="bill-heading">
                  Token Wallet
                  </Title>

                  <Form>
                    <Form.Item>
                        <label className="label">Wallet</label>
                        <Input className="my-input wallet"/>
                    </Form.Item>
                  </Form>
                  </div>
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Billing;
