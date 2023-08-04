import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home/Home";
import PostsHome from "./pages/Posts/PostsHome";
import LoginPage from "./pages/Auth/LoginPage";
import LogoutPage from "./pages/Auth/LogoutPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import UserHome from "./pages/User/UserHome";
import PostDetail from "./pages/Posts/PostDetail";
import ShowImage from "./pages/public/ShowImage";
import { ROOT_URL } from "../src/constants/config";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsHome />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/user" element={<UserHome />} />
        <Route path="image/:imageName" element={<ShowImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
