import React from "react";
import "./Hero.css";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

const Hero = ({
  HeroData,
  setPlayStatus,
  setHeroCount,
  HeroCount,
  PlayStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{HeroData.text1}</p>
        <p>{HeroData.text2}</p>
      </div>

      <div className="hero-explore">
        <p>explore the feature</p>
        <img src={arrow_btn}></img>
      </div>

      <div className="hero-play">
        <ul className="hero-li">
          <li
            onClick={() => setHeroCount(0)}
            className={HeroCount === 0 ? "hero-li orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={HeroCount === 1 ? "hero-li orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={HeroCount === 2 ? "hero-li orange" : "hero-dot"}
          ></li>
        </ul>

        <div className="heroplay">
          <img
            onClick={() => setPlayStatus(!PlayStatus)}
            src={PlayStatus ? pause_icon : play_icon}
          ></img>
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
