import React from "react";
import Style from "./style.module.css";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import { THEMES } from "../../constants";

const GamesPage = () => {
  const { theme } = useThemeContext();
  return (
    <div className={`${Style.div_parent} ${theme === THEMES.LIGHT ? Style.light : Style.dark}`}>
      <Sidebar />
      <span className={`${Style.line} ${theme === THEMES.LIGHT ? Style.line_dark : Style.line_light}`}></span>
      <main className={Style.main}>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default GamesPage;
