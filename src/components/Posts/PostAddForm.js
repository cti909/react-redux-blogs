import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddPosts } from "../../store/actions/PostActions";
import "../../assets/css/text.css";
import { useNavigate } from "react-router-dom";
import ButtonAdd from "../public/ButtonAdd";
import ButtonSend from "../public/ButtonSend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ButtonCancel from "../public/ButtonCancel";
PostAddForm.propTypes = {};

function PostAddForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.user.id);
  const categories = useSelector((state) => state.posts.categories);
  const [showForm, setShowForm] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  console.log("add form");

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  //   console.log(e.target.value);
  // };
  // const handleTextChange = (e) => {
  //   setText(e.target.value);
  // };
  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    let category_id = e.target.category_id.value;
    let content = e.target.content.value;
    let photo = e.target.photo.files[0];
    if ((content && content !== "\n") || photo) {
      console.log(photo);
      let result = window.confirm("Are you want add new post?");
      if (result) {
        content = content.replace(/\n/g, "<br/>");
        dispatch(AddPosts(content, photo, category_id, userId));
        setShowForm(false);
        navigate(
          `/posts?categoryId=${category_id}&page=1&column=updatedAt&sortType=desc&search=`
        );
      }
    } else {
      alert("You must enter content or upload image!");
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };
  const handleShowForm = (e) => {
    setShowForm(true);
  };
  const handleHiddenForm = (e) => {
    setImagePreview(null);
    setShowForm(false);
  };
  return (
    <div className="mb-3">
      {showForm ? (
        <Form
          className="border shadow p-2 bg-body rounded"
          onSubmit={handleSubmit}
        >
          <Form.Group className="d-flex align-items-center">
            <Form.Label className="me-2 text-margin">Category:</Form.Label>
            <div className="me-2">
              <Form.Select className="d-flex" name="category_id">
                {categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Content textarea:</Form.Label>
            <Form.Control as="textarea" rows={3} name="content" />
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
                width="800px"
              />
            )}
          </Form.Group>
          <div className="d-flex">
            <Button className="me-2" type="submit" variant="success">
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
            <ButtonCancel handleClickCancel={handleHiddenForm} />
          </div>
        </Form>
      ) : (
        <ButtonAdd handleClickAdd={() => handleShowForm()} />
      )}
    </div>
  );
}

export default PostAddForm;
