import React from "react";
import './employee.css';

const Employee = (props) => {
  return (
    <div className="row employee text-center">
      <div className="col-sm-2">
        <img alt="user" src={props.img}></img>
      </div>
      <div className="col-sm-3">
        {props.first} {props.last}
      </div>
      <div className="col-sm-3">{props.email}</div>
      <div className="col-sm-3">
        {props.city}, {props.state}
      </div>
    </div>
  );
};

export default Employee;
