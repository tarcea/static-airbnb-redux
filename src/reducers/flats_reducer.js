const flatsReducer = (state, action) => {
  if (state === undefined) {
    // reducer initialisation
    return [];
  }

  // todo: hamle action
  switch (action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
};

export default flatsReducer;
