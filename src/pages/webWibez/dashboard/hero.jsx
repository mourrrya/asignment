import React from "react";
import Carousel from "react-multi-carousel";
import hero from "../../../assets/img/hero1.png";
import heroFocusPoint from "../../../assets/svg/heroFocusPoint.svg";
import arrowWhiteRight from "../../../assets/svg/arrowWhiteRight.svg";

const CustomCarousel = (props) => {
  const { active, onClick } = props;
  return (
    <div
      style={{ opacity: active ? 1 : 0.5 }}
      onClick={onClick}
      className="custom-dot"
    />
  );
};

export function Hero() {
  return (
    <div className="dashboard-main">
      <div className="hero">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          //   autoPlay
          autoPlaySpeed={2000}
          customTransition="all 1s linear"
          centerMode={false}
          containerClass="container"
          draggable={false}
          focusOnSelect={false}
          infinite
          minimumTouchDrag={80}
          customDot={<CustomCarousel />}
          slidesToSlide={1}
          showDots
          swipeable
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 0,
              },
              items: 1,
            },
          }}
        >
          {[0, 1, 2, 3, 4, 5].map((_, index) => (
            <div className="hero-img" key={index}>
              <img src={hero} alt="" className="img" />
              <div className="offer">
                {/* <div className="blank"></div> */}
                <div className="offer-brief">
                  <div className="offer__text">
                    <h1>Branded Mattress</h1>
                    <p>DIY memory foam mattress to suit your needs</p>
                    <div className="button">
                      <span>BUY NOW</span>
                      <img src={arrowWhiteRight} alt="" />
                    </div>
                  </div>
                  <div className="offer__focusPoint">
                    <img src={heroFocusPoint} alt="" />
                    <div className="content">
                      <span>use code</span>
                      <span>BLACKFRIDAY20</span>
                      <span>and get</span>
                      <span>30% OFF</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offer-wrapper"></div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
