import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  return (
    <div className="menu">
      <div className="menu__link" onClick={() => history.push("/")}>
        <span>Home</span>
      </div>
      <div className="menu__link" onClick={() => history.push("/about")}>
        <span>About</span>
      </div>
      <div className="menu__link" onClick={() => history.push("/contactUs")}>
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default function Header() {
  const [pageAt, setPageAt] = useState(true);
  const handleScroll = () => {
    setPageAt(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {pageAt < 140 ? (
        <div className="header-style">
          <div className="header">
            <h1>Launch Offer : 30% OFF on LiveIn Mattress + Free Pillows</h1>
          </div>
          <div className="header-main">
            <Menu />
          </div>
        </div>
      ) : (
        <>
          <div className="header-full"></div>
          <div className="header-main-full">
            <Menu />
          </div>
        </>
      )}
    </>
  );
}
