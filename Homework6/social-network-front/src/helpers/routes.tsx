import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/public/Layout";
import { Home } from "../pages/public/Home";
import { Register } from "../pages/public/Auth/Register";
import { Login } from "../pages/public/Auth/Login";
import { AccountLayout } from "../pages/protected/AccountLayout";
import { Account } from "../pages/protected/Account/Account";
import { Settings } from "../pages/protected/Account/Settings";
import { NotFound } from "../pages/NotFound";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "profile",
    element: <ProtectedRoutes />,
    children: [
      { 
        path: "", element: <AccountLayout /> ,
        children: [
            { index: true, element: <Account /> },
            { path: "settings", element: <Settings /> },
        ]
      },

    ],
  },
  { path: "*", element: <NotFound /> },
]);