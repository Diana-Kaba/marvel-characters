import React from "react";
import { useState } from "react";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

const IMG_FANTASTIC = "portrait_fantastic";

const Home = () => {
  const [heroes, setHeroes] = useState([]);

  let cards;
  //console.log(heroes);
  if (heroes) {
    cards = heroes.map((hero) => (
      <Card
        name={hero.name}
        key={hero.id}
        id={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
      />
    ));
  }
  return (
    <Container>
      <div>
        <Header></Header>
        <SearchBar setter={setHeroes}/>
        <Grid>{cards ? cards : null}</Grid>
        <Footer></Footer>
      </div>
    </Container>
  );
};

export default Home;