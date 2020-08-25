import React, { useEffect } from "react";
import userImg from "../../../assets/img/contactUs/userImg.svg";
import { GetUserDetailForm } from "./fillDetail";

const contactUsData = [
  {
    head: "User Support",
    para:
      "A bit stuck? Sorry to hear that. There's an easy way to contact us via the button below:",
    img: userImg,
    form: <GetUserDetailForm contactName="user" />,
  },
];

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo("0", "0");
  }, []);

  const getContactData = (contactData) => {
    return (
      <div className="contact-us-block">
        {contactData && (
          <>
            <h1 className="contact-us-head">{contactData.head}</h1>
            <p className="contact-us-para">{contactData.para}</p>
            <div className="contact-us-img-block">
              <img src={contactData.img} alt="" className="contact-us-img" />
            </div>
            <div className="contact-us-form-block">{contactData.form}</div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="contact-us-main-block">
      {getContactData(contactUsData[0])}
    </div>
  );
}
