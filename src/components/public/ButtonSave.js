import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function ButtonSave({ handleClickSave }) {
  return (
    <>
      <Button variant="success" onClick={handleClickSave}>
        <FontAwesomeIcon icon={faFloppyDisk} />
      </Button>
    </>
  );
}

ButtonSave.propTypes = {};

export default ButtonSave;
