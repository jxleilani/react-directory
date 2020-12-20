import React from "react";

function Form(props) {
  return (
    <form className="search-form">
      <input
        value={props.search}
        onChange={props.handleSearch}
        type="text"
        placeholder="Enter Search Term"
      ></input>
      <button className="btn btn-secondary">Search</button>
    </form>
  );
}

export default Form;
