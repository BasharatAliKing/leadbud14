import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Footer } from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import './dahboard.css'
import DashBoard from "./DashBoard";
import SecondaryNav from '../../components/secondarynav/SecondaryNav';


const DashBoardAnt = () => {
  const headerStyles = {
    background: "#fff !important",
  };

  return (
    <Layout>
      <Header className="header">
        <Topbar Pagetitle="Dashboard" />
      </Header>
      <Layout>
        <Sider>
          <SideNav />
        </Sider>
        <Layout>
          <Content style={{marginTop: '20px', marginBottom: '20px'}}>
            <DashBoard />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashBoardAnt;
