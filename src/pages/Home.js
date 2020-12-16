import React from "react";
import Employees from "../components/employees/Employees";

function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="container employees">
      <Employees />
      </div>
    </div>
  );
}

export default Home;
