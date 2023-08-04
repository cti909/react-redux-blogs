import axios from "axios";
import { API_URL } from "../../constants/config";

//user1-admin
export const getAllComments = (postId, userId) => {
  console.log("api getAllComments");
  // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2ODk4MTc1NzcsImV4cCI6MTY4OTgyMTE3NywibmJmIjoxNjg5ODE3NTc3LCJqdGkiOiJnT3E5a1A1VmozdzJObkdYIiwic3ViIjoiMTYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.NXsJAjex8U5j0cLBO-y_fIJ8Yg-E7SVUGZz3yl1J8TQ"
  return axios
    .get(
      API_URL +
        `comments?column=path&sortType=asc&where=postId[eq]${postId}&userId=${userId}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

// export const filterAllComments = (page, column, sortType, search) => {
//   console.log("api filterAllPosts");
//   return axios
//     .get(
//       `http://127.0.0.1:8000/api/posts?page=${page}&column=${column}&sortType=${sortType}&where=content[like]${search},categoryId[eq]${categoryId}`
//     )
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       return error;
//     });
// };

export const addComments = (content, path, postId, userId) => {
  console.log("api addPosts");

  const token = localStorage.getItem("accessToken");
  let formData = new FormData();
  formData.append("content", content);
  formData.append("path", path);
  formData.append("post_id", postId);
  formData.append("user_id", userId);
  return axios
    .post(
      API_URL +
        `comments?sortType=asc&column=path&where=postId[eq]${postId}&userId=${userId}`,
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

export const editComments = (content, commentId, postId, userId) => {
  console.log("api editPosts");
  const token = localStorage.getItem("accessToken");
  const postData = {
    content: content,
  };
  return axios
    .put(
      API_URL +
        `comments/${commentId}?sortType=asc&column=path&where=postId[eq]${postId}&userId=${userId}`,
      postData,
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

export const deleteComments = (path, commentId, postId, userId) => {
  console.log("api deletePosts");
  const token = localStorage.getItem("accessToken");
  return axios
    .delete(
      API_URL +
        `comments/${commentId}?path=${path}&postId=${postId}sortType=asc&column=path&where=postId[eq]${postId}&userId=${userId}`,
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
