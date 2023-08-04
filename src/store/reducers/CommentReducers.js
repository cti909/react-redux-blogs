import {
  ADD_COMMENT,
  DELETE_COMMENT,
  FILTER_ALL_COMMENT,
  GET_ALL_COMMENT,
  UPDATE_COMMENT,
} from "../../constants/ActionConstant";

const initState = {
  data: [], // du lieu POST
};

console.log("reducer POSTs");

// tree state/POSTs
const CommentReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_COMMENT:
      console.log("reducer GET_ALL_COMMENT");
      return {
        ...state,
        data: action.payload.data,
      };
    // case FILTER_ALL_COMMENT:
    //   console.log("reducer FILTER_ALL_POST");
    //   return {
    //     ...state,
    //     data: action.payload.data,
    //     pagination: action.payload.meta,
    //   };
    case ADD_COMMENT:
      console.log("reducer ADD_COMMENT");
      return {
        ...state,
        data: action.payload.data,
      };
    case UPDATE_COMMENT:
      console.log("reducer UPDATE_COMMENT");
      return {
        ...state,
        data: action.payload.data,
      };
    case DELETE_COMMENT:
      console.log("reducer DELETE_COMMENT");
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default CommentReducer;
