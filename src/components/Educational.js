import React from "react";
import "../styles/Educational.css";

const Educational = (props) => {
  const {educations} = props
  return (
    <div>
      Educational
      {educations.map((education) => {
        return (
          <div key={education.id}>
            <p>{education.title}</p>
            <p>{education.schoolName}</p>
          </div>
        );
      })}
    </div>
    );
  
}

export default Educational;