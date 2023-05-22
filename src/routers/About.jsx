import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <Container>
      <div className="title">
        <div className="white">
        <Header></Header>
        <figure>
          <figcaption className="cap-about">ABOUT MARVEL</figcaption>
          <img src="https://storage.yvision.kz/images/user/orambaeva/M8w91bI85DLuW6H0mOQ0On6iyZHaL7.jpg" alt="" width={720} height={375}/>
        </figure>
        <p className="txt-about">Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt Disney Company, is one of the world's most prominent character-based entertainment companies, built on a proven library of more than 8,000 characters featured in a variety of media over seventy-five years. Marvel utilizes its character franchises in entertainment, licensing and publishing. For more information visit marvel.com.</p>
        <Footer></Footer>
        </div>
      </div>
    </Container>
  );
};

export default About;
