import React, { Component } from "react";
import Style from "./style.module.css";
import Image from "../Image";

export default class SocialIcon extends Component {
  render() {
    const { icon } = this.props;
    return (
      <div className={Style.icon}>
        <Image ImageSrc={icon} />
      </div>
    );
  }
}
