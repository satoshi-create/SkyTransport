import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/Button'
import droonImg from "../images/droon.png"

const Hero = () => {
  return (
    <section className="hero partsGrid">
      <StaticImage
        alt="hero-img"
        src="../images/map-hero.png"
        className="hero-img"
        placeholder="tracedSVG"
      />
      <div className="grid12">
        <h1>
          <span class="zen sora1">ソ</span>
          <span class="zen sora2">ラ</span>
          から宅配を
          <br />
          変えるチャレンジ
        </h1>
        <Button children={"事業を見る"} />
        <figure className="droon-fig">
          <img src={droonImg} alt="droon" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
