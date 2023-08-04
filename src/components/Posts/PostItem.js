import React, { useState } from "react";
import PropTypes from "prop-types";
import PostActions from "./PostActions";
import ButtonDelete from "../public/ButtonDelete";
import ButtonEdit from "../public/ButtonEdit";
import ButtonSave from "../public/ButtonSave";
import ButtonCancel from "../public/ButtonCancel";
import { useDispatch, useSelector } from "react-redux";
import { DeletePosts, EditPosts } from "../../store/actions/PostActions";
import { UPDATE_POST_SUCCESS } from "../../constants/ActionConstant";
import convertTime from "../public/ConvertTime";
import { Form, Image } from "react-bootstrap";
import "../../assets/css/image.css";
import { Link, useNavigate } from "react-router-dom";
import { MEDIA_URL } from "../../constants/config";

function PostItem(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.user.id);
  const [PostIdEdit, setPostIdEdit] = useState(0);
  const [contentEdit, setContentEdit] = useState("");
  const [photoEdit, setPhotoEdit] = useState(null);
  const [imagePreview, setImagePreview] = useState(
    `${MEDIA_URL}${props.item.photo}`
  );
  let sortType = props.sortType || "desc";
  let column = props.column || "updatedAt";
  let search = props.search || "";
  console.log(props.item);
  // xoa 1 note
  const handleClickDelete = (post_id) => {
    console.log("delete click", post_id);
    const result = window.confirm("Are you sure you want to delete this item?");
    if (result) {
      dispatch(DeletePosts(post_id, sortType, column, search, userId));
    }
  };

  // hien thi edit form va button save - cancel
  const handleClickEdit = (post_id, content) => {
    console.log(content);
    let text_field = content.replace("<br/>", "\n");
    setPostIdEdit(post_id);
    setContentEdit(text_field);
    props.item.photo
      ? setImagePreview(`${MEDIA_URL}${props.item.photo}`)
      : setImagePreview(null);
  };

  // luu note vua chinh sua
  const handleClickSave = (postId) => {
    const result = window.confirm("Are you want update this post?");
    if (result) {
      let value = contentEdit.replace(/\n/g, "<br/>");
      dispatch(EditPosts(value, photoEdit, postId, userId))
        .then((res) => {
          console.log(res);
          if (res === UPDATE_POST_SUCCESS) {
            alert("Update this post success!");
            setPostIdEdit(0);
            setContentEdit("");
            setPhotoEdit(null);
          } else {
            alert("Updated this post failed!");
          }
        })
        .catch((error) => {});
    }
  };

  // huy edit form
  const handleClickCancel = (post_id) => {
    setPostIdEdit(0);
    setImagePreview(null);
  };

  const handleChangeText = (e) => {
    setContentEdit(e.target.value);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setPhotoEdit(file);
    } else {
      setImagePreview(null);
    }
  };

  // const handleShowImage = () => {
  //   const pathParts = props.item.photo.split("/");
  //   const lastPart = pathParts[pathParts.length - 1];
  //   navigate(`/image/${lastPart}`, {
  //     state: { itemData: props.item.photo },
  //   });
  // };

  return (
    <div className="border shadow p-2 mb-3 bg-body rounded post-item">
      <div className="d-flex align-items-center">
        <h5>{props.item.creator_name}</h5>

        {props.item.creator_id === props.user && (
          <div className="d-flex ms-3 me-2">
            {PostIdEdit !== props.item.id ? (
              <>
                <div className="me-2">
                  <ButtonEdit
                    handleClickEdit={() =>
                      handleClickEdit(props.item.id, props.item.content)
                    }
                  />
                </div>
                <div className="me-2">
                  <ButtonDelete
                    handleClickDelete={() => handleClickDelete(props.item.id)}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="me-2">
                  <ButtonSave
                    handleClickSave={() => handleClickSave(props.item.id)}
                  />
                </div>
                <div className="me-2">
                  <ButtonCancel
                    handleClickCancel={() => handleClickCancel(props.item.id)}
                  />
                </div>
              </>
            )}
          </div>
        )}
        {props.item.updated_at !== props.item.created_at && (
          <span>| Edited</span>
        )}
      </div>

      <span className="text-muted">{props.item.updated_at}</span>

      {PostIdEdit === props.item.id ? (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={contentEdit}
              onChange={handleChangeText}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload image:</Form.Label>
            <Form.Control
              name="photo"
              type="file"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <Image
                className="mt-2"
                src={imagePreview}
                alt="Preview image"
                width="100%"
              />
            )}
          </Form.Group>
        </Form>
      ) : (
        <>
          {props.item.content.split("<br/>").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          {props.item.photo && (
            <Link className="focus-link" to={`/image/${props.item.photo}`}>
              <Image
                className="image-display image-thumbnail"
                src={`${MEDIA_URL}${props.item.photo}`}
                alt="loading"
              />
            </Link>
          )}
        </>
      )}
      <br className="border mt-3 mb-2" />
      <PostActions
        userId={props.user}
        postId={props.item.id}
        isLiked={props.item.is_liked}
        likesCount={props.item.likes_post_count}
        creatorId={props.item.creator_id}
        commentsCount={props.item.comments_count}
      />
    </div>
  );
}

PostItem.propTypes = {};

export default PostItem;
