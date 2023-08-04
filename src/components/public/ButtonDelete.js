import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DeleteNotes } from "../../store/actions/PostActions";

function ButtonDelete({ handleClickDelete }) {
  return (
    <>
      <Button variant="danger" onClick={handleClickDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </>
  );
}

ButtonDelete.propTypes = {};

export default ButtonDelete;
