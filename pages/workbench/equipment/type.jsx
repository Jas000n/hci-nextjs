import WorkbenchLayout from "../../../layout/WorkbenchLayout";
import { Table, Button } from "antd";
import styled from "styled-components";
import {
  demoColumns,
  demoData,
  demoOnChange,
} from "../../../database/demo/type";
import { useLocalStorageState } from "ahooks";
import { useState } from "react";
import PopupFormButton from "../../../components/PopupForm";
import { useContext } from "react";

export default function Type() {
  const initialEquipmentTypesColumn = [
    { title: "ID", dataIndex: "id" },
    {
      title: "设备类型",
      dataIndex: "equipmentType",
    },
    {
      title: "可生产产品类型",
      dataIndex: "productType",
    },
    {
      title: "操作",
      dataIndex: "operation",
      width: "15%",
      render: (text, record, index) => {
        return (
          <>
            <Button
              onClick={() => {
                setEquipmentTypesData((lines) =>
                  lines.filter((_, idx) => idx != index)
                );
              }}
            >
              删除
            </Button>
          </>
        );
      },
    },
  ];
  const [equipmentTypesColumn, setEquipmentTypesColumn] = useState(
    initialEquipmentTypesColumn
  );
  const [equipmentTypesData, setEquipmentTypesData] = useState(
    initialEquipmentTypesData
  );
  const handleAddEquipmentType = (valueFromForm) => {
    setEquipmentTypesData((values) => {
      const newValue = {
        ...valueFromForm,
        key: (1 + values[values.length - 1].key).toString(),
      };
      return [...values, newValue];
    });
  };
  const formItems = [
    {
      name: "id",
      label: "Id",
    },
    {
      name: "equipmentType",
      label: "设备类型",
    },
    {
      name: "productType",
      label: "可生产产品类型",
    },
  ];
  return (
    <>
      {/* <Button
        onClick={() => {
          console.log(a);
        }}
      >
        user
      </Button> */}
      <Bar>
        <PopupFormButton
          name="添加设备类型"
          onSubmitForm={handleAddEquipmentType}
          formItems={formItems}
        />
        <Button
          onClick={() => {
            setEquipmentTypesData(initialEquipmentTypesData);
          }}
        >
          重置测试数据
        </Button>
      </Bar>
      <Table
        columns={equipmentTypesColumn}
        dataSource={equipmentTypesData}
        // onChange={demoOnChange}
      />
    </>
  );
}

Type.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};

/* style */

const Bar = styled.div`
  display: flex;
  margin: 0 0 25px 0;
  justify-content: space-between;
`;

const initialEquipmentTypesData = [
  {
    key: "1",
    id: "1",
    equipmentType: "clothes",
    productType: "卫衣,衬衫", //TODO 变为标签样式
  },
  {
    key: "2",
    id: "2",
    equipmentType: "shoes",
    productType: "篮球鞋,跑鞋", //TODO 变为标签样式
  },
  {
    key: "3",
    id: "3",
    equipmentType: "toys",
    productType: "奥特曼,皮卡丘", //TODO 变为标签样式
  },
];
