import React, { useState } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";

const CollectionCreateForm = ({
  visible,
  onCreate,
  onCancel,
  name,
  formItems,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title={name}
      okText="确定"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        {formItems.map((cur) => (
          <Form.Item name={cur.name} label={cur.label} key={name}>
            <Input />
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};

const PopupFormButton = ({ name, onSubmitForm, formItems }) => {
  const [visible, setVisible] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    onSubmitForm(values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        {name}
      </Button>
      <CollectionCreateForm
        name={name}
        visible={visible}
        onCreate={onCreate}
        formItems={formItems}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default PopupFormButton;
