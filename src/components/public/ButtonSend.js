import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function ButtonSend({ handleClickSend, type }) {
  return (
    <>
      <Button variant="primary" onClick={handleClickSend}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </Button>
    </>
  );
}

ButtonSend.propTypes = {};

export default ButtonSend;
