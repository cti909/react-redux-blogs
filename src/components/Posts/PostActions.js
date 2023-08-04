import React, { useEffect, useState } from "react";
import "../../assets/css/postAction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as faRegularThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as faSolidThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddLikes, DeleteLikes } from "../../store/actions/LikeActions";
import {
  ADD_LIKE_SUCCESS,
  DELETE_LIKE_SUCCESS,
} from "../../constants/ActionConstant";

function PostActions(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(props.isLiked);
  const [likesCount, setLikesCount] = useState(props.likesCount);

  useEffect(() => {
    setIsLiked(props.isLiked);
    setLikesCount(props.likesCount);
  }, [props.isLiked, props.likesCount]);

  const handleLike = () => {
    if (props.userId === 0) {
      navigate("/login");
    } else {
      if (isLiked === 0) {
        dispatch(AddLikes(props.userId, props.postId, 1)).then((res) => {
          if (res === ADD_LIKE_SUCCESS) {
            // alert("Add like success!");
            setIsLiked(1);
            props.isLiked === 0
              ? setLikesCount(props.likesCount + 1)
              : setLikesCount(props.likesCount);
          } else {
            // alert("Add like failed!");
          }
        });
      } else {
        console.log(props.userId);
        dispatch(DeleteLikes(props.userId, props.postId, 1)).then((res) => {
          console.log(res);
          if (res === DELETE_LIKE_SUCCESS) {
            // alert("Delete like success!");
            setIsLiked(0);
            props.isLiked === 0
              ? setLikesCount(props.likesCount)
              : setLikesCount(props.likesCount - 1);
          } else {
            // alert("Delete like failed!");
          }
        });
      }
      console.log("Like post", props.postId);
    }
  };

  const handleComment = () => {
    // Xử lý sự kiện bấm vào nút Comments ở đây
    console.log("Go to comments", props.postId);
    navigate(`/posts/${props.postId}`);
  };

  const handleShare = () => {
    // Xử lý sự kiện bấm vào nút Share ở đây
    console.log("Share post", props.postId);
    if (props.userId === 0) {
      navigate("/login");
    } else {
      // xu ly
    }
  };

  return (
    <div className="d-flex row">
      <div className="col-4">
        <button
          className={`btn btn-outline-dark w-100 ${
            props.userId === props.creatorId ? "liked" : ""
          }`}
          onClick={() => handleLike()}
        >
          {isLiked === 0 ? (
            <FontAwesomeIcon icon={faRegularThumbsUp} />
          ) : (
            <FontAwesomeIcon icon={faSolidThumbsUp} />
          )}
          <span className="ms-1">{likesCount}</span>
        </button>
      </div>
      <div className="col-4">
        <button className="btn btn-outline-dark w-100" onClick={handleComment}>
          <FontAwesomeIcon className="me-1" icon={faComment} />
          {props.commentsCount}
        </button>
      </div>
      <div className="col-4">
        <button className="btn btn-outline-dark w-100" onClick={handleShare}>
          <FontAwesomeIcon className="ms-1" icon={faShare} />
        </button>
      </div>
    </div>
  );
}

export default PostActions;
