import { Button } from "antd";
import { Table } from "antd";
import WorkbenchLayout from "../../../layout/WorkbenchLayout";

export default function Order() {
  return (
    <div>
      order
      <Table dataSource={dataSource} columns={columns} />
      {/* <Button>+++</Button> */}
    </div>
  );
}

Order.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};

const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
    op: <Button>+</Button>,
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
    op: <Button>+</Button>,
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "op",
    dataIndex: "op",
    key: "op",
  },
];
