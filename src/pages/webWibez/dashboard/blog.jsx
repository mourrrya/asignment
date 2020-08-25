import React from "react";
import blog1 from "../../../assets/img/blog/blog1.png";
import blog2 from "../../../assets/img/blog/blog2.png";
import blog3 from "../../../assets/img/blog/blog3.png";
import blog4 from "../../../assets/img/blog/blog4.png";
import blog5 from "../../../assets/img/blog/blog5.png";
import blog6 from "../../../assets/img/blog/blog6.png";

const allBlog = [blog1, blog2, blog3, blog4, blog5, blog6];

export const Blog = () => (
  <div className="blog">
    <h1 className="blog__head">Blog Posts</h1>
    <div className="blog-content-blk">
      {allBlog.map((img, index) => (
        <div key={index} className="blog-content">
          <div className="blog-content__img">
            <img src={img} alt="" />
          </div>
          <div className="blog-content__brief">
            <span>29th Jan, 2020</span>
            <span>Keep your back in shape...</span>
            <span>{"(37) Comments"}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
