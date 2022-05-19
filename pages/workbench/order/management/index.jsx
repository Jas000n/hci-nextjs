import { useLocalStorageState } from "ahooks";
import { Tabs, Table, Tag, Space, Progress, Divider, Input } from "antd";
import { useState } from "react";
import { useContext } from "react";
import PopupFormButton from "../../../../components/PopupForm";
import WorkbenchLayout from "../../../../layout/WorkbenchLayout";

const { Search } = Input;
export default function Order() {
  const [user, setUser] = useState({
    userName: "test",
    password: "test",
    type: "businessman",
  });
  console.log("user", user);
  if (user.type === "businessman") {
    console.log("hello businessman!");
  }
  const formItems = [
    {
      name: "order_id",
      label: "订单编号",
    },
    {
      name: "order_content",
      label: "订单内容",
    },
  ];
  const handleAddOrder = (valueFromForm) => {
    SetdataOrder((values) => {
      const newValue = {
        ...valueFromForm,
        key: (1 + values[values.length - 1].key).toString(),
        order_state: "等待投标",
        order_detail: "查看投标",
        order_progress: 0,
      };
      return [...values, newValue];
    });
  };
  function deleteOrder(text, order, index) {
    SetdataOrder((pre) => {
      let newData = [];
      let i = 0;
      for (i = 0; i < pre.length; i++) {
        if (i === index) {
        } else {
          newData.push(pre[i]);
        }
      }
      return newData;
    });
  }
  function countAvaragePercent() {
    let i = 0;
    let sum = 0;
    for (i = 0; i < data_Order.length; i++) {
      console.log("this=", data_Order[i].order_progress);
      sum += data_Order[i].order_progress;
      console.log("sum=", sum);
    }
    console.log(sum / data_Order.length / 100);
    return sum / data_Order.length;
  }
  const InitDataOrder = [
    {
      key: "1",
      order_id: "1",
      order_state: "等待投标",
      order_progress: 50,
      order_detail: "查看投标",
      order_content: "电脑",
    },
    {
      key: "2",
      order_id: "1",
      order_state: "等待投标",
      order_progress: 20,
      order_detail: "查看投标",
      order_content: "手机",
    },
    {
      key: "3",
      order_id: "1",
      order_state: "等待投标",
      order_progress: 30,
      order_detail: "查看投标",
      order_content: "平板",
    },
    {
      key: "4",
      order_id: "1",
      order_state: "等待投标",
      order_progress: 80,
      order_detail: "查看投标",
      order_content: "鼠标",
    },
  ];

  const InitcolumnsOrder = [
    {
      title: "订单ID",
      dataIndex: "order_id",
      key: "order_id",
    },
    {
      title: "订单状态",
      dataIndex: "order_state",
      key: "order_state",
    },
    {
      title: "订单内容",
      dataIndex: "order_content",
      key: "order_content",
    },
    {
      title: "订单进度",
      dataIndex: "order_progress",
      key: "order_progress",
      render: (text, record) => {
        return (
          <>
            <Progress percent={text} size="small" status="active" />
          </>
        );
      },
    },
    {
      title: "详情",
      dataIndex: "order_detail",
      key: "order_detail",
      render: (text, record, index) => {
        return (
          <>
            <Space size="middle">
              <a>{text}</a>
              <a onClick={() => deleteOrder(text, record, index)}>删除订单</a>
            </Space>
          </>
        );
      },
    },
  ];
  const [columns_order, SetcolumnsOrder] = useState(InitcolumnsOrder);
  const [data_Order, SetdataOrder] = useState(InitDataOrder);
  switch (user.type) {
    case "businessman":
      return (
        <div>
          <PopupFormButton
            name="下订单"
            onSubmitForm={handleAddOrder}
            formItems={formItems}
          />

          <Divider>工作台</Divider>
          <Table dataSource={data_Order} columns={columns_order} />
          {/* <Divider style={{ marginBottom: "40px" }}>数据中心</Divider> */}
          <Divider>数据中心</Divider>
          <div>
            <div>
              <div style={{ marginBottom: "40px" }}>
                <Progress percent={countAvaragePercent()} />
              </div>
              <div className="text_align_center">平均生产进度</div>
            </div>
          </div>
        </div>
      );
    case "test":
      return (
        <div>
          <PopupFormButton
            name="下订单"
            onSubmitForm={handleAddOrder}
            formItems={formItems}
          />

          <Divider>工作台</Divider>
          <Table dataSource={data_Order} columns={columns_order} />
          {/* <Divider style={{ marginBottom: "40px" }}>数据中心</Divider> */}
          <Divider>数据中心</Divider>
          <div>
            <div>
              <div style={{ marginBottom: "40px" }}>
                <Progress percent={countAvaragePercent()} />
              </div>
              <div className="text_align_center">平均生产进度</div>
            </div>
          </div>
        </div>
      );
    default:
      return <div>default page</div>;
  }
}

Order.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
