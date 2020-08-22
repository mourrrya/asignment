import React from "react";
import arrowRight from "../../assets/svg/arrowRight.svg";

const searchOption = ["Flexible", "Mattress", "Pillows", "Bed Sheets"];

export const Footer = () => (
  <div className="footer">
    <div className="footer-one">
      <div className="footer-search">
        <h1 className="">Popular Searches</h1>
        <div className="search-option">
          {searchOption.map((search, index) => (
            <div key={index} className="search-type">
              <span key={index}>{search}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="footer-two">
      <div className="footer-link">
        <div className="footer-link-content">
          <span className="footer-link__head">Company</span>
          <span className="footer-link__text">Home</span>
          <span className="footer-link__text">About Us</span>
          <span className="footer-link__text">Blogs</span>
        </div>

        <div className="footer-link-content">
          <span className="footer-link__head">Products</span>
          <span className="footer-link__text">Mattress</span>
          <span className="footer-link__text">Bed in a Box</span>
          <span className="footer-link__text">Pillows</span>
          <span className="footer-link__text">Slim Mattress</span>
        </div>
        <div className="footer-link-content">
          <span className="footer-link__head">Support</span>
          <span className="footer-link__text">Privacy & Security</span>
          <span className="footer-link__text">Terms & Conditions</span>
          <span className="footer-link__text">Warranty Policy</span>
          <span className="footer-link__text">Return Policy</span>
        </div>
        <div className="footer-link-content">
          <span className="footer-link__head">Products From</span>
          <span className="footer-link__text">
            ABC, x98, This street,
            <br />
            That Block, Near This Beach
            <br />
            New York
            <br />
            11001
          </span>
        </div>
        <div className="footer-link-content">
          <span className="footer-link__head">Subscribe</span>
          <div className="input">
            <input type="text" className="email-input" />
            <div className="button">
              <img src={arrowRight} alt="" />
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">Copyrights @ MattressWorld Pvt. Ltd.</p>
    </div>
  </div>
);
