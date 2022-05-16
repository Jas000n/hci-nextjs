import styled from "styled-components";
import WorkbenchLayout from "../../../layout/WorkbenchLayout";
import { Tabs, Table, Tag, Space, Progress, Divider, Input } from "antd";

const { TabPane } = Tabs;
const { Search } = Input;
export default function Home() {
  return (
    <div>
      <div>
        <Search placeholder="搜索一切" style={{ width: 200 }} />
      </div>
      <Divider>通知中心</Divider>
      <Tabs onChange={callback} type="card">
        <TabPane tab="竞标" key="1">
          <Table columns={columns_bid} dataSource={data} />
        </TabPane>
        <TabPane tab="订单" key="2"></TabPane>
        <TabPane tab="工厂" key="3"></TabPane>
        <TabPane tab="产品" key="4"></TabPane>
      </Tabs>
      <Divider style={{ marginBottom: "40px" }}>数据中心</Divider>

      <div className="data_center">
        <div>
          <div style={{ marginBottom: "40px" }}>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
          </div>
          <div className="text_align_center">生产进度</div>
        </div>
        <div>
          <div>
            <Progress type="circle" percent={30} width={150} />
            <Progress
              type="circle"
              percent={70}
              width={100}
              status="exception"
            />
            <Progress type="circle" percent={100} width={50} />
          </div>
          <div className="text_align_center">订单进度</div>
        </div>
        <div>
          <div style={{ marginBottom: "60px" }}>
            <Progress type="circle" percent={25} width={80} />
            <Progress
              type="circle"
              percent={20}
              width={80}
              status="exception"
            />
            <Progress type="circle" percent={100} width={80} />
          </div>
          <div className="text_align_center">送货进度</div>
        </div>
      </div>
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
function callback(key) {
  console.log(key);
}
const columns_bid = [
  {
    title: "竞标ID",
    dataIndex: "Bid_ID",
    key: "Bid_ID",
    // render: text => <a>{text}</a>,
  },
  {
    title: "竞标状态",
    dataIndex: "Bid_state",
    key: "Bid_state",
    render: (text) => {
      let color = "black";
      if (text === "拒绝") {
        color = "red";
      }
      if (text === "通过") {
        color = "green";
      }
      if (text === "审核中") {
        color = "blue";
      }
      return (
        <>
          <Tag color={color} key={text}>
            {text}
          </Tag>
        </>
      );
    },
  },
  {
    title: "竞标时间",
    dataIndex: "Bid_time",
    key: "Bid_time",
  },
  {
    title: "产品类型",
    key: "product",
    dataIndex: "product",
  },
  {
    title: "更多操作",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>更多细节</a>
        <a>删除通知</a>
      </Space>
    ),
  },
];

const data = [
  {
    Bid_ID: 20190025,
    Bid_state: "拒绝",
    Bid_time: "2022-5-1",
    product: "电脑",
    key:0,
  },
  {
    Bid_ID: 20190025,
    Bid_state: "通过",
    Bid_time: "2022-5-1",
    product: "电脑",
    key:1,
  },
  {
    Bid_ID: 20190025,
    Bid_state: "审核中",
    Bid_time: "2022-5-1",
    product: "电脑",
    key:2,
  },
];
