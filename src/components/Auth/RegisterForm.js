// RegisterForm.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { registerSuccess, registerFail } from './path/to/authSlice';
// import authService from './path/to/authService';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Register } from "../../store/actions/AuthActions";
import { useNavigate } from "react-router-dom";
import { REGISTER_FAILED } from "../../constants/ActionConstant";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  const handleChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const handleChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Register(name, email, password, address))
      .then((res) => {
        if (res === REGISTER_FAILED) {
          alert("Register failed");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        // Xử lý lỗi và cập nhật thông báo lỗi lên state.
      });
  };

  return (
    // them input upload avatar
    <Form onSubmit={handleSubmit}>
      <div className="form-outline form-white mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <Input
          type="name"
          name="name"
          id="name"
          className="form-control form-control-lg"
          placeholder="Enter Name"
          onChange={handleChangeName}
          validations={[required]}
        />
        {/* Thêm xử lý hiển thị lỗi trong React (nếu cần) */}
      </div>
      <div className="form-outline form-white mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          className="form-control form-control-lg"
          placeholder="Enter Email"
          onChange={handleChangeEmail}
          validations={[required]}
        />
        {/* Thêm xử lý hiển thị lỗi trong React (nếu cần) */}
      </div>
      <div className="form-outline form-white mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <Input
          name="password"
          id="password"
          type="password"
          className="form-control form-control-lg"
          placeholder="Enter Password"
          onChange={handleChangePassword}
          validations={[required]}
        />
        {/* Thêm xử lý hiển thị lỗi trong React (nếu cần) */}
      </div>
      <div className="form-outline form-white mb-3">
        <label className="form-label" htmlFor="address">
          Address
        </label>
        <Input
          name="address"
          id="address"
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Address"
          onChange={handleChangeAddress}
          validations={[required]}
        />
        {/* Thêm xử lý hiển thị lỗi trong React (nếu cần) */}
      </div>
      <button
        type="submit"
        className="btn btn-secondary form-control form-control-lg mt-3"
      >
        <strong>Register</strong>
      </button>
    </Form>
  );
};

export default RegisterForm;
