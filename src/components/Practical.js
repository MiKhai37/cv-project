import React from "react";
import "../styles/Practical.css";

const Practical = (props) => {
  const { experiences } = props;
  return (
    <div>
      Practical
      {experiences.map((experience) => {
        return (
          <div key={experience.id}>
            <p>{experience.title}</p>
            <p>{experience.company}</p>
          </div>
        );
      })}
    </div>
    );
  
}

export default Practical;