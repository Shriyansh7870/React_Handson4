import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Store from "./Store";
import Home from "./Home";
import Contact from "./Contact";
import Students from "./Students";
import Edit from "./Edit";
import Addstudent from "./AddStudent";
const Display = () => {
  const [StdData, setData] = useState([
    {
      Name: "John",
      Age: 22,
      Course: "Mern",
      Batch: "October",
      Change: "Edit",
      id: 0,
    },
    {
      Name: "Nancy",
      Age: 24,
      Course: "Mern",
      Batch: "February",
      Change: "Edit",
      id: 1,
    },
    {
      Name: "Priyanka",
      Age: 22,
      Course: "Mern",
      Batch: "March",
      Change: "Edit",
      id: 2,
    },
    {
      Name: "Shriyansh",
      Age: 22,
      Course: "Mern",
      Batch: "Sepetember",
      Change: "Edit",
      id: 3,
    },
    {
      Name: "Ranu",
      Age: 22,
      Course: "Mern",
      Batch: "April",
      Change: "Edit",
      id: 4,
    },
    {
      Name: "Priya",
      Age: 22,
      Course: "Mern",
      Batch: "March",
      Change: "Edit",
      id: 5,
    },
    {
      Name: "Raushan",
      Age: 22,
      Course: "Mern",
      Batch: "March",
      Change: "Edit",
      id: 6,
    },
    {
      Name: "Insha",
      Age: 22,
      Course: "Mern",
      Batch: "March",
      Change: "Edit",
      id: 7,
    },
  ]);
  return (
    <>
      <BrowserRouter>
        <div className="navbar">
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/Students" className="link">
            Students
          </NavLink>
          <NavLink to="/Contact" className="link">
            Contact
          </NavLink>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Students"
            element={
              <Store.Provider value={[StdData, setData]}>
                <Students />
              </Store.Provider>
            }
          ></Route>

          <Route path="/Contact" element={<Contact />}></Route>

          <Route
            path="/Edit"
            element={
              <Store.Provider value={[StdData]}>
                <Edit />
              </Store.Provider>
            }
          ></Route>

          <Route
            path="/Addstudent"
            element={
              <Store.Provider value={[StdData]}>
                <Addstudent />
              </Store.Provider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Display;
