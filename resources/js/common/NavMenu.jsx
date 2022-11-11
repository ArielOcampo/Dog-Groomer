import { Menu } from "antd";

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const NavMenu = () => {
  return (
    <>
      <div />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </>
  );
};

export default NavMenu;
