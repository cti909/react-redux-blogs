import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function ButtonEdit({ handleClickEdit }) {
  return (
    <>
      {/* <Button variant="warning" onClick={() => handleClickEdit}></Button> */}
      <Button variant="warning" onClick={handleClickEdit}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </Button>
    </>
  );
}

ButtonEdit.propTypes = {};

export default ButtonEdit;
