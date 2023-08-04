import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddComments } from "../../store/actions/CommentActions";
import "../../assets/css/text.css";
import ButtonAdd from "../public/ButtonAdd";
import ButtonCancel from "../public/ButtonCancel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function CommentAddForm(props) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.id);
  const [showForm, setShowForm] = useState(false);
  console.log("comment add form");

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    let content = e.target.content.value;
    if (content && content !== "\n") {
      let result = window.confirm("Are you want add new comment?");
      if (result) {
        content = content.replace(/\n/g, "<br/>");
        dispatch(AddComments(content, "0000", props.postId, userId));
        setShowForm(false);
      }
    } else {
      alert("You must enter content!");
    }
  };

  const handleShowForm = (e) => {
    setShowForm(true);
  };
  const handleHiddenForm = (e) => {
    setShowForm(false);
  };

  return (
    <div className="mb-3">
      {showForm ? (
        <Form
          className="border shadow p-2 bg-body rounded"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label>Comment:</Form.Label>
            <Form.Control as="textarea" rows={3} name="content" />
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

export default CommentAddForm;
