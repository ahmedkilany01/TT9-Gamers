import React from "react";
import Style from "./style.module.css";

const Container = ({ children }) => {
  return <div className={Style.container}>{children}</div>;
};

export default Container;
