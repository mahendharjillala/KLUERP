// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Student from "./Components/Student";
import StudentManagement from "./Components/StudentManagement"; // New component for managing students
import Login from "./Components/Login";
import Register from "./Components/Register";
import Courses from "./Components/Courses";
import Faculty from "./Components/Faculty";
import Timetable from "./Components/Timetable";
import Navbar from "./Components/Navbar";
//import ItemList from './Components/ItemList';
import AddStudent from "./Components/AddStudent";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <ItemList /> Placed outside of Routes for global visibility */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student-management" element={<StudentManagement />} /> {/* New route for student management */}
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </Router>
  );
};

export default App;
