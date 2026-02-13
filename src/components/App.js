import React from "react";
import "../styles/App.css";

const App = () => {

  // Dream projects data
  const projects = [
    {
      name: "AI Resume Builder",
      description: "Builds ATS-friendly resumes using AI."
    },
    {
      name: "Smart Job Tracker",
      description: "Tracks applied jobs and interview status."
    },
    {
      name: "Portfolio Generator",
      description: "Creates developer portfolios instantly."
    }
  ];

  return (
    <div id="main">

      {projects.map((project, index) => (
        <div key={index}>

          <h1 data-ns-test="project-name">
            {project.name}
          </h1>

          <h6 data-ns-test="project-description">
            {project.description}
          </h6>

        </div>
      ))}

    </div>
  );
};

export default App;
