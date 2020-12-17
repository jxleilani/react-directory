import React, { Component } from "react";
import getUsers from "../utils/API";
import Employee from "../components/employees/Employee";
import "./search.css";

class Search extends Component {
  state = {
    employees: [],
    search: ""
  };

  componentDidMount(){
    getUsers()
    .then((res) => {
      this.setState({ employees: res.data.results });
      console.log(this.state.employees);
    })
    .catch((err) => console.log(err));
  }

  handleSearch = (e) => {
    const { value } = e.target;
    let filterArr = [];
    this.setState({ search: value });

    filterArr = this.state.employees.filter(employee => employee.name.first === value);

    this.setState({ employees: filterArr });
  };

  render() {
    return (
      <div className="container search-box">
        <form>
          <input
            value={this.state.search}
            onChange={this.handleSearch}
            type="text"
            placeholder="Search by Name"
          ></input>
          <button>Search</button>
        </form>
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

export default Search;
