import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Image } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import ButtonCancel from "../../components/public/ButtonCancel";
import { MEDIA_URL } from "../../constants/config";
import "../../assets/css/image.css";

function ShowImage(props) {
  const { imageName } = useParams();
  console.log(imageName);

  const handleClickCancel = () => {
    window.history.back();
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          background: `#212529`,
        }}
      >
        <div className="position-fixed button-cancel">
          <ButtonCancel handleClickCancel={handleClickCancel} />
        </div>
        <Image
          className="image-review"
          src={`${MEDIA_URL}${imageName}`}
          alt="Preview image"
        />
      </div>
    </>
  );
}

ShowImage.propTypes = {};

export default ShowImage;
