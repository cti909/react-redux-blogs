import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function ButtonAdd({ handleClickAdd }) {
  return (
    <>
      <Button variant="success" onClick={handleClickAdd}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </>
  );
}

ButtonAdd.propTypes = {};

export default ButtonAdd;
