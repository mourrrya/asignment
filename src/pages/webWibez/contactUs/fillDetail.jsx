import React from "react";
import { Modal, Form, Button } from "antd";
import InputType from "../../inputType";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import modalCloseIcon from "../../../assets/svg/modalCloseIcon.svg";

const userDetail = [
  {
    name: "name",
    label: "Name",
    // placeholder: "Your Name",
    rule: [{ required: true, message: "please input your name!" }],
    inputType: "text",
  },
  {
    name: "city",
    label: "City",
    rule: [{ required: true, message: "please input your city!" }],
    option: [
      { option: "Delhi", value: "Delhi" },
      { option: "Mumbai", value: "Mumbai" },
      { option: "Kolkata", value: "Kolkata" },
      { option: "Bangalore", value: "Bangalore" },
      { option: "Pune", value: "Pune" },
    ],
    value: ["Delhi", "Mumbai", "Kolkata", "Bangalore", "Pune"],
    inputType: "select",
  },
  {
    name: "email",
    label: "Email Address",
    // placeholder: "Your Email",
    rule: [{ required: true, message: "please input your email!" }],
    inputType: "text",
  },
  {
    name: "mobile",
    label: "Mobile Number",
    // placeholder: "Your Phone",
    rule: [{ required: true, message: "please input your mobile!" }],
    inputType: "number",
  },
  {
    name: "message",
    label: "Message",
    // placeholder: "Your Message",
    rule: [{ required: true, message: "please input your message!" }],
    inputType: "textarea",
  },
];

export default function FillDetail({
  contactName,
  modalVisible,
  handleCancelModal,
}) {
  return (
    <Modal
      title="Get In Touch"
      visible={modalVisible}
      onCancel={handleCancelModal}
      footer={null}
      width={812}
      className="contactUs-form-field"
      closeIcon={<img src={modalCloseIcon} alt="close" className="" />}
    >
      <GetUserDetailForm contactName={contactName} />
    </Modal>
  );
}

export const GetUserDetailForm = ({ contactName }) => {
  const location = useLocation();
  console.log("location", location);

  const [form] = Form.useForm();

  const onFormSubmit = (value, formName) => {
    if (formName === "user") {
      console.log(value);
    } else if (formName === "business") {
      console.log(value);
    } else {
      const startDate = value.eventStartDate._d.toISOString();
      const endDate = value.eventEndDate._d.toISOString();
      delete value.eventStartDate;
      delete value.eventEndDate;
      const preProcessedValue = { ...value, eventDate: { startDate, endDate } };
      console.log(preProcessedValue);
    }
  };
  return (
    <>
      {location.pathname !== "/partner_with_us" && (
        <h1 className="get-in-touch-head">Get in Touch</h1>
      )}
      {contactName === "user" && (
        <Form
          name="userContact"
          onFinish={(value) => onFormSubmit(value, "user")}
          form={form}
          className="userContact-form-main-block"
        >
          {userDetail.map((user, index) => (
            <div className="user-form" key={index}>
              <p>{user.label}</p>
              <InputType
                type={user.inputType}
                name={user.name}
                rule={user.rule}
                placeholder={user.placeholder}
                option={user.option}
              />
            </div>
          ))}
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </>
  );
};
