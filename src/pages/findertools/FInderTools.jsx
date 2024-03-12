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
        <div className="p-2">
          <div >
            <Card>
              <div className="content-top pt-3">
                <p>
                  Get accurate, ready-to-use prospect data from almost any
                  online source.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <h1 className="font-semibold text-[20px] sm:text-[22px] md:[26px] py-1">
                    Database Search
                  </h1>
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
                </div>
                <div >
                    <h1 className="font-semibold text-[20px] sm:text-[22px] md:[26px] pt-3">
                    Email Search
                  </h1>
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
                </div>
                <div >
                    <h1 className="font-semibold text-[20px] sm:text-[22px] md:[26px] pt-3">
                    Domain Search
                  </h1>
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
                </div>
              </div>
            </Card>
          </div>

          <div lg={{ span: 24 }}>
            <Card>
            <h1 className="font-semibold text-[20px] sm:text-[22px] md:[26px] pt-3">
                Chrome Extensions</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               
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
                  </div>
               
             <div className="flex flex-col md:flex-row w-full">
             <div >
                    <h1 className="font-semibold text-[20px] sm:text-[22px] md:[26px] pt-3">
                    Other Tools</h1>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
         <div className="item ext-item ">
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

         </div>
       </div>

      
      
             </div>

            
             

 
              
    
            </Card>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default FInderTools;
