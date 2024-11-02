// Components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/student" className={({ isActive }) => isActive ? "active" : ""}>
            Student
          </NavLink>
        </li>
        <li>
          <NavLink to="/faculty" className={({ isActive }) => isActive ? "active" : ""}>
            Faculty
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className={({ isActive }) => isActive ? "active" : ""}>
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/timetable" className={({ isActive }) => isActive ? "active" : ""}>
            Timetable
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;