import React, { useState, useEffect, useRef } from "react";
import Header from "../../parts/Header";
import Footer from "../../parts/Footer";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { GetAllPosts, FilterAllPosts } from "../../store/actions/PostActions";
import PostsList from "../../components/Posts/PostsList";
import CustomPagination from "../../components/Posts/CustomPagination";
import FilterPosts from "../../components/Posts/FilterPosts";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/postAction.css";

function PostsHome(props) {
  console.log("re render");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const postsData = useSelector((state) => state.posts.data) ?? null; // data
  const pagination = useSelector((state) => state.posts.pagination);
  const userId = useSelector((state) => state.auth.user.id) || 0;

  const searchParams = new URLSearchParams(location.search);
  let page =
    parseInt(searchParams.get("page")) || parseInt(pagination.currentPage) || 1;
  let categoryId = parseInt(searchParams.get("categoryId")) || 1;
  let column = searchParams.get("column") || "updatedAt";
  let sortType = searchParams.get("sortType") || "desc";
  let search = searchParams.get("search") || "";
  let totalPages = pagination.totalPages || 1;

  //get data posts
  useEffect(() => {
    dispatch(GetAllPosts(userId));
  }, [userId]);

  // cap nhat lai state khi param url thay doi
  useEffect(() => {
    console.log("calllllll filter");
    dispatch(
      FilterAllPosts(
        categoryId || 1,
        page || 1,
        column || "updatedAt",
        sortType || "desc",
        search || "",
        userId
      )
    );
  }, [page, categoryId, column, sortType, search, userId]);

  // chuyen len dau trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onPageChange = (pageNumber) => {
    console.log(pageNumber);
    navigate(
      `/posts?categoryId=${categoryId}&page=${pageNumber}&column=${column}&sortType=${sortType}&search=${search}`
    );
    scrollToTop();
  };

  const handleSelectCategoriesChange = (e) => {
    console.log(e.target.value);
    navigate(
      `/posts?categoryId=${e.target.value}&page=1&column=${column}&sortType=${sortType}&search=${search}`
    );
  };

  // thay doi select
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    navigate(
      `/posts?categoryId=${categoryId}&page=1&column=${e.target.value}&sortType=${sortType}&search=${search}`
    );
  };

  //thay doi sort
  const handleSortChange = (e) => {
    console.log(e.target.value);
    navigate(
      `/posts?categoryId=${categoryId}&page=1&column=${column}&sortType=${e.target.value}&search=${search}`
    );
  };

  // search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.seachToken.value);
    navigate(
      `/posts?categoryId=${categoryId}&page=1&column=${column}&sortType=${sortType}&search=${e.target.seachToken.value}`
    );
  };

  const [showGoToTop, setShowGoToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
      console.log("set state");
    };
    window.addEventListener("scroll", handleScroll);
    // clean function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Container className="my-3">
          <FilterPosts
            handleSelectCategoriesChange={handleSelectCategoriesChange}
            handleSelectChange={handleSelectChange}
            handleSortChange={handleSortChange}
            sortName={sortType}
            categoryId={categoryId}
            column={column}
            handleSearchSubmit={handleSearchSubmit}
          />
          {/* show note */}
          {postsData && (
            <PostsList
              postsData={postsData}
              column={column}
              sortType={sortType}
              search={search}
            />
          )}
          {/* Pagination */}
          <div className="d-flex justify-content-center">
            <CustomPagination
              totalPages={totalPages}
              currentPage={page}
              onPageChange={onPageChange}
            />
          </div>
        </Container>
      </main>
      {showGoToTop && (
        <div className="position-fixed back-to-top">
          <Button
            className="rounded-circle"
            onClick={scrollToTop}
            variant="outline-dark"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </Button>
        </div>
      )}
      <Footer />
    </>
  );
}

export default PostsHome;
