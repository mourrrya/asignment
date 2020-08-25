import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-main">
      <Link to="/dashboard" className="home-main__link">
        Web Wibez Assignment
      </Link>
      <Link to="/black_coffer/dashboard" className="home-main__link">
        Black Coffer Assignment
      </Link>
      <Link to="/acorn/login" className="home-main__link">
        Acorn Assignment
      </Link>
    </div>
  );
}
