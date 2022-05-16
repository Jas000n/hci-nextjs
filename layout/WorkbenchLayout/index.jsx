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
import Image from "next/image";
const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, href, userTypes, children) {
  return {
    key,
    icon,
    children,
    label,
    userTypes,
    href,
  };
}

const items = [
  getItem("Home page", "1", <HomeOutlined />, "/workbench/home", [
    "factory manager",
  ]),
  getItem("Order management", "2", <DesktopOutlined />, "/workbench/order", [
    "factory manager",
  ]),
  getItem(
    "Equipment management",
    "9",
    <FileOutlined />,
    "/workbench/equipment",
    ["factory manager"]
  ),
  // getItem(
  //   "Tests",
  //   "10",
  //   <Image src="/order.svg" alt="vercel" width="15" height="15" />,
  //   "/workbench/equipment"
  // ),
];

// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];

export default function WorkbenchLayout({ children }) {
  const [selected, setSelected] = useState(["1"]);
  const router = useRouter();
  const handleChangeContainer = ({ key, item }) => {
    setSelected(key);
    router.push(item.props.href);
  };
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
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
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
