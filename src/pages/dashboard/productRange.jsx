import React from "react";
import comfyMattressImg from "../../assets/img/productRange/comfyMattressImg.png";
import duraMattressImg from "../../assets/img/productRange/duraMattressImg.png";
import flexiMattressImg from "../../assets/img/productRange/flexiMattressImg.png";
import pillowImg from "../../assets/img/productRange/pillowImg.png";
import satinSheetsImg from "../../assets/img/productRange/satinSheetsImg.png";
import arrowRight from "../../assets/svg/arrowRight.svg";
export const ProductRange = () => {
  const Product = ({ img, title, subTitle, styleCtm }) => (
    <div style={styleCtm} className="product-content">
      <div className="product-content__img">
        <img src={img} alt="img" />
      </div>
      <div className="product-content__title">
        <span>{title}</span>
        <span>{subTitle}</span>
      </div>
    </div>
  );

  return (
    <div className="product">
      <h1 className="product__head">Range of most comfortable products</h1>
      <div className="product__range">
        <div className="product-list">
          <Product
            img={duraMattressImg}
            title="Comfy Mattress"
            subTitle="Best Seller"
            styleCtm={{
              marginBottom: "20px",
            }}
          ></Product>
          <Product
            img={comfyMattressImg}
            title="Dura Mattress"
            subTitle="Best Seller"
          ></Product>
        </div>
        <div className="product-list">
          <Product img={flexiMattressImg} title="Flexi Mattress"></Product>
          <Product
            img={satinSheetsImg}
            title="Satin Sheets"
            subTitle="Best Seller"
          ></Product>
          <Product img={pillowImg} title="Pillow"></Product>
        </div>
      </div>
      <div className="product__explore">
        <span>EXPLORE MORE</span>
        <img src={arrowRight} alt="" className="" />
      </div>
    </div>
  );
};
