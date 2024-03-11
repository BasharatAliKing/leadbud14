import React from "react";
import "./header.css";
import UserDropDown from "../userdropdown/userDropDown";
import logo from "../../assets/images/logo.png";
import calendarIcon from "../../assets/images/calendaar.png";
import Typography from "antd/es/typography/Typography";
const { Paragraph, Title } = Typography;
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { MdExpandMore } from "react-icons/md";
import flag from "../../assets/images/flag.png";
import { BellOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Header = ({ Pagetitle }) => {
  const items = [
    {
      label: "Spanish",
      key: "0",
    },
    {
      title: "German",
      key: "1",
    },
    {
      title: "Arabic",
      key: "2",
    },
    {
      title: "Chinese",
      key: "3",
    },
  ];

  return (
    <div className="header">
      <img src={logo} alt="logo" />

      <div>
        <Title level={3} className="page-title">
          {Pagetitle}
        </Title>
      </div>

      <div className="box">
        {/* <div className="date">
          <img src={calendarIcon} alt="icon" />
          <div className="time">
            <Typography className="typo">
              <Paragraph className="title">07 Oct, 2023</Paragraph>
              <Paragraph className="para">06 : 20 PM</Paragraph>
            </Typography>
          </div>
        </div> */}

        <div className="search-bar">
          <Input
            className="search"
            placeholder="Search"
            prefix={<SearchOutlined className="site-form-item-icon" />}
          />
        </div>

        {/* <div className="language">
          <Dropdown
            className="drop-down"
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <img src={flag} alt="flag" /> English (US)
                <MdExpandMore />
              </Space>
            </a>
          </Dropdown>
        </div> */}

        <div className="upgrade">
          <Button className="btn">Upgrade</Button>
        </div>

        <div className="notification">
          <BellOutlined className="bell" />
        </div>

        <div className="userddown">
          <UserDropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
