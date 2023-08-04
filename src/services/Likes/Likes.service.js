import axios from "axios";
import { API_URL } from "../../constants/config";

export const addLikes = (userId, objectId, typeId) => {
  console.log("api addLikes");
  console.log(userId, objectId, typeId);
  const token = localStorage.getItem("accessToken");
  const postData = {
    user_id: userId,
    object_id: objectId,
    type_id: typeId,
  };
  return axios
    .post(API_URL + `likes/add`, postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const deleteLikes = (userId, objectId, typeId) => {
  console.log("api deleteLikes");
  console.log(userId, objectId, typeId);
  const token = localStorage.getItem("accessToken");
  const postData = {
    user_id: userId,
    object_id: objectId,
    type_id: typeId,
  };
  return axios
    .post(API_URL + `likes/del`, postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
