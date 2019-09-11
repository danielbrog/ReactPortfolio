import React from "react";
import Header from "../components/Header";

const Resume = () => (
  <div>
    <Header />
    <div className="resume">
      <a href="path_to_file" download="./documents/resume.pdf">
        <button className="resume__button">Download Resume</button>
      </a>
      <embed src="./documents/resume.pdf" width="800px" height="1100px" />
    </div>
  </div>
);

export default Resume;
