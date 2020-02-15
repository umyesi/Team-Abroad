const initState = {
  englishInfo: false,
  frenchInfo: false,
  internInfo: false
};

const programReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_INFO":
      state = undefined;
      return {
        ...state,
        [action.name]: true
      };
    case "HIDE_INFO":
      state = undefined;
      return {
        state
      };

    default:
      return state;
  }
};

export default programReducer;
