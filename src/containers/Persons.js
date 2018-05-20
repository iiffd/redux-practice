import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson addPerson={this.props.addPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.deletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addPerson: (name, age) => dispatch({ type: actionTypes.ADD_PERSON, name: name, age: age }),
        deletePerson: (id) => dispatch({ type: actionTypes.DELETE_PERSON, id: id })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Persons);