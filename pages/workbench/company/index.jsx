import styled from "styled-components";
import WorkbenchLayout from "../../../layout/WorkbenchLayout";
import { Tabs, Table, Tag, Space, Progress, Divider, Input } from "antd";
import PopupFormButton from "../../../components/PopupForm";
const { TabPane } = Tabs;
const { Search } = Input;
import { useState } from "react";
export default function Home() {
  function countPercent() {
    let re = 0;
    let all = data_company.length;
    let i = 0;
    for (i = 0; i < data_company.length; i++) {
      if (data_company[i].company_state === "工作") {
        re += 1;
      }
    }
    return ((re / all) * 100).toFixed(1);
  }
  const Initcolumns_company = [
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
        let color = "yellow";
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
      dataIndex: "operation",
      render: (text, record, index) => {
        if (record.company_state != "下班") {
          return (
            <Space size="middle">
              <a>下单</a>
              <a onClick={() => handleWorkOff(text, record, index)}>下班</a>
            </Space>
          );
        } else {
          return (
            <Space size="middle">
              <a onClick={() => handleWorkOn(text, record, index)}>上班</a>
            </Space>
          );
        }
      },
    },
  ];
  const [columns_company, SetcolumnsCompany] = useState(Initcolumns_company);
  const [data_company, SetdataCompany] = useState(Initdata_company);
  const handleAddCompany = (valueFromForm) => {
    console.log(valueFromForm, "拿到");
    SetdataCompany((values) => {
      const newValue = {
        ...valueFromForm,
        key: (1 + values[values.length - 1].key).toString(),
      };
      return [...values, newValue];
    });
  };
  const handleWorkOff = (text, record, index) => {
    SetdataCompany((previousState) => {
      return previousState.map((cur, idx) => {
        if (idx === index) {
          return { ...cur, company_state: "下班" };
        }
        return cur;
      });
    });
  };
  const handleWorkOn = (text, record, index) => {
    SetdataCompany((previousState) => {
      return previousState.map((cur, idx) => {
        if (idx === index) {
          return { ...cur, company_state: "工作" };
        }
        return cur;
      });
    });
  };
  return (
    <div>
      <PopupFormButton
        name="添加工厂"
        onSubmitForm={handleAddCompany}
        formItems={formItems}
      />
      <Divider>工作台</Divider>

      <Table columns={columns_company} dataSource={data_company} />

      <Divider style={{ marginBottom: "40px" }}>数据中心</Divider>

      <div className="data_center">
        <div>
          <div style={{ marginBottom: "40px" }}>
            <Progress
              type="circle"
              percent={countPercent()}
              format={(percent) => `${percent} %生产中`}
            />
            
          </div>
          <div className="text_align_center">公司概览</div>
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

const formItems = [
  {
    name: "company_id",
    label: "公司名称",
  },
  {
    name: "company_employee",
    label: "公司员工数",
  },
  {
    name: "company_state",
    label: "公司状态",
  },
];
const Initdata_company = [
  {
    company_id: "张三公司",
    company_employee: "120",
    company_state: "空闲",
    key: 0,
  },
  {
    company_id: "李四公司",
    company_employee: "233",
    company_state: "工作",
    key: 1,
  },
  {
    company_id: "王五公司",
    company_employee: "666",
    company_state: "工作",
    key: 2,
  },
  {
    company_id: "赵六公司",
    company_employee: "233",
    company_state: "下班",
    key: 3,
  },
];
