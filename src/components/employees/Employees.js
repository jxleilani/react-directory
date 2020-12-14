import React, { Component } from "react";
import { getUsers } from "../../utils/API";

class Employees extends Component {
  state = {
    search: "",
    users: []
  };

  componentDidMount() {
    getUsers()
      .then((res) => {
        this.setState({ users: res.data.results });
        console.log(this.state.users);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          {this.state.users.map((user) => (
            <div>{user.name.first}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Employees;
