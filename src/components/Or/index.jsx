import React, { Component } from "react";
import Style from "./style.module.css";

export default class Or extends Component {
  render() {
    return (
      <div className={Style.or_container}>
        <span></span>
        <div className={Style.or}>Or</div>
        <span></span>
      </div>
    );
  }
}
