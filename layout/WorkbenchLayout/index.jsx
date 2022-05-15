import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/router";
const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, href, children) {
  return {
    key,
    icon,
    children,
    label,
    href,
  };
}

const items = [
  getItem("用户主页", "1", <HomeOutlined />, "/workbench/home"),
  getItem("订单管理", "2", <DesktopOutlined />, "/workbench/order"),
  getItem("设备管理", "9", <FileOutlined />, "/workbench/equipment", [
    getItem("设备信息管理", "3", null, "/workbench/equipment/information"),
    getItem("设备类型管理", "4", null, "/workbench/equipment/type"),
  ]),
];

export default function WorkbenchLayout({ children }) {
  const [selected, setSelected] = useState(["1"]);
  const router = useRouter();
  const handleChangeContainer = ({ key, item }) => {
    setSelected(key);
    const { href } = item.props;
    router.push(href);
    const newBreadcrumb = href.split("/").slice(2);
    setBreadcrumb(newBreadcrumb);
  };
  const [breadcrumb, setBreadcrumb] = useState(["home"]);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider>
        <Menu
          theme="dark"
          selectedKeys={selected}
          onClick={handleChangeContainer}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            {breadcrumb.map((cur, idx) => (
              <Breadcrumb.Item key={idx}>{cur}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
