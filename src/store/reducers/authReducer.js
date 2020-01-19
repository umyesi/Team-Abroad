const initState = {
  authError: null,
  currIndex: 0,
  showModal: false,
  resetSent: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };

    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };

    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return {
        ...state,
        showModal: false
      };

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };

    case "RESET_INSTRUCTIONS_SENT":
      console.log("reset instructions sent");
      return {
        ...state,
        authError: null,
        resetSent: "success"
      };

      case "RESET_INSTRUCTIONS":
        console.log("reset instructions");
        return {
          ...state,
          authError: null,
          resetSent: null
        };

    case "WRONG_EMAIL":
      console.log("no account found with this email");
      return {
        ...state,
        authError: action.err.message
      };

    // case "RESET_AUTHERROR":
    //   console.log("autherror reset");
    //   return {
    //     ...state,
    //     authError: null
    //   };

    case "OPEN_MODAL":
      console.log("modal opened");
      return {
        ...state,
        showModal: true,
        currIndex: action.currIndex,
        authError: null,
        //resetSent: null
      };

    case "HIDE_MODAL":
      console.log("modal closed");
      return {
        ...state,
        showModal: false,
        authError: null,
        resetSent: null
      };

    case "SWITCH_MODAL":
      console.log("modal switched");
      return {
        ...state,
        showModal: true,
        authError: null,
        currIndex: action.currIndex
      };

    default:
      return state;
  }
};

export default authReducer;
