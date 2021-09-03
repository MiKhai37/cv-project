import React, { Component } from "react";
import "../styles/CV.css";
import Educational from "./Educational";
import General from "./General";
import Practical from "./Practical";

class CV extends Component {

  render() {
    const { general, experiences, educations } = this.props;
    return (
    <div>
      <section>
        <General general={general}/>
      </section>
      <section>
        <Practical experiences={experiences}/>
      </section>
      <section>
        <Educational educations={educations}/>
      </section>
    </div>
    );
  }
}

export default CV;