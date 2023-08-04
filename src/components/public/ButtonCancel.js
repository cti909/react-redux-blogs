import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function ButtonCancel({ handleClickCancel }) {
  return (
    <>
      <Button variant="danger" onClick={handleClickCancel}>
        <FontAwesomeIcon icon={faX} />
      </Button>
    </>
  );
}

ButtonCancel.propTypes = {};

export default ButtonCancel;
