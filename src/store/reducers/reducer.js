const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        persons: [...state.persons, action.newPerson]
      }
  }
  return state;
}

export default reducer;
