import { Modal, Button, Radio, Space, Input } from "antd";
import { useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { message } from "antd";
export default function ModalButton({
  buttonName = "弹窗按钮",
  ModalTitle = "Basic Modal",
}) {
  const [visible, setVisible] = useState(false);
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [type, setType] = useState("agency_boss");
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = (e) => {
    axios
      .post("/api/auth/register", {
        userName: inputUserName,
        password: inputPassword,
        type: type,
      })
      .then((res) => {
        const { data } = res;
        if (data === false) {
          message.error("用户名已存在,请重新输入");
        } else {
          setVisible(false);
          message.success("新账户注册成功");
        }
      })
      .catch(function (error) {
        console.log(error);
        message.error("服务器出现问题,请查看控制台");
      });
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setType(e.target.value);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {buttonName}
      </Button>
      <Modal
        title={ModalTitle}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Space direction="vertical">
            <div style={{ color: "black" }}>用户名</div>
            <Input
              size="large"
              placeholder="用户名"
              prefix={<UserOutlined />}
              value={inputUserName}
              onChange={(e) => {
                setInputUserName(e.target.value);
              }}
            />
            <div style={{ color: "black" }}>密码</div>
            <Input.Password
              size="large"
              placeholder="密码"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              prefix={<KeyOutlined />}
              value={inputPassword}
              onChange={(e) => {
                setInputPassword(e.target.value);
              }}
            />
            <Radio.Group onChange={onChange} value={type}>
              <Radio value={"agency_boss"}>经销商老板</Radio>
              <Radio value={"agency_employee"}>经销商员工</Radio>
              <Radio value={"factory_manager"}>工厂管理员</Radio>
              <Radio value={"manufacturer"}>生产厂商</Radio>
              <Radio value={"businessman"}>个体商户</Radio>
            </Radio.Group>
          </Space>
        </div>
      </Modal>
    </>
  );
}
