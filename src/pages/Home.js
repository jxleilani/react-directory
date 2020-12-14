import React, { Component } from "react";
import { getUsers } from "../utils/API";

class Home extends Component {
  state = {
    search: "",
    results: []
  }

  componentDidMount(){
    getUsers()
      .then(res => this.setState({ results: res.data.results[0].gender }))
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div class="container">
        <h1>Home Page</h1>
        <p>
          {this.state.results}
        </p>
      </div>
    );
  }
  
}

export default Home;
