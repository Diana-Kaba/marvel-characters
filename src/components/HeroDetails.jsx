import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchHero } from "../lib/utils";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HeroDetails = () => {
  const [hero, setHero] = useState();
  let { id } = useParams(0);

  useEffect(() => {
    fetchHero(id)
      .then((data) => setHero(data[0]))
      .catch((err) => console.error(err));
  }, []);
  //console.log("hero");
  //console.log(hero);
  if (!hero) return;

  return (
    <div className="container large">
      <Header></Header>
      <div className="hero__details-container white">
        <img
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt="hero image full size"
        />
        <div className="hero__details">
          <h4>Name</h4>
          <p>{hero.name}</p>
          {hero.description ? (
            <>
              <h4>Description</h4>
              <p>{hero.description}</p>
            </>
          ) : null}
          <div className="hero__series">
            <h4>Series</h4>
            <ul>
              {hero.series.items
                ? hero.series.items.map((title) => (
                    <li key={Math.random() * 1000}>{title.name}</li>
                  ))
                : null}
            </ul>
          </div>
          <div>
            <h4>Details</h4>
            <div className="url">{hero.urls[0].url}</div>
            <br />
            <div className="url">{hero.urls[1].url}</div>
            <br />
            <div className="url">{hero.urls[2].url}</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HeroDetails;
