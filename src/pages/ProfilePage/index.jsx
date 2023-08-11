import React from "react";
import Style from "./style.module.css";
import { Typography } from "../../components/Typography";
import { useAuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const { user } = useAuthContext();
  return (
    <div className={Style.profile}>
      <div className={Style.text}>
        <Typography variant={"h3"}>{user?.name}</Typography>
        <Typography variant={"h3"}>{user?.email} </Typography>
        <Typography variant={"h3"}>{user?.isAdmin ? "admin" : "user"}</Typography>
      </div>
      <div className={Style.profile_img}>
        <img src="assets/profile_img.jpg" alt="profile pic" />
      </div>
    </div>
  );
};

export default ProfilePage;
