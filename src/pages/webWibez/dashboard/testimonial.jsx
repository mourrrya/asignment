import Carousel from "react-multi-carousel";
import React from "react";
import tmOneImg from "../../../assets/img/testimonial/tmOneImg.png";
import tmThreeImg from "../../../assets/img/testimonial/tmThreeImg.png";
import tmTwoImg from "../../../assets/img/testimonial/tmTwoImg.png";
import arrowCircleLeft from "../../../assets/svg/arrowCircleLeft.svg";
import arrowCircleRight from "../../../assets/svg/arrowCircleRight.svg";
import star from "../../../assets/svg/star.svg";
import "@brainhubeu/react-carousel/lib/style.css";

const productTestimonial = [
  {
    img: tmOneImg,
    msg: "“Best in comfort! Would recommend it always!”",
    name: "- Joseph",
  },
  { img: tmTwoImg, msg: "“Fully satisfied with the product”", name: "- Jogn" },
  { img: tmThreeImg, msg: "“Find product, as described!”", name: "- Jane" },
  {
    img: tmOneImg,
    msg: "“Best in comfort! Would recommend it always!”",
    name: "- Joseph",
  },
  { img: tmTwoImg, msg: "“Fully satisfied with the product”", name: "- Jogn" },
  { img: tmThreeImg, msg: "“Find product, as described!”", name: "- Jane" },
];

const Star = () => (
  <div className="star">
    {[1, 2, 3, 4].map((_, index) => (
      <img src={star} key={index} alt="" />
    ))}
  </div>
);
const myArrowLeft = <img src={arrowCircleLeft} alt="" className="" />;
const arrowLeftDisabled = <span>Left</span>;
const myArrowRight = <img src={arrowCircleRight} alt="" className="" />;
const arrowRightDisabled = <span>Right</span>;

export const Testimonial = () => (
  <div className="testimonial">
    <h1 className="testimonial__head">Testimonials</h1>
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 780,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 780,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {productTestimonial.map((data, index) => (
        <div key={index} className="testimonial-card">
          <div className="testimonial-card__img">
            <img src={data.img} alt="" />
          </div>
          <div className="testimonial-card__text">
            <div className="ratting">
              <Star />
              <span>29th Jan, 2020</span>
            </div>
            <div className="about-product">
              <span className="">{data.msg}</span>
              <span className=""> {data.name}</span>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);
