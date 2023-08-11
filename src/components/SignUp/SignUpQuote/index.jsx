import React, { Component } from "react";
import Style from "./style.module.css";
import Image from "../../Image";
import { Typography } from "../../Typography";

export default class SignUpQuote extends Component {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.right__div}>
          <div className={Style.right__div__icon}>
            <Image ImageSrc="/assets/Group 3 (1).svg" />
            <Typography variant="h6">Gamers</Typography>
          </div>
          <div className={Style.right__div__f__image}>
            <Image ImageSrc="/assets/Group.svg" />
          </div>
          <div className={Style.right__div__text}>
            <div className={Style.qout}>“</div>
            <Typography variant="body1">
              I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their
              lives... about the day ahead of them.
            </Typography>
            <Typography variant="h4">Hideo Kojima</Typography>
          </div>
          <div className={Style.right__div__image}>
            <Image ImageSrc="/assets/Vector 1.svg" />
          </div>
        </div>
      </div>
    );
  }
}
