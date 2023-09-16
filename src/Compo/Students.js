import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Store from "./Store";

export default function Students() {
  const [Received] = useContext(Store);
  const Navigate = useNavigate();
  console.log(Received);

  function Navi() {
    Navigate("/AddStudent");
  }

  return (
    <>
      <p className="Stname">Students Details</p>
      <button onClick={Navi} className="btn1">
        Add New Student
      </button>
      <table border={2} className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {Received.map((item, index) => (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
              <td>
                <NavLink to="/Edit" state={{ index }}>
                  Edit
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
