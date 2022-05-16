import WorkbenchLayout from "../../../layout/WorkbenchLayout";
import {
  Tabs,
  Table,
  Tag,
  Space,
  Progress,
  Divider,
  Input,
  InputNumber,
  Cascader,
  Select,
} from "antd";
import { SettingOutlined } from "@ant-design/icons";
const { Option } = Select;
const { TabPane } = Tabs;
const { Search } = Input;
const selectBefore = (
  <Select defaultValue="add" style={{ width: 60 }}>
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue="USD" style={{ width: 60 }}>
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="GBP">£</Option>
    <Option value="CNY">¥</Option>
  </Select>
);
export default function Home() {
  return (
    <div>
      <div>
        <Search placeholder="搜索一切" style={{ width: 200 }} />
      </div>
      <Divider>工作台</Divider>
      <Tabs onChange={callback} type="card">
        <TabPane tab="进行投标" key="1">
          <Table columns={columns_give_Bid} dataSource={data_give_Bid} />
        </TabPane>
        <TabPane tab="已投出的" key="2">
          <Table
            columns={columns_Bid_in_progress}
            dataSource={data_Bid_in_progress}
          />
        </TabPane>
      </Tabs>
      <Divider>数据中心</Divider>
      <span style={{ width: "240px" }}>
        <div>
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          订单进度
        </div>
      </span>
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
function callback(key) {
  console.log(key);
}
const columns_give_Bid = [
  {
    title: "竞标ID",
    dataIndex: "Bid_ID",
    key: "Bid_ID",
    // render: text => <a>{text}</a>,
  },
  {
    title: "产品数量",
    dataIndex: "Bid_volume",
    key: "Bid_volume",
  },
  {
    title: "估计价值",
    dataIndex: "Bid_expected_price",
    key: "Bid_expected_price",
  },
  {
    title: "交付时间",
    dataIndex: "deliver_time",
    key: "deliver_time",
  },
  {
    title: "产品类型",
    key: "product",
    dataIndex: "product",
  },
  {
    title: "投标",
    key: "give_price",
    dataIndex: "give_price",
    render: (text, record) => {
      return (
        <>
          <InputNumber
            addonBefore={selectBefore}
            addonAfter={selectAfter}
            defaultValue={100}
          />
        </>
      );
    },
  },
  {
    title: "更多操作",
    key: "action",
    render: (text, record) => {
      return (
        <>
          <button>投标</button>
        </>
      );
    },
  },
];

const columns_Bid_in_progress = [
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
    title: "当前价格",
    key: "current_price",
    dataIndex: "current_price",
  },
  {
    title: "更多操作",
    key: "action",
    render: (text, record) => {
      console.log(record);
      let buttoninfo = "重新投标";
      if (record.Bid_state === "通过") {
        buttoninfo = "排产";
      }
      return (
        <>
          <Space size="middle">
            <button style={{ color: "red" }}>放弃投标</button>
            <button>{buttoninfo}</button>
          </Space>
        </>
      );
    },
  },
];
const data_Bid_in_progress = [
  {
    Bid_ID: 20190025,
    Bid_state: "拒绝",
    Bid_time: "2022-5-1",
    product: "电脑",
    current_price: "120000¥",
    key: 0,
  },
  {
    Bid_ID: 20190025,
    Bid_state: "通过",
    Bid_time: "2022-5-1",
    product: "电脑",
    current_price: "120000¥",
    key: 1,
  },
  {
    Bid_ID: 20190025,
    Bid_state: "审核中",
    Bid_time: "2022-5-1",
    product: "电脑",
    current_price: "120000¥",
    key: 2,
  },
];
const data_give_Bid = [
  {
    Bid_ID: 20190025,
    Bid_volume: 100,
    Bid_expected_price: 100,
    deliver_time: "2022-5-1",
    product: "电脑",
    current_price: "120000¥",
    key: 0,
  },
  {
    Bid_ID: 20190025,
    Bid_volume: 100,
    Bid_expected_price: 100,
    deliver_time: "2022-5-1",
    product: "电脑",
    current_price: "120000¥",
    key: 1,
  },
  {
    Bid_ID: 20190025,
    Bid_volume: 100,
    Bid_expected_price: 100,
    deliver_time: "2022-5-1",
    product: "电脑",
    current_price: "120000¥",
    key: 2,
  },
  {
    Bid_ID: 20190025,
    Bid_volume: 100,
    Bid_expected_price: 100,
    deliver_time: "2022-5-1",
    product: "电脑",
    current_price: "120000¥",
    key: 3,
  },
];
