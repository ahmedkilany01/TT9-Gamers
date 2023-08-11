import React from "react";
import Style from "./style.module.css";
import { Typography } from "../Typography";
import { useThemeContext } from "../../context/ThemeContext";
import { THEMES } from "../../constants";

const LastPlayedDiv = ({ img, text, hover }) => {
  const { theme } = useThemeContext();
  const hovered = () => {
    switch (hover) {
      case "sky_blue":
        return Style.sky_blue;
      case "blue":
        return Style.blue;
      case "green":
        return Style.green;
      case "yellow":
        return Style.yellow;

      default:
        break;
    }
  };

  return (
    <div className={`${Style.div} ${theme === THEMES.LIGHT ? Style.div_dark : Style.div_light}`}>
      <img className={hovered()} src={img} alt="hero last played" />
      <Typography variant={"h5"}>{text}</Typography>
    </div>
  );
};

export default LastPlayedDiv;
