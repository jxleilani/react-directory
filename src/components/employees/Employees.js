import React, { Component } from "react";
import getUsers from "../../utils/API";
import Employee from "./Employee";
import "./employee.css";

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

  sortName = () => {
    const sortArr = this.state.employees.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
    this.setState({ employees: sortArr });
  }
  sortEmail = () => {
    const sortArr = this.state.employees.sort((a, b) => (a.email > b.email ? 1 : -1));
    this.setState({ employees: sortArr });
  }
  sortCity = () => {
    const sortArr = this.state.employees.sort((a, b) => (a.location.city > b.location.city ? 1 : -1));
    this.setState({ employees: sortArr });
  }

  render() {
    return (
      <div className="container">
        <div className="row text-center headings">
          <div className="col-sm-2"></div>
          <div className="col-sm-3 name" onClick={this.sortName}>
            Name
          </div>
          <div className="col-sm-3 email" onClick={this.sortEmail}>Email</div>
          <div className="col-sm-3 citystate" onClick={this.sortCity}>City, State</div>
        </div>
        <div className="row">
          <div className="col">
            {this.state.employees.map((user) => (
              <Employee
                key={user.email}
                first={user.name.first}
                last={user.name.last}
                email={user.email}
                city={user.location.city}
                state={user.location.state}
                img={user.picture.medium}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Employees;
