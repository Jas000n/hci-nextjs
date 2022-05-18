import styled from "styled-components";
import WorkbenchLayout from "../../../layout/WorkbenchLayout";
import { Tabs, Table, Tag, Space, Progress, Divider, Input } from "antd";
import { Statistic, Row, Col, Button } from "antd";
import getLoginUser from "../../../helper/getLoginUser";
import axios from "axios";
import { useState } from "react";
const { TabPane } = Tabs;
const { Search } = Input;
import TableFilter from "../../../components/TableFilter";
import { useRouter } from "next/router";
export default function Home({ data }) {
  const router = useRouter();
  function DeleteAllInfo() {
    SetdataInfo([]);
  }

  const InitInfocolumns = [
    {
      title: "竞标ID",
      dataIndex: "Bid_ID",
      key: "Bid_ID",
      ifSearch: true,
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
      ifSearch: true,
    },
    {
      title: "产品类型",
      key: "product",
      dataIndex: "product",
      ifSearch: true,
    },
    {
      title: "更多操作",
      key: "action",
      render: (text, record, index) => {
        return (
          <>
            <Space size="middle">
              <a
                onClick={() => {
                  router.push("/workbench/bid");
                }}
              >
                更多细节
              </a>
              <a onClick={() => deleteInfo(text, record, index)}>删除通知</a>
            </Space>
          </>
        );
      },
    },
  ];
  function deleteInfo(text, record, index) {
    console.log("clicked");
    console.log(index);

    SetdataInfo((pre) => {
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
  const [columns_info, SetcolumnsInfo] = useState(InitInfocolumns);
  const [data_info, SetdataInfo] = useState(InitInfoData);

  switch (data.loginUser.type) {
    case "manufacturer":
      return (
        <div>
          <Divider>通知中心</Divider>
          <Tabs onChange={callback} type="card">
            <TabPane tab="竞标" key="1">
              <TableFilter data={data_info} columns={columns_info} />
            </TabPane>
            <TabPane tab="订单" key="2"></TabPane>
            <TabPane tab="工厂" key="3"></TabPane>
            <TabPane tab="产品" key="4"></TabPane>
          </Tabs>
          <Divider style={{ marginBottom: "40px" }}>数据中心</Divider>

          <div className="data_center">
            <Row gutter={16}>
              <Col span={20}>
                <Statistic title="新通知条数" value={data_info.length} />
                <Button
                  style={{ marginTop: 16 }}
                  type="primary"
                  onClick={DeleteAllInfo}
                >
                  清空所有通知
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      );
    case "agency_boss":
      return <div>hello,jxslb</div>;
  }
}

Home.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
function callback(key) {
  console.log(key);
}

const InitInfoData = [
  {
    Bid_ID: 20190025,
    Bid_state: "拒绝",
    Bid_time: "2022-5-1",
    product: "电脑",
    key: 0,
  },
  {
    Bid_ID: 20190025,
    Bid_state: "通过",
    Bid_time: "2022-5-1",
    product: "电脑",
    key: 1,
  },
  {
    Bid_ID: 20190025,
    Bid_state: "审核中",
    Bid_time: "2022-5-1",
    product: "电脑",
    key: 2,
  },
];
export async function getServerSideProps(context) {
  const loginUser = await getLoginUser();
  return {
    props: { data: { loginUser } },
  };
}
