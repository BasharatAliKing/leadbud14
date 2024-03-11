import React from 'react'
import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import NewProspects from './NewProspects';

const NewProspectsPage = () => {

    
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
        <NewProspects />
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default NewProspectsPage