import React, { useState } from "react";
import "./bulk.css";
import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import { Col, Row, Card } from "antd";
import { Typography } from "antd";
const { Paragraph } = Typography;
import { FaFileMedical } from "react-icons/fa6";
import { Button, Upload } from "antd";

const BulkEmailSearch = () => {
  const [fileList, setFileList] = useState([]);

  const handleChange = (info) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-2);
    newFileList = newFileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };
  const props = {
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange: handleChange,
    multiple: false,
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
          <Content style={{ marginTop: "20px", marginBottom: "20px" }}>
            <div className="container p-2 md:p-5">
              <Row>
                <Col lg={{ span: 24 }}>
                  <Card>
                    <Paragraph className="top-content">
                      Collect emails in bulk from a list of lead names and
                      company domains
                    </Paragraph>

                    <div className="upload-area">
                      <Paragraph className="file-info">
                        Upload Or Drop A File Here
                      </Paragraph>

                      <Upload {...props} fileList={fileList}>
                        <Button icon={<FaFileMedical />} className="btn-upload">
                          Choose File
                        </Button>
                      </Upload>

                      <Paragraph className="csv">Bulk Email Search can process CSV files with<br/>
up to 50,000 lines per search.</Paragraph>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BulkEmailSearch;
