import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Login } from "../../store/actions/AuthActions";
import { useNavigate } from "react-router-dom";
import { LOGIN_SUCCESS } from "../../constants/ActionConstant";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
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
    dispatch(Login(email, password))
      .then((res) => {
        if (res === LOGIN_SUCCESS) {
          navigate("/");
        } else {
          alert("Register failed");
        }
      })
      .catch((error) => {
        // Xử lý lỗi và cập nhật thông báo lỗi lên state.
        // setError(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <button
        type="submit"
        className="btn btn-secondary form-control form-control-lg mt-3"
      >
        <strong>Sign in</strong>
      </button>
    </Form>
  );
};

export default LoginForm;
