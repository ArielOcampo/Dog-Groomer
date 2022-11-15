import { Image, Layout, Row } from "antd";

import { Banner, Logo } from "../../assets";
import { NavBar } from "../common";

const { Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      <NavBar />
      <Row justify="center" align="middle">
        <Image src={Banner} preview={false}></Image>
      </Row>
      <Content>asdokapsdk</Content>

      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Home;
