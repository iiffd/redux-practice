const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        persons: [...state.persons, action.newPerson]
      }
    case 'DELETE_PERSON':
      const copyPersons = [...state.persons];
      const newPersons = copyPersons.filter((person) => person.id !== action.id)
      return {
        persons: newPersons
      }
  }
  return state;
}

export default reducer;
