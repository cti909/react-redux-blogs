import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  SET_USER,
} from "../../constants/ActionConstant";

const initState = {
  user: {},
  isLoggedIn: false,
  isRegistered: false,
  error: null,
};

console.log("reducer auth");

// tree state/auth
const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("reducer LOGIN_SUCCESS");
      return { ...state, isLoggedIn: true, user: action.payload };
    case LOGIN_FAILED:
      console.log("reducer LOGIN_FAILED");
      return { ...state, isLoggedIn: false, error: action.payload };
    case LOGOUT:
      return { ...state, isLoggedIn: false, user: {} };
    case REGISTER_SUCCESS:
      console.log("success");
      return { ...state, isRegistered: true };
    case REGISTER_FAILED:
      console.log("fail");
      return { ...state, isRegistered: false, error: action.payload };
    case SET_USER:
      return { ...state, isLoggedIn: true, user: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
