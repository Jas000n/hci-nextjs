import { Tabs, Table, Tag, Space, Progress, Divider, Input } from "antd";
import { useContext } from "react";
import { CurrentUserContext } from "../../../../context/CurrentUserContext";
import WorkbenchLayout from "../../../../layout/WorkbenchLayout";
const { Search } = Input;
export default function Order() {
  const [user, setUser] = useContext(CurrentUserContext);
  console.log('user',user)
  if(user.type==="businessman"){
    console.log("hello businessman!")
  }
  return (
    <div>
      <div>
        <Search placeholder="搜索一切" style={{ width: 200 }} />
      </div>
      <Divider>工作台</Divider>
      <Table dataSource={initialOrders} columns={columns} />
      <Divider style={{ marginBottom: "40px" }}>数据中心</Divider>

    </div>
    
  );
}

Order.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};

const initialOrders = [
  {
    key: "1",
    order_id: "1",
    order_state: "等待投标",
    order_progress: "50",
    order_detail:"查看投标",
    order_content:"电脑",
  },
  {
    key: "2",
    order_id: "1",
    order_state: "等待投标",
    order_progress: "20",
    order_detail:"查看投标",
    order_content:"手机",
  },
  {
    key: "3",
    order_id: "1",
    order_state: "等待投标",
    order_progress: "30",
    order_detail:"查看投标",
    order_content:"平板",
  },
  {
    key: "4",
    order_id: "1",
    order_state: "等待投标",
    order_progress: "80",
    order_detail:"查看投标",
    order_content:"鼠标",
  },
];

const columns = [
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
      return<>
      <Progress percent={text} size="small" status="active" />
      </>
      
    },
    
  },
  {
    title: "详情",
    dataIndex: "order_detail",
    key: "order_detail",
    render: (text, record) => {
      return<>
      <Space size="middle">
        <a>{text}</a>

      </Space>
      </>
      
    },
  },
];
