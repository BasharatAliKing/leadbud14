import React from 'react'
import './pricing.css'
import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Footer } from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import Pricing from './Pricing';


const PricingPage = () => {
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
          <Content style={{marginTop: '20px', marginBottom: '20px'}}>
            <Pricing />
          </Content>
        </Layout>
      </Layout>
    </Layout>
    )
  }
  
  export default PricingPage