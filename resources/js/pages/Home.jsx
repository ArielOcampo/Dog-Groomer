import { Col, Image, Layout, Row } from "antd";

import { Banner } from "../../assets";
import NavMenu from "../common/NavMenu";

const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  return (
    <Row>
      <Layout>
        <Header>{<NavMenu />}</Header>
        <Row justify="center" align="middle">
          <Image src={Banner} preview={false}></Image>
        </Row>

        <Footer>Footer</Footer>
      </Layout>
    </Row>
  );
};

export default Home;
