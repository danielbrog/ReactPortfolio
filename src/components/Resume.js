import React from "react";
import Header from "../components/Header";

const Resume = () => (
  <div>
    <Header />
    <div className="resume">
      <embed src="./documents/resume.pdf" width="800px" height="1100px" />
    </div>
  </div>
);

export default Resume;
