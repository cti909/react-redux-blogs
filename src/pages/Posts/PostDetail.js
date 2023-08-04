import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostItem from "../../components/Posts/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { GetDetailPost } from "../../store/actions/PostActions";
import Header from "../../parts/Header";
import Footer from "../../parts/Footer";
import { Button, Container } from "react-bootstrap";
import CommentsList from "../../components/Comments/CommentsList";
import "../../assets/css/postAction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function PostDetail(props) {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const postDetail = useSelector((state) => state.posts.data);
  const userId = useSelector((state) => state.auth.user.id) || 0;
  const [showGoToTop, setShowGoToTop] = useState(false);

  console.log(postDetail.length);
  console.log("render");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {}, [userId]);
  useEffect(() => {
    dispatch(GetDetailPost(postId, userId));
  }, [dispatch, userId]);

  const handleBackToListPosts = () => {
    window.history.back();
  };

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <div className="position-fixed back-to-list ">
        <Button
          className="rounded-circle"
          variant="secondary"
          onClick={handleBackToListPosts}
        >
          <FontAwesomeIcon icon={faArrowLeft} shake />
        </Button>
      </div>
      <main>
        <Container className="my-3">
          {postDetail.length !== 0 && (
            <PostItem item={postDetail[0]} user={userId} />
          )}

          <CommentsList postId={postId} userId={userId} />
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

export default PostDetail;
