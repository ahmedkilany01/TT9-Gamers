import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { ROLES } from "../../constants";
import { PATHS } from "../../router/paths";

const UserGuard = ({ children }) => {
  const { role } = useAuthContext();

  if (role === ROLES.ADMIN || role === ROLES.USER) return children;

  return <Navigate to={PATHS.LOGIN} replace={true} />;
};

export default UserGuard;
