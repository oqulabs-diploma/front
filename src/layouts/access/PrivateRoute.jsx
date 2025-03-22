import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "context/AuthContext";

const PrivateRoute = ({ children, allowedRoles = [] }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return null;
  }

  console.log("user from context", user);
  console.log("allowedRoles", allowedRoles);

  if (!user) {
    return <Navigate to="/sign-in/cover" state={{ from: location }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default PrivateRoute;
