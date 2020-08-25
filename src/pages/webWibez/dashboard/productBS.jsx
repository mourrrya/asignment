import React from "react";
import Carousel from "react-multi-carousel";

import mattressOne from "../../../assets/img/productBS/mattressOne.png";
import mattressThree from "../../../assets/img/productBS/mattressThree.png";
import mattressTwo from "../../../assets/img/productBS/mattressTwo.png";

import cart from "../../../assets/svg/cart.svg";
import plus from "../../../assets/svg/plus.svg";
import star from "../../../assets/svg/star.svg";

const myProductCard = [
  { img: mattressOne, title: "Fluid Magic Mattress", discount: "32%" },
  { img: mattressTwo, title: "Fluid Magic Mattress II" },
  { img: mattressThree, title: "Dura Mattress", discount: "12%" },
  { img: mattressOne, title: "Fluid Magic Mattress", discount: "32%" },
  { img: mattressTwo, title: "Fluid Magic Mattress II" },
  { img: mattressThree, title: "Dura Mattress", discount: "12%" },
];

const Star = () => (
  <div className="star">
    {[1, 2, 3, 4].map((_, index) => (
      <img src={star} key={index} alt="" />
    ))}
  </div>
);
export const ProductBS = () => {
  const ProductCard = ({ img, title, discount }) => (
    <div className="product-card">
      <div className="product-card-img">
        <img src={img} alt="Img" />
        {discount && <span>{discount} Discount</span>}
      </div>
      <div className="product-card-content">
        <h2 className="product-card-content__title">{title}</h2>
        <div className="product-card-content__ratting">
          <Star />
          <div className="review">
            <span>{"(37) Reviews"}</span>
          </div>
        </div>
        <h3 className="product-card-content__price">Rs. 6,600</h3>
      </div>
      <div className="product-card-action">
        <div className="add-to-wishlist">
          <img src={plus} alt="" />
          <span>Wishlist</span>
        </div>
        <div className="add-to-cart">
          <img src={cart} alt="" />
          <span>Add</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="product-BS">
      <h1 className="product-BS__head">Best Selling Products</h1>
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
        {myProductCard.map((data, index) => (
          <ProductCard
            key={index}
            img={data.img}
            title={data.title}
            discount={data.discount}
          />
        ))}
      </Carousel>
    </div>
  );
};
