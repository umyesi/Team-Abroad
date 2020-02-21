const initState = {
  englishInfo: false,
  frenchInfo: false,
  internInfo: false
};

const programReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_PROGRAM_INFO":
      state = undefined;
      return {
        ...state,
        [action.name]: true
      };
    case "HIDE_PROGRAM_INFO":
      state = undefined;
      return {
        state
      };

    default:
      return state;
  }
};

export default programReducer;
