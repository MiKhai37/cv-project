import React, { Component } from "react";
import "../styles/Generators.css";
import uniqid from "uniqid";
import CV from "./CV";

class Generators extends Component {
  constructor (props) {
    super(props);

    this.state = {
      general: {
        first: '',
        last: '',
        address: '',
        mail: '',
        phone: '',
      },

      experiences: [],
      experience: {
        title: '',
        company: '',
        id: uniqid(),
      },

      educations: [],
      education: {
        title: '',
        schoolName: '',
        id: uniqid(),
      },
    };
  };

  onSubmitPractical = (event) => {
    event.preventDefault();
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        title: '',
        company: '',
        id: uniqid(),
      },
    });
  };

  onSubmitEducational = (event) => {
    event.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: {
        title: '',
        schoolName: '',
        id: uniqid(),
      },
    });
  };

  handleGeneralChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      general : {
        ...this.state.general,
        [name]: value,
      }      
    });
  };

  handlePracticalChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      experience: {
        ...this.state.experience,
        [name]: value,
      },
    });
  };

  handleEducationalChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      education: {
        ...this.state.education,
        [name]: value,
      },
    });
  };

  render() {
    const { general, experience, experiences, education, educations} = this.state;
    return (
    <div className='main'>
      <div className='forms'>
        <form className='form' id='general-form'>
          <label htmlFor='firstInput'>First Name:</label>
          <input
          name='first'
          onChange={this.handleGeneralChange}
          value={general.first}
          type='text'
          id='firstInput'>
          </input>
          <label htmlFor='lastInput'>Last Name:</label>
          <input
          name='last'
          onChange={this.handleGeneralChange}
          value={general.last}
          type='text'
          id='lastInput'>
          </input>
          <label htmlFor='addressInput'>Address:</label>
          <input
          name='address'
          onChange={this.handleGeneralChange}
          value={general.address}
          type='text'
          id='addressInput'>
          </input>
          <label htmlFor='mailInput'>Mail:</label>
          <input
          name='mail'
          onChange={this.handleGeneralChange}
          value={general.mail}
          type='text'
          id='mailInput'>
          </input>
          <label htmlFor='phoneInput'>Phone:</label>
          <input
          name='phone'
          onChange={this.handleGeneralChange}
          value={general.phone}
          type='text'
          id='phoneInput'>
          </input>
        </form>

        <form onSubmit={this.onSubmitPractical} className='form' id='practical-form'>
          <label htmlFor='titleInput'>Job title:</label>
          <input
          name='title'
          onChange={this.handlePracticalChange}
          value={experience.title}
          type='text'
          id='titleInput'>
          </input>
          <label htmlFor='companyInput'>Company name:</label>
          <input
          name='company'
          onChange={this.handlePracticalChange}
          value={experience.company}
          type='text'
          id='companyInput'>
          </input>
          <input type='submit' value='Add Experience'></input>
        </form>

        <form onSubmit={this.onSubmitEducational} className='form' id='educational-form'>
          <label htmlFor='titleInput'>School Title:</label>
          <input
          name='title'
          onChange={this.handleEducationalChange}
          value={education.title}
          type='text'
          id='titleInput'>
          </input>
          <label htmlFor='schoolInput'>School name:</label>
          <input
          name='schoolName'
          onChange={this.handleEducationalChange}
          value={education.schoolName}
          type='text'
          id='schoolInput'>
          </input>
          <input type='submit' value='Add Education'></input>
        </form>
      </div>
      <div className='sections'>
        <CV general={general} experiences={experiences} educations={educations}/>
      </div>
    </div>
    );
  }
}

export default Generators;