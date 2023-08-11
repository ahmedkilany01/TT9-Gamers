import React from "react";
import Style from "./style.module.css";
import { Typography } from "../Typography";

const MostRecent = () => {
  return (
    <div className={Style.trophy}>
      <Typography variant={"h3"}>most recent trophy</Typography>
      <div className={Style.trophy_img}>
        <div className={Style.cup}>
          <img src="assets/cup.png" alt="" />
        </div>
        <div className={Style.text}>
          <Typography variant={"h4"}>assassin's creed odyssey</Typography>
          <Typography variant={"body1"}>last played: 34 hours ago</Typography>
        </div>
      </div>
    </div>
  );
};

export default MostRecent;
