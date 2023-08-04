import { combineReducers } from "redux";
import PostsReducer from "./PostReducers";
import AuthReducer from "./AuthReducers";
import CommentReducer from "./CommentReducers";
console.log("reducer public");

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
  comments: CommentReducer,
});

export default rootReducer;
