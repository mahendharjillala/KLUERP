import React from "react";

function Courses() {
  // Sample Data (in a real application, fetch from an API)
  const courses = [
    {
      id: 101,
      name: "Algorithms",
      code: "CS101",
      department: "Computer Science",
      schedule: "Mon-Wed 10:00-11:30 AM",
    },
    {
      id: 102,
      name: "Calculus",
      code: "MATH201",
      department: "Mathematics",
      schedule: "Tue-Thu 1:00-2:30 PM",
    },
    {
      id: 103,
      name: "Data Structures",
      code: "CS102",
      department: "Computer Science",
      schedule: "Mon-Wed 12:00-1:30 PM",
    },
  ];

  const faculty = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      department: "Computer Science",
    },
    { id: 2, firstName: "Jane", lastName: "Smith", department: "Mathematics" },
  ];

  const courseFacultyMapping = [
    { courseId: 101, facultyId: 1 },
    { courseId: 102, facultyId: 2 },
    { courseId: 103, facultyId: 1 },
  ];

  // Helper function to get faculty for each course
  const getFacultyByCourse = (courseId) => {
    const mapping = courseFacultyMapping.find(
      (entry) => entry.courseId === courseId
    );
    return faculty.find((prof) => prof.id === mapping?.facultyId);
  };

  return (
    <div>
      <h2 align="center">Course List</h2>
      <table border="1" cellPadding="8" cellSpacing="0" align="center">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Department</th>

            <th>Faculty</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            const facultyMember = getFacultyByCourse(course.id);
            return (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.code}</td>
                <td>{course.department}</td>

                <td>
                  {facultyMember
                    ? `${facultyMember.firstName} ${facultyMember.lastName}`
                    : "TBD"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;
