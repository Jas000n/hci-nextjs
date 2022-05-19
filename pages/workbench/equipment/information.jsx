import { Button } from "antd";
import { createContext } from "react";
import { useContext } from "react";
import WorkbenchLayout from "../../../layout/WorkbenchLayout";
import { Table, Tag, Space } from 'antd';
const ContextDemo = createContext("default");

export default function Information() {
  const columns = [
    {
      title: '设备名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    
    {
      title: '设备类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '设备产能',
      key: 'productivity',
      dataIndex: 'productivity',

    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>管理{record.name}</a>
          <a>排产</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: "西门子",
      productivity:100,
      type:"电冰箱",
    },
    {
      key: '2',
      name: "松下",
      productivity:50,
      type:"电冰箱",
    },
    {
      key: '3',
      name: "华为",
      productivity:300,
      type:"手机",
    },
  ];
  
  return (
    <Table columns={columns} dataSource={data} />
  );
}



Information.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
