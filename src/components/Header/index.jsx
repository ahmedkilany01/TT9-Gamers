import React from "react";
import Style from "./style.module.css";
import { Typography } from "../Typography";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const { user } = useAuthContext();
  return (
    <header className={Style.header}>
      <div className={Style.profile_name}>
        <Typography variant={"h4"}>Welcome back,</Typography>
        <Typography variant={"h4"}>{user?.name}</Typography>
      </div>
      <div className={Style.profile_img}>
        <Link to={PATHS.PROFILE}>
          <img src="assets/profile_img.jpg" alt="profile pic" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
