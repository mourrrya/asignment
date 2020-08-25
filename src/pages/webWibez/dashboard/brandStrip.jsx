import React from "react";
import experience from "../../../assets/svg/experience.svg";
import quality from "../../../assets/svg/quality.svg";
import trust from "../../../assets/svg/trust.svg";
const brandStrip = [
  { img: quality, text: "Best Quality" },
  { img: trust, text: "Most Trusted" },
  { img: experience, text: "5 Years of Excellence" },
];
export const BrandStrip = () => (
  <div className="brand-strip">
    <div className="brand-strip-sub-container">
      {brandStrip.map((data, index) => (
        <div key={index} className="brand-strip-content">
          <img
            src={data.img}
            alt="icon"
            className="brand-strip-content__img"
          ></img>
          <span className="brand-strip-content__span">{data.text}</span>
        </div>
      ))}
    </div>
  </div>
);
