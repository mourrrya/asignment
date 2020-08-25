import { Button } from "antd";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import businessImg from "../../../assets/img/aboutUs/businessImg.svg";
import gigWorkerImg from "../../../assets/img/aboutUs/gigWorkerImg.svg";
import youngWorker from "../../../assets/img/aboutUs/youngWorker.svg";
// import rightArrowIconLight from "../../assets/img/rightArrowIconLight.svg";

const about = [
  {
    head: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi.",
    paraOne:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    paraTwo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    img: youngWorker,
  },
  {
    head: "Lorem ipsum dolor.",
    paraOne:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    paraTwo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    button: "Lorem Ipsum",
    img: businessImg,
  },
  {
    head: "Lorem ipsum dolor.",
    paraOne:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    paraTwo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmoda..",

    button: "Lorem Ipsum",
    img: gigWorkerImg,
  },
];
export default function AboutUs() {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutUs-main-block">
      <div className="aboutUs-block">
        {about.map((data, index) => (
          <div className="aboutUs-subBlock" key={index}>
            <h1 className="aboutUs-head">{data.head}</h1>
            <p className="aboutUs-paraOne">{data.paraOne}</p>
            <p className="aboutUs-paraTwo">{data.paraTwo} </p>
            {data.button && (
              <Button className="aboutUsButton">{data.button}</Button>
            )}
            <div className="aboutUs-img-block">
              <img src={data.img} alt="" className="aboutUs-img" />
            </div>
          </div>
        ))}
        <div className="aboutUs-contact">
          <h1 className="aboutUs-contact-head">
            Feel free to get in touch with us!
          </h1>
          <Button
            className="aboutUs-contact-button"
            onClick={() => history.push("/contactUs")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
