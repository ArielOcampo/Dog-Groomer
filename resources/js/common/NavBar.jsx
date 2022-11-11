import { Image, Menu, Layout, Row, Col } from "antd";

import { Logo } from "../../assets";
const { Header, Footer, Sider, Content } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const NavBar = () => {
  return (
    <Header
      style={{
        zIndex: 1,
        width: "100%",
        height: 110,
      }}
    >
      <Row justify="space-between" align="middle" style={{ height: "100%" }}>
        <Image width={100} preview={false} src={Logo} />
        <Row justify="space-between" align="middle">
          <Col>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items1}
            />
          </Col>
        </Row>
      </Row>
    </Header>
  );
};

export default NavBar;
