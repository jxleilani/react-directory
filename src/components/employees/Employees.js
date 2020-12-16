import React, { Component } from "react";
import { getUsers } from "../../utils/API";
import Employee from "./Employee";

class Employees extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    getUsers()
      .then((res) => {
        this.setState({ employees: res.data.results });
        console.log(this.state.employees);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return this.state.employees.map((user) => (
      <Employee
        first={user.name.first}
        last={user.name.last}
        email={user.email}
        city={user.location.city}
        state={user.location.state}
      />
    ));
  }
}

export default Employees;
