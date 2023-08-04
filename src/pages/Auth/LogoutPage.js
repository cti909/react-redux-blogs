import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Logout } from "../../store/actions/AuthActions";
import { useNavigate } from "react-router-dom";

LogoutPage.propTypes = {};

function LogoutPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(Logout());
  useEffect(() => {
    navigate("/");
  }, []);
  return <></>;
}

export default LogoutPage;
