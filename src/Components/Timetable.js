// Components/Timetable.js
import React from "react";

const Timetable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const times = [
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00",
    "2:00 - 3:00",
    "3:00 - 4:00",
  ];

  // Mock data for classes (can be modified as needed)
  const classes = {
    Monday: ["Math", "Science", "English", "History", "Physical Ed", "Art"],
    Tuesday: [
      "English",
      "Math",
      "Science",
      "Art",
      "Computer Science",
      "History",
    ],
    Wednesday: [
      "Physical Ed",
      "History",
      "Math",
      "Science",
      "English",
      "Computer Science",
    ],
    Thursday: ["Science", "English", "History", "Math", "Physical Ed", "Art"],
    Friday: [
      "Computer Science",
      "Math",
      "Science",
      "History",
      "English",
      "Physical Ed",
    ],
  };

  return (
    <div className="timetable-container">
      <h1>Weekly Timetable</h1>
      <table className="timetable">
        <thead>
          <tr>
            <th>Day/Time</th>
            {times.map((time, index) => (
              <th key={index}>{time}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td>{day}</td>
              {times.map((time, index) => (
                <td key={index}>{classes[day][index]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
