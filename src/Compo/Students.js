import React from "react";
import { Link } from "react-router-dom";
const data = [
  { name: "John", Age: 22, Course: "Mern", Batch: "October", Change: "Edit" },
  { name: "Nancy", Age: 24, Course: "Mern", Batch: "February", Change: "Edit" },
  { name: "Priyanka", Age: 22, Course: "Mern", Batch: "March", Change: "Edit" },
  {
    name: "Shriyansh",
    Age: 22,
    Course: "Mern",
    Batch: "Sepetember",
    Change: "Edit",
  },
  { name: "Ranu", Age: 22, Course: "Mern", Batch: "April", Change: "Edit" },
  { name: "Priyanka", Age: 22, Course: "Mern", Batch: "March", Change: "Edit" },
  { name: "Priyanka", Age: 22, Course: "Mern", Batch: "March", Change: "Edit" },
  { name: "Priyanka", Age: 22, Course: "Mern", Batch: "March", Change: "Edit" },
];

export default function Students() {
  return (
    <>
      <p className="Stname">Students Details</p>
      <buton className="btn1">Add New Student</buton>
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
              <td>
                <Link to={"/data/:" + item.name} state={data}>
                  {item.Change}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
