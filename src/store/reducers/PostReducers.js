import {
  ADD_POST,
  DELETE_POST,
  FILTER_ALL_POST,
  GET_ALL_CATEGORIES,
  GET_ALL_POST,
  GET_DETAIL_POST,
  UPDATE_POST,
} from "../../constants/ActionConstant";

const initState = {
  data: [], // du lieu POST
  pagination: {}, // phan trang
  categories: [],
};

console.log("reducer POSTs");

// tree state/POSTs
const PostsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      console.log("reducer GET_ALL_CATEGORIES");
      return {
        ...state,
        categories: action.payload.data,
      };
    case GET_ALL_POST:
      console.log("reducer GET_ALL_POST");
      return {
        ...state,
        data: action.payload.data,
        pagination: action.payload.meta,
      };
    case FILTER_ALL_POST:
      console.log("reducer FILTER_ALL_POST");
      return {
        ...state,
        data: action.payload.data,
        pagination: action.payload.meta,
      };
    case GET_DETAIL_POST:
      console.log("reducer GET_DETAIL_POST");
      return {
        ...state,
        data: action.payload.data,
        pagination: action.payload.meta,
      };
    case ADD_POST:
      console.log("reducer ADD_POST");
      return {
        ...state,
        data: action.payload.data,
        pagination: action.payload.meta,
      };
    case UPDATE_POST:
      console.log("reducer UPDATE_POST");
      return {
        ...state,
        data: action.payload.data,
        pagination: action.payload.meta,
      };
    case DELETE_POST:
      console.log("reducer DELETE_POST");
      return {
        ...state,
        data: action.payload.data,
        pagination: action.payload.meta,
      };

    default:
      return state;
  }
};

export default PostsReducer;
