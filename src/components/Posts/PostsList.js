import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostAddForm from "./PostAddForm";
import {} from "../../assets/css/text.css";
import PostItem from "./PostItem";

function PostsList(props) {
  console.log("render PostsList")
  const userId = useSelector((state) => state.auth.user.id) ?? 0;
  return (
    <div className="mt-4">
      {userId !== 0 && <PostAddForm />}
      {props.postsData ? (
        props.postsData.map((item) => (
          <PostItem
            key={item.id}
            item={item}
            user={userId}
            column={props.column}
            sortType={props.sortType}
            search={props.search}
          />
        ))
      ) : (
        <span className="d-flex justify-content-center text-center">
          No entry
        </span>
      )}
    </div>
  );
}

export default PostsList;
