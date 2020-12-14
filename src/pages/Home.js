import React, { Component } from "react";
import { getUsers } from "../utils/API";
import Employees from "../components/employees/Employees";

function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <Employees />
    </div>
  );
}

export default Home;
