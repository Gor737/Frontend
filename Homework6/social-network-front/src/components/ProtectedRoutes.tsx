import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    const authContext = useContext(AuthContext);
    console.log("PROTECTED ROUTE", authContext);

  if (!authContext) throw new Error("Context cannot find");
  if (authContext.loading) {
    return <div>...Loading</div>;
  } else if (!authContext.user) {
    return <Navigate to={"/login"} />;
  } else {
    return <Outlet />;
  }
};
