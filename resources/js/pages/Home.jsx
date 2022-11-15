import { Image, Layout, Row } from "antd";

import { Banner } from "../../assets";
import { Carousel, NavBar } from "../common";

const { Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      <NavBar />
      <Row justify="center" align="middle">
        <Image src={Banner} preview={false}></Image>
      </Row>
      <Content style={{ padding: "0 50px" }}>
        <div>
          <Carousel />
        </div>
      </Content>

      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Home;
