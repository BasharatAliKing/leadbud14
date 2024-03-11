import React from "react";
import { Layout, Col, Row, Card, Typography } from "antd";
const { Title, Paragraph } = Typography;
import SearchIcon1 from "../../assets/images/search-1.png";
import SearchIcon2 from "../../assets/images/search-2.png";
import SearchIcon3 from "../../assets/images/search-3.png";
import ExtensionIcon from "../../assets/images/extension-icon.png";
import "./main.css";

const FInderTools = () => {
  return (
    <div className="container database">
      <Layout>
        <Row gutter={20}>
          <Col lg={{ span: 24 }}>
            <Card>
              <div className="content-top">
                <Paragraph>
                  Get accurate, ready-to-use prospect data from almost any
                  online source.
                </Paragraph>
              </div>

              <Row gutter={20}>
                <Col lg={{ span: 8 }}
                md={{span:12}}>
                  <Title level={5} className="head-top">
                    Database Search
                  </Title>
                  <div className="item db-search">
                    <div className="content">
                      <img src={SearchIcon1} alt="icon" />

                      <div>
                        <Title level={5} className="sub-head">
                          Prospect Database Search
                        </Title>
                        <Paragraph>
                          Find prospects by name, job title, location, skills
                          and more
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={{ span: 8 }}
                md={{span:12}}>
                  <Title level={5} className="head-top">
                    Email Search
                  </Title>
                  <div className="item email-search">
                    <div className="content">
                      <img src={SearchIcon2} alt="icon" />

                      <div>
                        <Title level={5} className="sub-head">
                          Email Search
                        </Title>
                        <Paragraph>
                          Get a lead's verified email just from their name and
                          company domain
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={{ span: 8 }}
                md={{span:12}}>
                  <Title level={5} className="head-top">
                    Domain Search
                  </Title>
                  <div className="item domain-search">
                    <div className="content">
                      <img src={SearchIcon3} alt="icon" />

                      <div>
                        <Title level={5} className="sub-head">
                          Domain Search
                        </Title>
                        <Paragraph>
                          View all employee contacts based on a company domain
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg={{ span: 24 }}>
            <Card>
              <Title level={5}>Chrome Extensions</Title>

              <Row gutter={20}>
                <Col lg={{ span: 8 }}
                md={{span:12}}>
                  <div className="item ext-item">
                    <div className="content">
                      <img src={SearchIcon1} alt="icon" />

                      <div>
                        <Title level={5} className="sub-head">
                          LI Prospect Finder Extension
                        </Title>
                        <Paragraph>
                          Collect Prospects With Pre-Verified Emails From
                          Linkedin Profiles
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={{ span: 8 }}
                md={{span:12}}>
                  <div className="item ext-item">
                    <div className="content">
                      <img src={SearchIcon1} alt="icon" />

                      <div>
                        <Title level={5} className="sub-head">
                          Email Finder Extension
                        </Title>
                        <Paragraph>
                          Find emails on company websites, Google, Twitter and
                          Yelp
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={{ span: 8 }}
                md={{span:12}}
                xs={{span:24}}>
                  <div className="item ext-item">
                    <div className="content">
                      <img src={SearchIcon1} alt="icon" />

                      <div>
                        <Title level={5} className="sub-head">
                          Email Verifier Extension
                        </Title>
                        <Paragraph>
                          Verify emails found on webpages in one click
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </Col>
             <div className="flex flex-col md:flex-row w-full">
             <Col lg={{ span: 8 }}>
                    <Title level={5} className="others">Other Tools</Title>
         
         <div className="item ext-item">
           <div className="content">
             <img src={SearchIcon1} alt="icon" />

             <div>
               <Title level={5} className="sub-head">
                 Social URL Search
               </Title>
               <Paragraph>
                 Get Verified Emails From A List Of Links To Linkedin
                 And Twitter
               </Paragraph>
             </div>
           </div>
         </div>
       </Col>

       <Col lg={{ span: 8 }}>
         <div className="item ext-item last">
           <div className="content">
             <img src={SearchIcon1} alt="icon" />

             <div>
               <Title level={5} className="sub-head">
                 Technology Checker
               </Title>
               <Paragraph>
                 Find Company Leads Based On The Technologies Stack
                 They Use
               </Paragraph>
             </div>
           </div>
         </div>
       </Col>
             </div>

            
              </Row>

 
              
    
            </Card>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default FInderTools;
