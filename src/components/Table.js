import React from "react";
import Employee from "./employees/Employee";

function Table({ sortName, sortEmail, sortCity, employees }) {
  return (
    <table className="table table-light table-striped">
            <thead className="text-dark">
              <tr>
                <th scope="col text-center"></th>
                <th
                  scope="col text-center"
                  className="name"
                  onClick={sortName}
                >
                  Name
                </th>
                <th
                  scope="col text-center"
                  className="email"
                  onClick={sortEmail}
                >
                  Email
                </th>
                <th
                  scope="col text-center"
                  className="citystate"
                  onClick={sortCity}
                >
                  City, State
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((user) => (
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
  )
}

export default Table
