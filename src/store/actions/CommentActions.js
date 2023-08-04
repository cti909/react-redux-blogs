import {} from "../../services/Posts/Posts.service";
import {
  ADD_COMMENT,
  ADD_COMMENT_FAILED,
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT,
  DELETE_COMMENT_FAILED,
  DELETE_COMMENT_SUCCESS,
  GET_ALL_COMMENT,
  UPDATE_COMMENT,
  UPDATE_COMMENT_FAILED,
  UPDATE_COMMENT_SUCCESS,
} from "../../constants/ActionConstant";
import {
  getAllComments,
  addComments,
  editComments,
  deleteComments,
} from "../../services/Comments/Comments.service";

/**
 * Lay POSTs trong 1 trang
 */
export const GetAllComments = (postId, userId) => {
  return async (dispatch) => {
    try {
      const response = await getAllComments(postId, userId);
      dispatch({
        type: GET_ALL_COMMENT,
        payload: { data: response.data },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: GET_ALL_COMMENT,
        payload: [],
      });
    }
  };
};

// export const FilterAllPosts = (categoryId, page, column, sortType, search) => {
//   return async (dispatch) => {
//     try {
//       const response = await filterAllPosts(
//         categoryId,
//         page,
//         column,
//         sortType,
//         search
//       );
//       dispatch({
//         type: GET_ALL_POST,
//         payload: { data: response.data, meta: response.meta },
//       });
//     } catch (err) {
//       console.log(err);
//       dispatch({
//         type: GET_ALL_POST,
//         payload: [],
//       });
//     }
//   };
// };

// action dispatch di dau ???
export const AddComments = (content, path, postId, userId) => {
  return async (dispatch) => {
    try {
      const response = await addComments(content, path, postId, userId);
      dispatch({
        type: ADD_COMMENT,
        payload: { data: response.data, meta: response.meta },
      });
      return ADD_COMMENT_SUCCESS;
    } catch (err) {
      console.log(err);
      dispatch({
        type: ADD_COMMENT,
        payload: [],
      });
      return ADD_COMMENT_FAILED;
    }
  };
};

export const EditComments = (content, commentId, postId, userId) => {
  return async (dispatch) => {
    try {
      const response = await editComments(content, commentId, postId, userId);
      dispatch({
        type: UPDATE_COMMENT,
        payload: { data: response.data, meta: response.meta },
      });
      return UPDATE_COMMENT_SUCCESS;
    } catch (err) {
      console.log(err);
      dispatch({
        type: UPDATE_COMMENT,
        payload: [],
      });
      return UPDATE_COMMENT_FAILED;
    }
  };
};

export const DeleteComments = (path, commentId, postId, userId) => {
  return async (dispatch) => {
    try {
      const response = await deleteComments(path, commentId, postId, userId);
      dispatch({
        type: DELETE_COMMENT,
        payload: { data: response.data, meta: response.meta },
      });
      return DELETE_COMMENT_SUCCESS;
    } catch (err) {
      console.log(err);
      dispatch({
        type: DELETE_COMMENT,
        payload: [],
      });
      return DELETE_COMMENT_FAILED;
    }
  };
};
