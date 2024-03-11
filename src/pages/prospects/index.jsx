import React from 'react'
import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import Prospectus from './Prospectus';



const ProspectsPage = () => {
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
          <Prospectus />
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default ProspectsPage