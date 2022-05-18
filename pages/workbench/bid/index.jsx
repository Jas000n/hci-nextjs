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
import { Tooltip } from 'antd';
import { SettingOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Option } = Select;
const { TabPane } = Tabs;
const { Search } = Input;

const selectBefore = (
  <Select defaultValue="add" style={{ width: 60 }}>
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);

export default function Home() {
  function CountNotRejected(){
    let i=0;
    let re=0;
    let all= data_Bid_in_progress.length;
    for(i=0;i<all;i++){
      if(data_Bid_in_progress[i].Bid_state!="拒绝"){
        re+=1;
      }
    }
    return (re/all*100).toFixed(1);
  }
  function CountApproved(){
    let i=0;
    let re=0;
    let all= data_Bid_in_progress.length;
    for(i=0;i<all;i++){
      if(data_Bid_in_progress[i].Bid_state==="通过"){
        re+=1;
      }
    }
    return (re/all*100).toFixed(1);
  }
  function giveUpBid(text, record, index) {
    console.log("give up", index);
    Setdata_Bid_in_progress((pre) => {
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
  const Init_columns_give_Bid = [
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
      render: (text, record, index) => {
        console.log("record", record);
        console.log("index", index);
        const handleChangeNumber = (inputValue) => {
          console.log(inputValue);
          Setdata_give_Bid((pre) => {
            let newData = [];
            let i = 0;
            for (i = 0; i < pre.length; i++) {
              if (i != index) {
                newData.push(pre[i]);
              } else {
                pre[i].give_price = inputValue;
                newData.push(pre[i]);
              }
            }
            return newData;
          });

          // )
        };
        // return <InputNumber addonBefore="+" addonAfter="$" value={record.give_price} onChange={handleChangeNumber}/>;
        return (
          <InputNumber
            addonBefore="+"
            addonAfter="¥"
            onChange={handleChangeNumber}
          />
        );
      },
    },
    {
      title: "更多操作",
      key: "action",
      render: (text, record, index) => {
        return (
          <>
            <a onClick={() => GiveBid(text, record, index)}>投标</a>
          </>
        );
      },
    },
  ];

  const Init_columns_Bid_in_progress = [
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
      render: (text, record, index) => {
        let buttoninfo = "重新投标";
        if (record.Bid_state === "通过") {
          buttoninfo = "排产";
        }
        return (
          <>
            <Space size="middle">
              <a
                style={{ color: "red" }}
                onClick={() => giveUpBid(text, record, index)}
              >
                放弃投标
              </a>
              <a onClick={() => handleMoreOperation(text, record, index)}>
                {buttoninfo}
              </a>
            </Space>
          </>
        );
      },
    },
  ];
  const Init_data_Bid_in_progress = [
    {
      Bid_ID: "001",
      Bid_state: "拒绝",
      Bid_time: "2022-5-1",
      product: "电脑",
      current_price: "120000",
      key: 0,
    },
    {
      Bid_ID: "002",
      Bid_state: "通过",
      Bid_time: "2022-5-1",
      product: "电脑",
      current_price: "120000",
      key: 1,
    },
    {
      Bid_ID: "003",
      Bid_state: "审核中",
      Bid_time: "2022-5-1",
      product: "电脑",
      current_price: "120000",
      key: 2,
    },
  ];
  const Init_data_give_Bid = [
    {
      Bid_ID: "004",
      Bid_volume: 100,
      Bid_expected_price: 100,
      deliver_time: "2022-5-1",
      product: "电脑",
      current_price: "120000",
      key: 0,
      give_price: 120,
    },
    {
      Bid_ID: "005",
      Bid_volume: 100,
      Bid_expected_price: 100,
      deliver_time: "2022-5-1",
      product: "电脑",
      current_price: "120000",
      key: 1,
      give_price: 120,
    },
    {
      Bid_ID: "006",
      Bid_volume: 100,
      Bid_expected_price: 100,
      deliver_time: "2022-5-1",
      product: "电脑",
      current_price: "120000",
      key: 2,
      give_price: 120,
    },
    {
      Bid_ID: "007",
      Bid_volume: 100,
      Bid_expected_price: 100,
      deliver_time: "2022-5-1",
      product: "电脑",
      current_price: "120000",
      key: 3,
      give_price: 120,
    },
  ];
  const [columns_give_Bid, Setcolumns_giveBid] = useState(
    Init_columns_give_Bid
  );
  const [columns_Bid_in_progress, Setcolumns_Bid_in_progress] = useState(
    Init_columns_Bid_in_progress
  );
  const [data_Bid_in_progress, Setdata_Bid_in_progress] = useState(
    Init_data_Bid_in_progress
  );
  const [data_give_Bid, Setdata_give_Bid] = useState(Init_data_give_Bid);
  function handleMoreOperation(text, record, index) {
    if (record.Bid_state === "通过") {
      console.log("paichan !!!!!");
    } else {
      console.log("chongxin toubiao !!!");
      Setdata_Bid_in_progress((pre) => {
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
      Setdata_give_Bid((pre) => {
        let newData = [];
        let i = 0;
        for (i = 0; i < pre.length; i++) {
          newData.push(pre[i]);
        }
        newData.push({
          Bid_ID: record.Bid_ID,
          Bid_volume: "123",
          Bid_expected_price: record.current_price,
          deliver_time: record.Bid_time,
          product: record.product,
          give_price: "0",
          key: record.Bid_ID,
        });
        return newData;
      });
    }
  }
  function GiveBid(text, record, index) {
    console.log(record);
    Setdata_give_Bid((pre) => {
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
    Setdata_Bid_in_progress((pre) => {
      let newData = [];
      let i = 0;
      for (i = 0; i < pre.length; i++) {
        newData.push(pre[i]);
      }
      newData.push({
        Bid_ID: record.Bid_ID,
        Bid_state: "审核中",
        Bid_time: record.deliver_time,
        product: record.product,
        current_price: record.give_price,
        key: record.Bid_ID,
      });

      return newData;
    });
  }
  return (
    <div>
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
            <Tooltip title="绿色-通过，蓝色-审核中，红色-拒绝">
              <Progress percent={CountNotRejected()} success={{ percent: CountApproved()}} trailColor="red" type="circle" />
            </Tooltip>
          </div>
          <div className="text_align_center">进行中的投标</div>
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

function MyInputNumber(props) {
  const { value } = props;
  console.log(props, "props");
  const [number, setNumber] = useState(value);
  console.log(number, "number");
  // return <InputNumber  />;
  return <InputNumber props value={number} setValue={setNumber} />;
}
