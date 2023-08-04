import {} from "../../services/Posts/Posts.service";

import { addLikes, deleteLikes } from "../../services/Likes/Likes.service";
import {
  ADD_LIKE,
  ADD_LIKE_FAILED,
  ADD_LIKE_SUCCESS,
  DELETE_LIKE_FAILED,
  DELETE_LIKE_SUCCESS,
} from "../../constants/ActionConstant";

export const AddLikes = (userId, objectId, typeId) => {
  return async (dispatch) => {
    try {
      const response = await addLikes(userId, objectId, typeId);
      return ADD_LIKE_SUCCESS;
    } catch (err) {
      console.log(err);
      return ADD_LIKE_FAILED;
    }
  };
};

export const DeleteLikes = (userId, objectId, typeId) => {
  return async (dispatch) => {
    try {
      const response = await deleteLikes(userId, objectId, typeId);
      return DELETE_LIKE_SUCCESS;
    } catch (err) {
      console.log(err);
      return DELETE_LIKE_FAILED;
    }
  };
};
