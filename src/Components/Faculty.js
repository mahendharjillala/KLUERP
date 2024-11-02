import React from "react";

function Faculty() {
  // Sample Data (in a real application, fetch from an API)
  const facultyData = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      department: "Computer Science",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      department: "Mathematics",
    },
  ];

  const courseData = [
    { id: 101, name: "Algorithms", department: "Computer Science" },
    { id: 102, name: "Calculus", department: "Mathematics" },
    { id: 103, name: "Data Structures", department: "Computer Science" },
  ];

  const facultyCourseMapping = [
    { facultyId: 1, courseId: 101 },
    { facultyId: 1, courseId: 103 },
    { facultyId: 2, courseId: 102 },
  ];

  // Helper function to get courses by faculty ID
  const getCoursesByFaculty = (facultyId) => {
    return facultyCourseMapping
      .filter((mapping) => mapping.facultyId === facultyId)
      .map((mapping) =>
        courseData.find((course) => course.id === mapping.courseId)
      );
  };

  return (
    <div>
      <h2 align="center">Faculty List</h2>
      <table border="1" cellPadding="8" cellSpacing="0" align="center">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Courses</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.firstName}</td>
              <td>{faculty.lastName}</td>
              <td>{faculty.email}</td>
              <td>{faculty.department}</td>
              <td>
                <ul style={{ paddingLeft: "20px", margin: "0" }}>
                  {getCoursesByFaculty(faculty.id).map((course) => (
                    <li key={course.id}>
                      {course.name} ({course.department})
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Faculty;
