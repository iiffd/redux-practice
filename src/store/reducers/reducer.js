import * as actionTypes from '../actions';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      return {
        persons: [...state.persons, action.newPerson]
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
