import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
  state = {
    name: '',
    age: ''
  }

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  ageChangeHandler = (event) => {
    this.setState({
      age: event.target.value
    });
  }

  render() {
    return (
      <div className="AddPerson">
        <input placeholder="Name" onChange={this.nameChangeHandler} />
        <input placeholder="Age" onChange={this.ageChangeHandler} />
        <button onClick={() => this.props.addPerson(this.state.name, this.state.age)}>Add Person</button>
      </div>
    );
  }
}

export default AddPerson;
