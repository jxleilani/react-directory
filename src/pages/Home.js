import React, { Component } from "react";
import getUsers from "../utils/API";
import Employee from "../components/employees/Employee";

class Home extends Component {
  state = {
    employees: [],
    search: "",
  };

  componentDidMount() {
    getUsers()
      .then((res) => {
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    let filterArr = [];
    this.setState({ search: value });

    filterArr = this.state.employees.filter((employee) => {
      return (
        employee.name.first.toLowerCase().includes(value.toLowerCase()) ||
        employee.name.last.toLowerCase().includes(value.toLowerCase()) ||
        employee.location.city.toLowerCase().includes(value.toLowerCase()) ||
        employee.location.state.toLowerCase().includes(value.toLowerCase())
      );
    });
    this.setState({ employees: filterArr });
  };

  sortName = () => {
    const sortArr = this.state.employees.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    this.setState({ employees: sortArr });
  };
  sortEmail = () => {
    const sortArr = this.state.employees.sort((a, b) =>
      a.email > b.email ? 1 : -1
    );
    this.setState({ employees: sortArr });
  };
  sortCity = () => {
    const sortArr = this.state.employees.sort((a, b) =>
      a.location.city > b.location.city ? 1 : -1
    );
    this.setState({ employees: sortArr });
  };

  render() {
    return (
    <div className="container">
      <div className="text-center directory">
        <h1>Employee Directory</h1>
        <h5>Click the column headings to sort.</h5>
      </div>

      <section>
      <form className="search-form">
          <input
            value={this.state.search}
            onChange={this.handleSearch}
            type="text"
            placeholder="Enter Search Term"
          ></input>
          <button className="btn btn-secondary">Search</button>
      </form>
      </section>

      <section>
        <table className="table table-light table-striped">
          <thead className="text-dark">
            <tr>
              <th scope="col text-center"></th>
              <th scope="col text-center" className="name" onClick={this.sortName}>Name</th>
              <th scope="col text-center" className="email" onClick={this.sortEmail}>Email</th>
              <th scope="col text-center" className="citystate" onClick={this.sortCity}>City, State</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>

        </table>
      </section>



    </div>
    );
  }
}

export default Home;
