import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  SET_USER,
} from "../../constants/ActionConstant";
import { login, register } from "../../services/Auth/Auth.service";

console.log("action auth");

/**
 * Login
 *
 * @param {string} username
 * @param {string} password
 * @returns
 */
export const Login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await login(username, password);
      // Lưu dữ liệu lấy được từ API vào Redux store thông qua dispatch
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
      return LOGIN_SUCCESS;
    } catch (error) {
      console.log("err", error);
      // Xử lý thất bại và xác định nguyên nhân thất bại dựa trên nội dung của phản hồi (error.response.data)
      if (error.response && error.response.data) {
        const { statusCode, message } = error.response.data;
        // Thực hiện xử lý theo nguyên nhân thất bại cụ thể
        console.log("Login failed with status code:", statusCode);
        console.log("Error message:", message);
      } else {
        console.log("Login failed with unknown error:", error.message);
      }
      dispatch({
        type: LOGIN_FAILED,
        payload: error.response.data,
      });
      return LOGIN_FAILED;
    }
  };
};

/**
 * Logout
 *
 * @returns
 */
export const Logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
  return {
    type: LOGOUT,
  };
};

/**
 *
 * @param {*} username
 * @param {*} password
 * @returns
 */
export const Register = (name, email, password, address) => {
  return async (dispatch) => {
    try {
      const response = await register(name, email, password, address);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
      return REGISTER_SUCCESS;
    } catch (error) {
      console.log("err", error);
      if (error.response && error.response.data) {
        const { statusCode, message } = error.response.data;
        console.log("Login failed with status code:", statusCode);
        console.log("Error message:", message);
      } else {
        console.log("Login failed with unknown error:", error.message);
      }
      dispatch({
        type: REGISTER_FAILED,
        payload: error.response.data,
      });
      return REGISTER_FAILED;
    }
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
