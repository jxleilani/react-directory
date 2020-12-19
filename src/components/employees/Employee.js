import React from "react";
import './employee.css';

const Employee = (props) => {
  return (
    <tr>
      <td>
        <img alt="user" src={props.img}></img>
      </td>
      <td>
        {props.first} {props.last}
      </td>
      <td>{props.email}</td>
      <td>
        {props.city}, {props.state}
      </td>
    </tr>
  );
};

export default Employee;
