/* eslint-disable eqeqeq */
import React from "react";
import Style from "./style.module.css";
import { Typography } from "../Typography";

const Card = ({ bg, hero, title, text, name }) => {
  return (
    <div className={Style.card}>
      <img className={Style.card_background} src={bg} alt="dragon background" />
      {name == "spiderman" ? (
        <img className={Style.hero_spider} src={hero} alt="dragon hero" />
      ) : (
        <img className={name == "superman" ? Style.hero_super : Style.hero} src={hero} alt="dragon hero" />
      )}
      {title &&
        (name == "spiderman" ? (
          <img className={Style.card_title_spiderman} src={title} alt="spiderman" />
        ) : (
          <img className={Style.card_title} src={title} alt="ti" />
        ))}

      <div className={Style.card_text}>
        <Typography variant={"h5"}>{text}</Typography>
      </div>
    </div>
  );
};

export default Card;
