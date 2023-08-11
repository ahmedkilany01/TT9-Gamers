import React from "react";
import Style from "./style.module.css";
import { Typography } from "../Typography";
import LastPlayedDiv from "../LastPlayedDiv";
import { lastPlayed } from "../../mock/data";

const LastPlayed = () => {
  return (
    <div className={Style.last_played}>
      <Typography variant={"h3"}>Last played</Typography>
      <div className={Style.last_played_children}>
        {lastPlayed.map((p) => (
          <LastPlayedDiv key={p.color} img={p.img} text={p.text} hover={p.color} />
        ))}
      </div>
    </div>
  );
};

export default LastPlayed;
