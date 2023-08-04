import React from "react";
import PropTypes from "prop-types";
import Header from "../../parts/Header";
import Footer from "../../parts/Footer";
import { Image } from "react-bootstrap";
import backgroundHome from "../../assets/images/background-home.jpg";
import "../../assets/css/homepage.css";

function Home(props) {
  return (
    <>
      <Header />
      <div>
        <Image src={backgroundHome} fluid="true" className="image-backgound" />
      </div>
      <Footer />
    </>
  );
}

Home.propTypes = {};

export default Home;
