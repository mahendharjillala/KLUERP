// Components/Home.js
import React from "react";

const Home = () => {
  return (
    <div className="dashboard">
      <div className="card">
        <h1>Welcome to KLU ERP</h1>
        <p>Manage your academic journey with ease</p>
      </div>
      
      <div className="stats-container">
        <div className="stats-card">
          <div className="stats-number">1500+</div>
          <div className="stats-label">Students</div>
        </div>
        
        <div className="stats-card">
          <div className="stats-number">100+</div>
          <div className="stats-label">Faculty</div>
        </div>
        
        <div className="stats-card">
          <div className="stats-number">50+</div>
          <div className="stats-label">Courses</div>
        </div>
      </div>
    </div>
  );
};

export default Home;