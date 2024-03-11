import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import FInderTools from "./FInderTools";


const FinderPage = () => {


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
            <FInderTools />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default FinderPage;
