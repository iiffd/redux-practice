import * as actionTypes from '../actions';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: 'Max',
        age: Math.floor( Math.random() * 40 )
      }
      return {
        persons: [...state.persons, newPerson]
      }
    case actionTypes.DELETE_PERSON:
      const copyPersons = [...state.persons];
      const newPersons = copyPersons.filter((person) => person.id !== action.id)
      return {
        persons: newPersons
      }
  }
  return state;
}

export default reducer;
