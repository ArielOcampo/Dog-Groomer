import { Image, Layout, Row } from "antd";

import { Banner, Logo } from "../../assets";
import { NavBar } from "../common";

const { Header, Footer } = Layout;

const Home = () => {
  return (
    <Row>
      <Layout>
        <NavBar />
        <Row justify="center" align="middle">
          <Image src={Banner} preview={false}></Image>
        </Row>

        <Footer>Footer</Footer>
      </Layout>
    </Row>
  );
};

export default Home;
