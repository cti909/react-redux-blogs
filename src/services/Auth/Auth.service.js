import axios from "axios";
import { API_URL } from "../../constants/config";

export const login = (email, password) => {
  console.log("api login");
  return axios
    .post(API_URL + "auth/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.meta) {
        localStorage.setItem("accessToken", response.data.meta);
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
      //   console.log(response);
      return response.data;
    })
    .catch((error) => {
      // Trả về lỗi để các thành phần khác có thể xử lý tiếp hoặc hiển thị thông báo lỗi cho người dùng
      return Promise.reject(error);
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const register = (name, email, password, address) => {
  console.log("api register");
  return axios
    .post(API_URL + "auth/register", {
      name,
      email,
      password,
      address,
    })
    .then((response) => {
      //   console.log(response);
      return response.data;
    })
    .catch((error) => {
      // Trả về lỗi để các thành phần khác có thể xử lý tiếp hoặc hiển thị thông báo lỗi cho người dùng
      return Promise.reject(error);
    });
};
