import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { setUser } from "../store/actions/AuthActions";

function Header(prop) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userFromStore = useSelector((state) => state.auth.user);

  const getUserLocal = () => {
    let userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    console.log(user);
    return user;
  };

  // Nếu trạng thái user trong Redux store là một object rỗng, thì lấy dữ liệu từ Local Storage và cập nhật vào Redux store
  useEffect(() => {
    if (Object.keys(userFromStore).length === 0) {
      const userFromStore = getUserLocal();
      if (userFromStore) {
        dispatch(setUser(userFromStore));
      }
    }
  }, [userFromStore, dispatch]);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} className="App-logo" alt="logo" />
          Blogs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/posts">Posts</Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <div className="d-flex align-items-center">
                  <span className="text-white">{userFromStore.name}</span>
                </div>
                <NavDropdown
                  title={<FontAwesomeIcon icon={faGear} spin />}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/user">My account</NavDropdown.Item>
                  <NavDropdown.Item href="#">Setting</NavDropdown.Item>
                  <NavDropdown.Item href="#">Help</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/logout">
                    <Button className="w-100" variant="primary">
                      Logout
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link href="/register">
                  <Button className="w-100" variant="primary">
                    Register
                  </Button>
                </Nav.Link>
                <Nav.Link href="/login">
                  <Button className="w-100" variant="primary">
                    Login
                  </Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
