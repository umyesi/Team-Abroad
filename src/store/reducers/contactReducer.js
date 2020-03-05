const initState = {
  messageSent: false,
  sendingError: false,
  quoteSent: false,
  quoteSendingError: false
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

      case "QUOTE_SENT":
      state = undefined;
      return {
        ...state,
        quoteSent: true
      };
    case "RESET_QUOTE":
      state = undefined;
      return {
        state
      };
    case "QUOTE_SENDING_ERROR":
      state = undefined;
      return {
        ...state,
        quoteSendingError: true
      };

    default:
      return state;
  }
};

export default contactReducer;
