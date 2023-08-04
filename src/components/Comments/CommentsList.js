import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { GetAllComments } from "../../store/actions/CommentActions";
import CommentItem from "./CommentItem";
import CommentAddForm from "./CommentAddForm";

function CommentsList(props) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.data);
  const userId = useSelector((state) => state.auth.user.id) || 0;

  // let commentList = [];
  // if (comments) {
  //   for (let i = 0; i < comments.length; i++) {
  //     commentList.push({ id: comments[i].id, path: comments[i].path });
  //   }
  //   console.log(commentList);
  // }

  useEffect(() => {
    dispatch(GetAllComments(props.postId, userId));
  }, [userId]);

  return (
    <div className="border shadow p-2 mb-3 bg-body rounded">
      <div className="ig">
        {comments.length !== 0 ? (
          comments.map((item) => (
            <div
              key={item.id}
              style={{ marginLeft: 50 * (item.path_length - 1) + "px" }}
            >
              <CommentItem item={item} user={userId} postId={props.postId} />
            </div>
          ))
        ) : (
          <span className="d-flex justify-content-center">No comment</span>
        )}
        {userId !== 0 && <CommentAddForm postId={props.postId} />}
      </div>
    </div>
  );
}

export default CommentsList;
