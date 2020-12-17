import React from "react";
import Employees from "../components/employees/Employees";
import "./home.css";


function Home() {
  return (
    <div className="container">
      <div className="text-center directory">
        <h1>Employee Directory</h1>
        <h5>Click the column headings to sort.</h5>
      </div>
      <div className="container employees">
      <Employees />
      </div>
    </div>
  );
}

export default Home;
