import React from "react";

const Employee = (props) => {
  return (
    <div className="row">
      <div className="col-sm-4">
        {props.first} {props.last}
      </div>
      <div className="col-sm-4">{props.email}</div>
      <div className="col-sm-4">{props.city}, {props.state}</div>
    </div>
  );
};

export default Employee;
