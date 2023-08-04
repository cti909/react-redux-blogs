import axios from "axios";
import { API_URL } from "../../constants/config";

export const getAllCategories = () => {
  console.log("api getAllCategories");
  // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2ODk4MTc1NzcsImV4cCI6MTY4OTgyMTE3NywibmJmIjoxNjg5ODE3NTc3LCJqdGkiOiJnT3E5a1A1VmozdzJObkdYIiwic3ViIjoiMTYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.NXsJAjex8U5j0cLBO-y_fIJ8Yg-E7SVUGZz3yl1J8TQ"
  return axios
    .get(API_URL + "categories")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

//user1-admin
export const getAllPosts = (userId) => {
  console.log("api getAllPosts");
  // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2ODk4MTc1NzcsImV4cCI6MTY4OTgyMTE3NywibmJmIjoxNjg5ODE3NTc3LCJqdGkiOiJnT3E5a1A1VmozdzJObkdYIiwic3ViIjoiMTYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.NXsJAjex8U5j0cLBO-y_fIJ8Yg-E7SVUGZz3yl1J8TQ"
  return axios
    .get(
      API_URL +
        `posts?column=updatedAt&sortType=desc&where=categoryId[eq]1&userId=${userId}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const filterAllPosts = (
  categoryId,
  page,
  column,
  sortType,
  search,
  userId
) => {
  console.log("api filterAllPosts");
  return axios
    .get(
      API_URL +
        `posts?page=${page}&column=${column}&sortType=${sortType}&where=content[like]${search},categoryId[eq]${categoryId}&userId=${userId}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getDetailPost = (post_id, userId) => {
  console.log("api getDetailPost");
  // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2ODk4MTc1NzcsImV4cCI6MTY4OTgyMTE3NywibmJmIjoxNjg5ODE3NTc3LCJqdGkiOiJnT3E5a1A1VmozdzJObkdYIiwic3ViIjoiMTYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.NXsJAjex8U5j0cLBO-y_fIJ8Yg-E7SVUGZz3yl1J8TQ"
  return axios
    .get(API_URL + `posts/${post_id}?userId=${userId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const addPosts = (content, photo, category_id, userId) => {
  console.log("api addPosts");
  const token = localStorage.getItem("accessToken");
  let formData = new FormData();
  formData.append("content", content);
  formData.append("photo", photo);
  formData.append("category_id", category_id);
  formData.append("creator_id", userId);
  console.log(content, photo, formData);
  return axios
    .post(
      API_URL +
        `posts?sortType=desc&column=updatedAt&where=categoryId[eq]${category_id}&userId=${userId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const editPosts = (content, photo, postId, userId) => {
  console.log("api editPosts");
  const token = localStorage.getItem("accessToken");
  const formData = new FormData();
  formData.append("content", content);
  formData.append("photo", photo);
  formData.append("_method", "PUT");
  console.log(content, photo, formData);
  return axios
    .post(
      API_URL +
        `posts/${postId}?sortType=desc&column=updatedAt&where=categoryId[eq]1&userId=${userId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const deletePosts = (post_id, sortType, column, search, userId) => {
  console.log("api deletePosts");
  const token = localStorage.getItem("accessToken");
  return axios
    .delete(
      API_URL +
        `posts/${post_id}?sortType=${sortType}&column=${column}&where=content[like]${search}&userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
