import React, { useEffect, useState } from "react";
import "../../assets/css/postAction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as faRegularThumbsUp } from "@fortawesome/free-regular-svg-icons";
import {
  faPaperPlane,
  faThumbsUp as faSolidThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import ButtonCancel from "../public/ButtonCancel";
import { AddComments } from "../../store/actions/CommentActions";
import { AddLikes, DeleteLikes } from "../../store/actions/LikeActions";
import {
  ADD_LIKE_SUCCESS,
  DELETE_LIKE_SUCCESS,
} from "../../constants/ActionConstant";
import { useNavigate } from "react-router-dom";

function CommentActions(props) {
  // isLike, likeCount chi thay doi tren giao dien
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(props.isLiked);
  const [likesCount, setLikesCount] = useState(props.likesCount);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setIsLiked(props.isLiked);
    setLikesCount(props.likesCount);
  }, [props.isLiked, props.likesCount]);

  const handleLike = () => {
    if (props.userId === 0) {
      navigate("/login");
    } else {
      console.log("Like comment", props.userId);
      if (isLiked === 0) {
        dispatch(AddLikes(props.userId, props.commentId, 2))
          .then((res) => {
            console.log(res);
            if (res === ADD_LIKE_SUCCESS) {
              // alert("Add like success!");
              setIsLiked(1);
              props.isLiked === 0
                ? setLikesCount(props.likesCount + 1)
                : setLikesCount(props.likesCount);
            } else {
              // alert("Add like failed!");
            }
          })
          .catch((error) => {});
      } else {
        console.log(props.userId);
        dispatch(DeleteLikes(props.userId, props.commentId, 2)).then((res) => {
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
    }
  };

  const handleReply = () => {
    if (props.userId === 0) {
      navigate("/login");
    } else {
      setShowForm(true);
      console.log("Go to comments", props.postId);
    }
  };

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    let content = e.target.content.value;
    if (content) {
      let result = window.confirm("Are you want add new reply?");
      if (result) {
        content = content.replace(/\n/g, "<br/>");
        dispatch(AddComments(content, props.path, props.postId, props.userId));
      }
    } else {
      alert("You must enter content!");
    }
    setShowForm(false);
  };

  const handleClickCancel = (e) => {
    setShowForm(false);
  };

  return (
    <>
      <div className="d-flex">
        <div className="">
          <button
            className={`btn btn-outline-dark w-100 ${
              props.userId === props.creatorId ? "liked" : ""
            }`}
            onClick={handleLike}
          >
            {isLiked === 0 ? (
              <FontAwesomeIcon icon={faRegularThumbsUp} />
            ) : (
              <FontAwesomeIcon icon={faSolidThumbsUp} />
            )}
            <span className="ms-1">{likesCount}</span>
          </button>
        </div>
        <div className="px-2">
          {!showForm && (
            <button
              className="btn btn-outline-dark w-100"
              onClick={handleReply}
            >
              Reply
            </button>
          )}
        </div>
      </div>
      {showForm && (
        <Form
          className="border shadow p-2 bg-body rounded mt-2"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              placeholder="Reply"
            />
          </Form.Group>
          <Button className="me-2" type="submit" variant="success">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
          <ButtonCancel handleClickCancel={() => handleClickCancel()} />
          {/* <Button variant="primary" onClick={handleHiddenForm}>
            Hidden
          </Button> */}
        </Form>
      )}
    </>
  );
}

export default CommentActions;
