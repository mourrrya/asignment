import React from "react";
import bedSheetImg from "../../../assets/img/productFeatured/bedSheetImg.png";
import duraMattressesImg from "../../../assets/img/productFeatured/duraMattressImg.png";
import flexiMattress from "../../../assets/img/productFeatured/flexiMattress.png";
import pillowsImg from "../../../assets/img/productFeatured/pillowsImg.png";
import arrowRight from "../../../assets/svg/arrowRight.svg";

const productFeatured = [
  { img: duraMattressesImg, title: "Dura Mattress" },
  { img: pillowsImg, title: "Pillows" },
  { img: bedSheetImg, title: "Bed Sheets" },
  { img: flexiMattress, title: "Flexi Mattress", subtitle: "Best Seller" },
];

export const ProductFeatured = () => (
  <div className="product-featured">
    <h1 className="product-featured__head">Featured Ranges</h1>
    <div className="product-featured-blk">
      {productFeatured.map((data, index) => (
        <div key={index} className="product-feature-content">
          <div className="product-feature-content-blk">
            <div className="product-feature-content-blk__img">
              <img src={data.img} alt="" className="" />
            </div>
            <div className="title">
              <span>{data.title}</span>
              <span>{data.subtitle}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="product-featured-explore">
      <span>EXPLORE MORE</span>
      <img src={arrowRight} alt="" className="" />
    </div>
  </div>
);
