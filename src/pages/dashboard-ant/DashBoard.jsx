import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Divider } from "antd";
import { Typography } from "antd";
import "./dahboard.css";
const { Title, Paragraph } = Typography;
import LeadCard from "../../components/leadcard/LeadCard";
import { Card, Button } from "antd";
import PieChart from "../../components/piechart/PieChart";
import Dropdown from "../../components/dropdown/Dropdown";
import clockIcon from "../../assets/images/clock-icon.png";
import botIcon from "../../assets/images/bot-icon.png";
import { Tabs } from "antd";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";

const DashBoard =() => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      setTotalSeconds(0);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const handleStartStopClick = () => {
    setIsTimerRunning((prevState) => !prevState);
  };

  const options = {
    items: 4,
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
  };

  const overlayItems = [
    { key: "1", label: "Option 1" },
    { key: "2", label: "Option 2" },
    { key: "3", label: "Option 3" },
  ];

  const tableData = [
    {
      number: "1",
      title: "Hubspot",
      percent: "60%",
    },
    {
      number: "2",
      title: "Hubspot",
      percent: "60%",
    },
    {
      number: "3",
      title: "Hubspot",
      percent: "60%",
    },
    {
      number: "4",
      title: "Hubspot",
      percent: "60%",
    },
    {
      number: "5",
      title: "Hubspot",
      percent: "60%",
    },
  ];

  return (
    <div className="container dashboard pr-0 md:pl-[18px] p-2 md:p-5">
     <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#000000] bg-[#ffffff] p-5 rounded-lg capitalize">{window.location.pathname.substr(1,)}</h1>
      
       
      <div>
        <Row gutter={20}>
          <Col
            xxl={{ span: 16 }}
            xl={{ span: 16 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
          >
            <div className="welcome">
              <div className="content">
                <h1 className="font-bold text-[26px] sm:text-[30px] lg:text-[38px] text-[#000000]">Welcome Back!</h1>
                <Paragraph className="desc">
                  {" "}
                  You have generated <span>1856</span> Leads by
                  <br />
                  using the Leadbuds
                </Paragraph>

                <div className="slider">
                  <div className="flex gap-3">
                    <div>
                      <LeadCard />
                    </div>
                    <div>
                      <LeadCard />
                    </div>
                    <div>
                      <LeadCard />
                    </div>
                    <div>
                      <LeadCard />
                    </div>
                    <div>
                      <LeadCard />
                    </div>
                    <div>
                      <LeadCard />
                    </div>
                    <div>
                      <LeadCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 8 }}
           xs={{ span: 24 }}
          >
            <div className="pie-item">
              <Card>
                <PieChart />
              </Card>
            </div>
          </Col>

          <Col lg={{ span: 16 }}
          xs={{span:24}}>
            <Card>
              <Tabs defaultActiveKey="tab1">
                <Tabs.TabPane
                  tab={
                    <p>
                      All <span className="tag all">0</span>
                    </p>
                  }
                  key="tab1"
                >
                  <div>
                    <h1 level={3} className="text-[20px] sm:text-[24px] md:text-[26px] font-semibold">My Jobs</h1>
                  </div>
                </Tabs.TabPane>

                <Tabs.TabPane
                  tab={
                    <p>
                      Active <span className="tag active">0</span>
                    </p>
                  }
                  key="tab2"
                >
                  <div>
                    <Title level={3}>Active Jobs</Title>
                  </div>
                </Tabs.TabPane>

                <Tabs.TabPane
                  tab={
                    <p>
                      Scheduled <span className="tag schedule">0</span>
                    </p>
                  }
                  key="tab3"
                >
                  <div>
                    <Title level={3}>Scheduled jobs</Title>
                  </div>
                </Tabs.TabPane>

                <Tabs.TabPane
                  tab={
                    <p>
                      Completed <span className="tag completed">0</span>
                    </p>
                  }
                  key="tab4"
                >
                  <div>
                    <Title level={3}>Completed jobs</Title>
                  </div>
                </Tabs.TabPane>

                <Tabs.TabPane
                  tab={
                    <p>
                      Inactive <span className="tag inactive">0</span>
                    </p>
                  }
                  key="tab5"
                >
                  <div>
                    <Title level={3}>Inactive jobs</Title>
                  </div>
                </Tabs.TabPane>

                <Tabs.TabPane
                  tab={
                    <p>
                      Failed <span className="tag failed">0</span>
                    </p>
                  }
                  key="tab6"
                >
                  <div>
                    <Title level={3}>Failed jobs</Title>
                    <Paragraph>
                      Failed job requests are automatically archived after 7
                      days of inactivity.
                    </Paragraph>
                  </div>
                </Tabs.TabPane>
              </Tabs>
            </Card>

            <Card>
              <div className="top">
                <div>
                  <span className="status-out-reach">Active</span>
                  <span className="time">
                    Running For {formatTime(hours)}:{formatTime(minutes)}:
                    {formatTime(seconds)}
                  </span>
                </div>

                <Dropdown overlayItems={overlayItems} />
              </div>

              <div className="head">
                <h2 level={3}  className="text-[20px] sm:text-[24px] md:text-[26px] font-semibold">
                  Outreach
                </h2>
              </div>

              <div className="lower">
                <Paragraph className="bots-info">
                  <img src={botIcon} alt="icon" />
                  Bot: Outreach and Guestpost Explo...
                </Paragraph>
                <Paragraph className="bots-info">
                  <img src={clockIcon} alt="icon" />
                  Created: less than a minute ago
                </Paragraph>
              </div>
            </Card>

            <Card>
              <div className="top">
                <div>
                  <span className="status-complete">completed</span>
                </div>

                <Dropdown overlayItems={overlayItems} />
              </div>

              <div className="head">
                <h1 level={3} className="text-[20px] sm:text-[24px] md:text-[26px] font-semibold">
                  Linkedin-Profile-Scraper-20-Sep-2023
                </h1>
              </div>

              <div className="lower linkedin">
                <div className="left">
                  <Paragraph className="bots-info">
                    <img src={botIcon} alt="icon" />
                    Bot: LinkedIn Profile Extractor
                  </Paragraph>
                  <Paragraph className="bots-info">
                    <img src={clockIcon} alt="icon" />
                    Created: 18 days ago
                  </Paragraph>
                </div>
                <div className="right">
                  <Button className="run-again" onClick={handleStartStopClick}>
                    Run Again
                  </Button>
                </div>
              </div>
            </Card>
          </Col>

          <Col 
               lg={{ span: 8 }}
               md={{span:8}}
               xs={{ span: 24 }}
               >
            <Card>
              <div className="tools-top">
                <Title level={3} className="h3">
                  Tools
                </Title>
                <Paragraph>View All Tools</Paragraph>
              </div>

              <div className="tools-info">
                <div className="tools w-100 mt-[10px]">
                  <div className="w-1/8 number">#</div>
                  <div className="w-1/2  name">Name</div>
                  <div className="w-1/5 sale">Sale</div>
                </div>

                <div>
                  {tableData.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center mb-4 border-b border-[#DBDBDB] w-100 py-[20px]"
                    >
                      <div className="w-1/8"> {item.number}</div>
                      <div className="w-1/2">{item.title}</div>
                      <div className="w-1/5 percent rounded-[17px] text-[15px] p-2 text-[#56F444] font-medium text-white text-center">
                        {item.percent}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashBoard;
