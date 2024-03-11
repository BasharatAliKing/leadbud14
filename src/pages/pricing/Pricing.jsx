import React, { useState , useEffect} from "react";
import "./pricing.css";
import Layout from "antd/es/layout/layout";
import { Col, Row, Typography, Button } from "antd";
const { Title, Paragraph } = Typography;

import Switch from "../../components/Switch";

const Pricing = () => {

  const [hoveredItem, setHoveredItem] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };


  useEffect(() => {
    const initialItem = {
      title: "L",
      description: "Ideal for companies that want to expand their outreach",
      price: 169,
    };
    setHoveredItem(initialItem);
  }, []);

  return (
    <div className="container">
      <Layout>
        <div className="pricing-container-1">
          <div className="content-banner">
            <Row style={{ alignItems: "center" }}>
              <Col lg={{ span: 14 }}>
                <Title level={1} className="h1">
                  <span className="underlined">Unlimited </span>freemium
                </Title>
                <Title level={2} className="h2">
                  No credit card required.
                </Title>
              </Col>

              <Col lg={{ span: 10 }}>
                <Title level={4} className="h4">
                  WE MAKE OUTREACH EXCITING. ARE YOU IN?
                </Title>

                <ul className="adventages">
                  <li> Find potential customers.</li>
                  <li> Build powerful email drip campaigns.</li>
                  <li> Track your outreach success.</li>
                  <li> Access high-performing sales templates.</li>
                </ul>

                <Button className="btn-inner">Start for free</Button>
              </Col>
            </Row>
          </div>
        </div>

        <div className="pricing-container-2">
          <div className="content">
            <Paragraph className="p">
              Take your email outreach seriously? Buy an annual plan and get 12
              months at the price of 10!
            </Paragraph>
          </div>

          <div className="toggle-area flex justify-center items-center mt-[36px]">
            <p className="mr-4 text-[#181059] font-bold text-[18px] font-poppins">
              Monthly
            </p>
            <Switch checked={toggle} onChange={handleToggle} />
            <p className="ml-4 text-[#181059] font-normal text-[18px] font-poppins">
              Annual
            </p>
          </div>

          <div className="pricing-switch">
            {!toggle ? (
              <>
                <div className="pricing">
                  <div className="item">
                    <Title level={3} className="title">
                      S
                    </Title>
                    <Paragraph className="p">
                      <span className="small"> Perfect for startups and </span>
                      <span className="small">solopreneurs</span>
                    </Paragraph>

                    <div className="price">
                      <span className="sign">$</span>
                      <span className="amount">39</span>
                      <span className="limit">/mo</span>
                    </div>

                    <ul>
                      <li>
                        {" "}
                        <strong>1 000</strong> credits
                      </li>
                      <li>
                        {" "}
                        <strong>5 000</strong> unique recipients
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> users
                      </li>
                    </ul>

                    <Button className="btn-buy">Buy Now</Button>
                  </div>

                  <div className="item">
                    <Title level={3} className="title">
                      M
                    </Title>
                    <Paragraph className="p">
                      <span className="medium">
                        Crafted for small sales and{" "}
                      </span>
                      <span className="medium">marketing teams</span>
                    </Paragraph>

                    <div className="price">
                      <span className="sign">$</span>
                      <span className="amount">79</span>
                      <span className="limit">/mo</span>
                    </div>

                    <ul>
                      <li>
                        {" "}
                        <strong>5 000</strong> credits
                      </li>
                      <li>
                        {" "}
                        <strong>5 000</strong> unique recipients
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> users
                      </li>
                    </ul>

                    <Button className="btn-buy">Buy Now</Button>
                  </div>

                  <div className="item">
                    <div className="most-popular">
                      <span>Most Popular</span>
                    </div>
                    <Title level={3} className="title">
                      L
                    </Title>
                    <Paragraph className="p">
                      <span className="large">
                        {" "}
                        Ideal for companies that want{" "}
                      </span>
                      <span className="large">to expand their outreach</span>
                    </Paragraph>

                    <div className="price">
                      <span className="sign">$</span>
                      <span className="amount">169</span>
                      <span className="limit">/mo</span>
                    </div>

                    <ul>
                      <li>
                        {" "}
                        <strong>20 000</strong> credits
                      </li>
                      <li>
                        {" "}
                        <strong>30 000</strong> unique recipients
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> users
                      </li>
                    </ul>

                    <Button className="btn-buy">Buy Now</Button>
                  </div>

                  <div className="item">
                    <Title level={3} className="title">
                      XL
                    </Title>
                    <Paragraph className="p">
                      <span className="xl">A high-powered solution for</span>
                      <span className="xl">established sales teams</span>
                    </Paragraph>

                    <div className="price">
                      <span className="sign">$</span>
                      <span className="amount">289</span>
                      <span className="limit">/mo</span>
                    </div>

                    <ul>
                      <li>
                        {" "}
                        <strong>50 000</strong> credits
                      </li>
                      <li>
                        {" "}
                        <strong>50 000</strong> unique recipients
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> users
                      </li>
                    </ul>

                    <Button className="btn-buy">Buy Now</Button>
                  </div>

                  <div className="item">
                    <Title level={3} className="title">
                      XXL
                    </Title>
                    <Paragraph className="p">
                      <span className="xxl">Created for agencies and </span>
                      <span className="xxl">enterprises</span>
                    </Paragraph>

                    <div className="price">
                      <span className="sign">$</span>
                      <span className="amount">578</span>
                      <span className="limit">/mo</span>
                    </div>

                    <ul>
                      <li>
                        {" "}
                        <strong>100 000</strong> credits
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> recipients
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> users
                      </li>
                    </ul>

                    <Button className="btn-buy">Buy Now</Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="pricing">
                  <div className="item">
                    <Title level={3} className="title">
                      S
                    </Title>
                    <Paragraph className="p">
                      <span className="small">Perfect for startups and</span>
                      <span className="small">solopreneurs</span>
                    </Paragraph>
                    <div className="old-new-price">
                      <span className="old-price">
                      <span>$</span>
                      <span>39</span>
                      </span>
                    

                      <span className="price">
                        <span className="sign">$</span>
                        <span className="amount">33</span>
                        <span className="limit">/mo</span>
                      </span>
                    </div>

                    <ul>
                      <li>
                        {" "}
                        <strong>100 000</strong> credits
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> recipients
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> users
                      </li>
                    </ul>

                    <Button className="btn-buy">Buy Now</Button>
                  </div>

                  <div className="item">
                    <Title level={3} className="title">
                      M
                    </Title>
                    <Paragraph className="p">
                      <span className="medium">
                        Crafted for small sales and{" "}
                      </span>
                      <span className="medium">marketing teams</span>
                    </Paragraph>


                    <div className="old-new-price">
                    <span className="old-price">
                      <span>$</span>
                      <span>79</span>
                      </span>

                      <span className="price">
                      <span className="sign">$</span>
                      <span className="amount">66</span>
                      <span className="limit">/mo</span>
                    </span>
                    </div>

                  

                    <ul>
                      <li>
                        {" "}
                        <strong>100 000</strong> credits
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> recipients
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> users
                      </li>
                    </ul>

                    <Button className="btn-buy">Buy Now</Button>
                  </div>

                  <div className="item">
                    <div className="most-popular">
                      <span>Most Popular</span>
                    </div>
                    <Title level={3} className="title">
                      L
                    </Title>
                    <Paragraph className="p">
                      <span className="large">
                        Ideal for companies that want{" "}
                      </span>
                      <span className="large">to expand their outreach</span>
                    </Paragraph>

                    <div className="old-new-price">
                    <span className="old-price">
                      <span>$</span>
                      <span>169</span>
                      </span>
                      
                    <span className="price">
                      <span className="sign">$</span>
                      <span className="amount">141</span>
                      <span className="limit">/mo</span>
                    </span>
                    </div>


                    <ul>
                      <li>
                        {" "}
                        <strong>100 000</strong> credits
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> recipients
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> users
                      </li>
                    </ul>

                    <Button className="btn-buy">Buy Now</Button>
                  </div>

                  <div className="item">
                    <Title level={3} className="title">
                      XL
                    </Title>
                    <Paragraph className="p">
                      <span className="xl">A high-powered solution for </span>
                      <span className="xl">established sales teams</span>
                    </Paragraph>


                    <div className="old-new-price">

                    <span className="old-price">
                      <span>$</span>
                      <span>289</span>
                      </span>
                      
                    <span className="price">
                      <span className="sign">$</span>
                      <span className="amount">241</span>
                      <span className="limit">/mo</span>
                    </span>
                    
                    </div>

                

                    <ul>
                      <li>
                        {" "}
                        <strong>100 000</strong> credits
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> recipients
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> users
                      </li>
                    </ul>

                    <Button className="btn-buy">Buy Now</Button>
                  </div>

                  <div className="item">
                    <Title level={3} className="title">
                      XXL
                    </Title>
                    <Paragraph className="p">
                      <span className="xxl">Created for agencies and </span>
                      <span className="xxl">enterprises</span>
                    </Paragraph>

                    <div className="old-new-price">

                    <span className="old-price">
                      <span>$</span>
                      <span>578</span>
                      </span>

                    <span className="price">
                      <span className="sign">$</span>
                      <span className="amount">482</span>
                      <span className="limit">/mo</span>
                    </span>

                    </div>

                

                    <ul>
                      <li>
                        {" "}
                        <strong>100 000</strong> credits
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> recipients
                      </li>
                      <li>
                        {" "}
                        <strong>Unlimited</strong> users
                      </li>
                    </ul>

                    <Button className="btn-buy">Buy Now</Button>
                  </div>
                </div>
              </>
            )}
          </div>





          <div className="items-specs">
            <div className="email-finder">

            </div>


            <div className="email-drip-campaigns">

            </div>


            <div className="teamwork-options">

            </div>

            <div className="integration">
              
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Pricing;
