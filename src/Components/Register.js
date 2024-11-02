// Components/Register.js
import React from "react";

function Register() {
  return (
    <div className="card">
      <h2>Course Registration</h2>
      <form className="registration-form">
        <div className="form-group">
          <label htmlFor="course">Select Course:</label>
          <select id="course" name="course" className="form-control">
            <option value="">Select a course...</option>
            <option value="CS101">Algorithms (CS101)</option>
            <option value="MATH201">Calculus (MATH201)</option>
            <option value="CS102">Data Structures (CS102)</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="semester">Semester:</label>
          <select id="semester" name="semester" className="form-control">
            <option value="">Select semester...</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Register Course
        </button>
      </form>
    </div>
  );
}

export default Register;