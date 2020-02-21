const initState = {
  messageSent: false,
  sendingError: false
};

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case "MESSAGE_SENT":
      state = undefined;
      return {
        ...state,
        messageSent: true
      };
    case "RESET_FORM":
      state = undefined;
      return {
        state
      };

    case "SENDING_ERROR":
      state = undefined;
      return {
        ...state,
        sendingError: true
      };

    default:
      return state;
  }
};

export default contactReducer;
