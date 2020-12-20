import React, { Component } from "react";
import getUsers from "../utils/API";
import Main from "../components/Main";
import Section from "../components/Section";
import Wrapper from "../components/Wrapper";
import Form from "../components/Form";
import Table from "../components/Table";

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
      <Wrapper>
        <Main />
        <Section>
          <Form search={this.state.search} handleSearch={this.handleSearch} />
        </Section>
        <Section>
          <Table
            sortName={this.sortName}
            sortEmail={this.sortEmail}
            sortCity={this.sortCity}
            employees={this.state.employees}
          />
        </Section>
      </Wrapper>
    );
  }
}

export default Home;
