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
      <Divider>工作台</Divider>

      <Table columns={columns_bid} dataSource={data} />

      <Divider style={{ marginBottom: "40px" }}>数据中心</Divider>

      <div className="data_center">
        <div>
          <div style={{ marginBottom: "40px" }}>
            <Progress
              type="circle"
              percent={75}
              format={(percent) => `${percent} Days`}
            />
            <Progress type="circle" percent={100} format={() => "Done"} />
          </div>
          <div className="text_align_center">生产进度</div>
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
    title: "公司名称",
    dataIndex: "company_id",
    key: "company_id",
    // render: text => <a>{text}</a>,
  },
  {
    title: "经销商员工数",
    dataIndex: "company_employee",
    key: "company_employee",
  },
  {
    title: "公司状态",
    dataIndex: "company_state",
    key: "company_state",
    render: (text) => {
      let color = "black";
      if (text === "下班") {
        color = "red";
      }
      if (text === "空闲") {
        color = "green";
      }
      if (text === "工作") {
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
    title: "管理公司",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>下单</a>
        <a>下班</a>
      </Space>
    ),
  },
];

const data = [
  {
    company_id: "张三公司",
    company_employee: "233",
    company_state: "空闲",
    key: 0,
  },
  {
    company_id: "张三公司",
    company_employee: "233",
    company_state: "工作",
    key: 1,
  },
  {
    company_id: "张三公司",
    company_employee: "233",
    company_state: "工作",
    key: 2,
  },
];
