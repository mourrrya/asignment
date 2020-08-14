import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Link to="/admission_form">Admission Form</Link>
      <br />
      <br />
      <Link to="/student_result">Result Of Students</Link>
    </div>
  );
}
