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
import { ConfigProvider } from "antd";
import { Button } from "antd";
import { useEffect } from "react";
import { useContext } from "react";
import { useMemo } from "react";
import axios from "axios";
import getLoginUser from "../../helper/getLoginUser";

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

export default function WorkbenchLayout({ children }) {
  const [selected, setSelected] = useState(["1"]);
  const router = useRouter();
  const handleChangeContainer = ({ key, item }) => {
    setSelected(key);
    const { href } = item.props;
    router.push(href);
    const newBreadcrumb = href.split("/").slice(2); //去掉''和'workbench'
    setBreadcrumb(newBreadcrumb);
  };
  const [breadcrumb, setBreadcrumb] = useState(["home"]);
  // const [theme, setTheme] = useState({
  //   primaryColor: "#25b864",
  //   infoColor: "",
  //   successColor: "",
  //   processingColor: "",
  //   errorColor: "",
  //   warningColor: "",
  // });
  // useEffect(() => {
  //   ConfigProvider.config({
  //     theme: theme,
  //   });
  // }, [theme]);
  useEffect(() => {
    getLoginUser().then((res) => {
      setUser(res);
    });
  }, []);

  const [user, setUser] = useState({
    userName: "test",
    password: "test",
    type: "factory_manager",
  });
  const items = useMemo(() => getLayoutItems(user.type), [user.type]);
  const [prefix, setPrefix] = useState("custom-default");
  const handleSwitchTheme = () => {
    prefix === "custom-default"
      ? setPrefix("custom-dark")
      : setPrefix("custom-default");
  };
  // const handleSwitchTheme = () => {
  //   console.log("wow");
  //   setPrefix("custom-dark");
  //   ConfigProvider.config({
  //     // prefixCls: "custom-dark",
  //     prefixCls: "custom-default",
  //     theme: {
  //       primaryColor: "#25b864",
  //     },
  //   });
  //   // setPrefix((prefix) => {
  //   //   if (prefix === "custom-default") {
  //   //     return "custom-dark";
  //   //   } else {
  //   //     return "custom-default";
  //   //   }
  //   // });
  // };
  // useEffect(() => {
  //   ConfigProvider.config({
  //     prefixCls: prefix,
  //   });
  // }, [prefix]);
  // const [prefix, setPrefix] = useState("custom-default");
  // const handleSwitchTheme = () => {
  //   prefix === "custom-default"
  //     ? setPrefix("custom-dark")
  //     : setPrefix("custom-default");
  // };
  return (
    <ConfigProvider prefixCls={prefix}>
      <div className={prefix}>
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
              <div className="header-bar">
                <Breadcrumb
                  separator=">"
                  style={{
                    margin: "16px 0",
                  }}
                >
                  {breadcrumb.map((cur, idx) => (
                    <Breadcrumb.Item key={idx}>
                      {cur.slice(0, 1).toUpperCase() + cur.slice(1)}
                    </Breadcrumb.Item>
                  ))}
                </Breadcrumb>
                <Button onClick={handleSwitchTheme}>
                  {prefix === "custom-default" ? "切换暗黑" : "切换明亮"}
                </Button>
              </div>
              {/* <input
                type="color"
                value={theme.primaryColor}
                name="primary"
                onChange={(e) => {
                  setTheme((cur) => {
                    const newCur = { ...cur, primaryColor: e.target.value };
                    console.log(newCur);
                    return newCur;
                  });
                }}
              /> */}
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
      </div>
    </ConfigProvider>
  );
}

const getLayoutItems = (type) => {
  switch (type) {
    case "agency_boss":
      return [
        getItem("用户主页", "1", <HomeOutlined />, "/workbench/home"),
        getItem("企业管理", "2", <HomeOutlined />, "/workbench/company"),
        getItem(
          "订单管理",
          "3",
          <HomeOutlined />,
          "/workbench/order/management"
        ),
        getItem("竞标管理", "4", <HomeOutlined />, "/workbench/bid"),
      ];
    case "agency_employee":
      return [
        getItem("用户主页", "1", <HomeOutlined />, "/workbench/home"),
        getItem(
          "订单管理",
          "2",
          <HomeOutlined />,
          "/workbench/order/management"
        ),
        getItem("竞标管理", "3", <HomeOutlined />, "/workbench/bid"),
      ];
    case "businessman":
      return [
        getItem("用户主页", "1", <HomeOutlined />, "/workbench/home"),
        getItem(
          "订单管理",
          "2",
          <HomeOutlined />,
          "/workbench/order/management"
        ),
        getItem("竞标管理", "3", <HomeOutlined />, "/workbench/bid"),
      ];
    case "manufacturer":
      return [
        getItem("用户主页", "1", <HomeOutlined />, "/workbench/home"),
        getItem("投标管理", "2", <HomeOutlined />, "/workbench/bid"),
        getItem(
          "订单管理",
          "3",
          <HomeOutlined />,
          "/workbench/order/management"
        ),
        getItem("订单交付", "4", <HomeOutlined />, "/workbench/order/delivery"),
      ];
    case "factory_manager":
      return [
        getItem("用户主页", "1", <HomeOutlined />, "/workbench/home"),
        getItem(
          "订单管理",
          "2",
          <DesktopOutlined />,
          "/workbench/order/management"
        ),
        getItem("设备管理", "9", <FileOutlined />, "/workbench/equipment", [
          getItem(
            "设备信息管理",
            "3",
            null,
            "/workbench/equipment/information"
          ),
          getItem("设备类型管理", "4", null, "/workbench/equipment/type"),
        ]),
      ];
    default:
      return [
        getItem("用户主页", "1", <HomeOutlined />, "/workbench/home"),
        getItem(
          "订单管理",
          "2",
          <DesktopOutlined />,
          "/workbench/order/management"
        ),
        getItem("设备管理", "9", <FileOutlined />, "/workbench/equipment", [
          getItem(
            "设备信息管理",
            "3",
            null,
            "/workbench/equipment/information"
          ),
          getItem("设备类型管理", "4", null, "/workbench/equipment/type"),
        ]),
      ];
  }
};
